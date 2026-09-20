import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const orderId = body.order_id;

    if (!orderId) {
      return NextResponse.json({ success: false, error: 'order_id is required.' }, { status: 400 });
    }

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const isProd = process.env.CASHFREE_ENV === 'PRODUCTION';

    if (!appId || !secretKey) {
      return NextResponse.json({ success: false, error: 'Payment gateway configuration missing.' }, { status: 500 });
    }

    const baseEndpoint = isProd
      ? 'https://api.cashfree.com/pg'
      : 'https://sandbox.cashfree.com/pg';

    const orderRes = await fetch(`${baseEndpoint}/orders/${encodeURIComponent(orderId)}`, {
      method: 'GET',
      headers: {
        'x-api-version': '2023-08-01',
        'x-client-id': appId,
        'x-client-secret': secretKey
      }
    });

    const orderData = await orderRes.json();

    if (!orderRes.ok) {
      return NextResponse.json({ success: false, error: orderData.message || 'Order fetch failed.' }, { status: orderRes.status });
    }

    // Fetch payment attempts details
    let paymentDetails = null;
    try {
      const payRes = await fetch(`${baseEndpoint}/orders/${encodeURIComponent(orderId)}/payments`, {
        method: 'GET',
        headers: {
          'x-api-version': '2023-08-01',
          'x-client-id': appId,
          'x-client-secret': secretKey
        }
      });
      if (payRes.ok) {
        const payList = await payRes.json();
        if (Array.isArray(payList) && payList.length > 0) {
          paymentDetails = payList[payList.length - 1]; // Latest attempt
        }
      }
    } catch (e) {
      console.warn('Could not fetch payment attempts:', e.message);
    }

    // If order is PAID, record into Firestore
    if (orderData.order_status === 'PAID') {
      try {
        await setDoc(doc(db, 'payments', orderData.order_id), {
          orderId: orderData.order_id,
          cfOrderId: orderData.cf_order_id,
          amount: orderData.order_amount,
          currency: orderData.order_currency,
          status: orderData.order_status,
          customerName: orderData.customer_details?.customer_name || 'Anonymous',
          customerPhone: orderData.customer_details?.customer_phone || '',
          customerEmail: orderData.customer_details?.customer_email || '',
          purpose: orderData.order_note || 'Software Services',
          paymentMethod: paymentDetails?.payment_method || 'Online',
          cfPaymentId: paymentDetails?.cf_payment_id || '',
          bankReference: paymentDetails?.bank_reference || '',
          verifiedAt: serverTimestamp(),
          environment: isProd ? 'production' : 'sandbox'
        }, { merge: true });
      } catch (dbErr) {
        console.warn('Firestore payment record save warning:', dbErr.message);
      }

      // Trigger Meta WhatsApp alert to Kush Sharma (+91 75974 51057)
      try {
        const waToken = process.env.WHATSAPP_ACCESS_TOKEN;
        const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
        const adminPhone = process.env.WHATSAPP_ADMIN_PHONE || '917597451057';

        if (waToken && phoneId) {
          const alertMessage = `🎉 *PAYMENT RECEIVED VIA CASHFREE!* 💳\n\n` +
            `💰 *Amount:* ₹${orderData.order_amount}\n` +
            `👤 *Client:* ${orderData.customer_details?.customer_name || 'N/A'}\n` +
            `📱 *Phone:* ${orderData.customer_details?.customer_phone || 'N/A'}\n` +
            `📝 *Purpose:* ${orderData.order_note || 'N/A'}\n` +
            `🆔 *Order ID:* ${orderData.order_id}\n` +
            `✅ *Status:* SUCCESS (PAID)\n\n` +
            `_ChittorTech Automated Payment Rail_`;

          fetch(`https://graph.facebook.com/v18.0/${phoneId}/messages`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${waToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              messaging_product: 'whatsapp',
              to: adminPhone,
              type: 'text',
              text: { body: alertMessage }
            })
          }).catch(err => console.warn('WhatsApp alert dispatch failed:', err.message));
        }
      } catch (waErr) {
        console.warn('WhatsApp alert error:', waErr.message);
      }
    }

    return NextResponse.json({
      success: true,
      status: orderData.order_status,
      order: {
        order_id: orderData.order_id,
        order_amount: orderData.order_amount,
        order_currency: orderData.order_currency,
        order_status: orderData.order_status,
        customer_name: orderData.customer_details?.customer_name,
        customer_phone: orderData.customer_details?.customer_phone,
        customer_email: orderData.customer_details?.customer_email,
        order_note: orderData.order_note,
        created_at: orderData.created_at
      },
      payment: paymentDetails
    });

  } catch (error) {
    console.error('Verify order API error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
