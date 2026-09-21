import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { amount, customerName, customerPhone, customerEmail, purpose } = body;

    const numAmount = parseFloat(amount);
    if (!numAmount || numAmount <= 0) {
      return NextResponse.json({ success: false, error: 'Valid payment amount is required.' }, { status: 400 });
    }

    if (!customerPhone || customerPhone.replace(/\D/g, '').length < 10) {
      return NextResponse.json({ success: false, error: 'Valid 10-digit mobile number is required.' }, { status: 400 });
    }

    const cleanPhone = customerPhone.replace(/\D/g, '').slice(-10);
    const cleanName = (customerName || 'ChittorTech Client').trim();
    const cleanEmail = (customerEmail || 'client@chittortech.in').trim();
    const cleanPurpose = (purpose || 'ChittorTech Software Services').slice(0, 100);

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const isProd = process.env.CASHFREE_ENV === 'PRODUCTION';

    if (!appId || !secretKey) {
      return NextResponse.json({ success: false, error: 'Payment gateway configuration missing.' }, { status: 500 });
    }

    const endpoint = isProd
      ? 'https://api.cashfree.com/pg/orders'
      : 'https://sandbox.cashfree.com/pg/orders';

    // Generate unique order ID
    const orderId = `CT_${Date.now()}_${Math.floor(100 + Math.random() * 900)}`;

    // Determine return URL - Cashfree strictly requires HTTPS
    let origin = req.headers.get('origin') || req.headers.get('referer') || 'https://chittortech.in';
    if (!origin.startsWith('https://')) {
      origin = 'https://chittortech.in';
    }
    const cleanOrigin = origin.replace(/\/$/, '');
    const returnUrl = `${cleanOrigin}/pay/status?order_id={order_id}`;

    const payload = {
      order_id: orderId,
      order_amount: Math.round(numAmount * 100) / 100,
      order_currency: 'INR',
      customer_details: {
        customer_id: `cust_${cleanPhone}`,
        customer_name: cleanName,
        customer_email: cleanEmail,
        customer_phone: cleanPhone
      },
      order_meta: {
        return_url: returnUrl,
        notify_url: `${cleanOrigin}/api/payments/webhook`,
        payment_methods: 'upi'
      },
      order_note: cleanPurpose
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '2023-08-01',
        'x-client-id': appId,
        'x-client-secret': secretKey
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok || !data.payment_session_id) {
      console.error('Cashfree order creation failed:', data);
      return NextResponse.json({
        success: false,
        error: data.message || 'Failed to create payment session with Cashfree.'
      }, { status: res.status });
    }

    return NextResponse.json({
      success: true,
      order_id: data.order_id,
      payment_session_id: data.payment_session_id,
      cf_order_id: data.cf_order_id,
      environment: isProd ? 'production' : 'sandbox'
    });

  } catch (error) {
    console.error('Create order API error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
