'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');

  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      setError('No Order ID found in transaction URL.');
      return;
    }

    async function checkStatus() {
      try {
        const res = await fetch('/api/payments/verify-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            order_id: orderId
          })
        });

        const json = await res.json();

        if (res.ok && json.success) {
          const status = json.status || json.order?.order_status;
          setOrderData({
            success: true,
            status: status,
            order: json.order,
            payment: json.payment
          });

          // If paid, ensure record is synced to Firestore
          if (status === 'PAID') {
            try {
              const custDetails = json.order?.customer_details || {};
              await setDoc(doc(db, 'payments', orderId), {
                orderId: orderId,
                cfOrderId: json.order?.cf_order_id || '',
                amount: json.order?.order_amount || 0,
                currency: json.order?.order_currency || 'INR',
                status: 'PAID',
                customerName: custDetails.customer_name || json.order?.customer_name || 'Anonymous',
                customerPhone: custDetails.customer_phone || json.order?.customer_phone || '',
                customerEmail: custDetails.customer_email || json.order?.customer_email || '',
                purpose: json.order?.order_note || 'Software Services',
                paymentMethod: json.payment?.payment_method?.upi ? 'UPI' : (typeof json.payment?.payment_method === 'string' ? json.payment?.payment_method : 'Online'),
                cfPaymentId: json.payment?.cf_payment_id || '',
                bankReference: json.payment?.bank_reference || '',
                paymentTime: json.payment?.payment_completion_time || json.payment?.payment_time || new Date().toISOString(),
                verifiedAt: serverTimestamp()
              }, { merge: true });
              console.info('✅ Payment record successfully synced to Firestore:', orderId);
            } catch (dbErr) {
              console.warn('Client Firestore save warning:', dbErr);
            }
          }
        } else {
          setError(json?.error || json?.message || 'Failed to verify transaction status with payment gateway.');
        }
      } catch (err) {
        console.error('Verification error:', err);
        setError(err.message || 'Network error while verifying transaction.');
      } finally {
        setLoading(false);
      }
    }

    checkStatus();
  }, [orderId]);

  if (loading) {
    return (
      <div style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
        color: '#f8fafc',
        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
      }}>
        <div style={{
          width: '54px',
          height: '54px',
          border: '4px solid rgba(56, 189, 248, 0.2)',
          borderTopColor: '#38bdf8',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '24px'
        }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 8px 0' }}>
          Verifying Transaction Rail...
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '420px', margin: 0 }}>
          Connecting with Cashfree RBI Payment Network to confirm settlement and order status.
        </p>
      </div>
    );
  }

  const isPaid = orderData?.status === 'PAID';
  const order = orderData?.order;
  const payment = orderData?.payment;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0b0f19 0%, #0f172a 40%, #0b0f19 100%)',
      color: '#f8fafc',
      fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
      paddingTop: '100px',
      paddingBottom: '80px',
      paddingLeft: '16px',
      paddingRight: '16px'
    }}>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        background: 'rgba(15, 23, 42, 0.85)',
        border: `1px solid ${isPaid ? 'rgba(74, 222, 128, 0.35)' : 'rgba(239, 68, 68, 0.35)'}`,
        borderRadius: '24px',
        padding: 'clamp(20px, 4vw, 40px)',
        backdropFilter: 'blur(20px)',
        boxShadow: isPaid
          ? '0 25px 60px -15px rgba(74, 222, 128, 0.2)'
          : '0 25px 60px -15px rgba(239, 68, 68, 0.2)'
      }}>

        {/* Top Icon & Badge */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '76px',
            height: '76px',
            borderRadius: '50%',
            margin: '0 auto 18px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            background: isPaid ? 'rgba(74, 222, 128, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            border: `2px solid ${isPaid ? '#4ade80' : '#ef4444'}`,
            boxShadow: `0 0 30px ${isPaid ? 'rgba(74, 222, 128, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
          }}>
            {isPaid ? '✓' : '✕'}
          </div>

          <div style={{
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: '800',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '10px',
            background: isPaid ? 'rgba(74, 222, 128, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            color: isPaid ? '#4ade80' : '#f87171',
            border: `1px solid ${isPaid ? '#4ade80' : '#ef4444'}`
          }}>
            {isPaid ? 'PAYMENT SUCCESSFUL' : `TRANSACTION ${orderData?.status || 'FAILED'}`}
          </div>

          <h1 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '900', margin: '0 0 6px 0', color: '#ffffff' }}>
            {isPaid ? 'Official Receipt & Confirmation' : 'Payment Not Completed'}
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>
            {isPaid
              ? 'Thank you! Your payment has been securely settled with ChittorTech via Cashfree.'
              : (error || 'The payment was not completed or was cancelled by the user. No amount was deducted.')}
          </p>
        </div>

        {/* Invoice Summary Box */}
        {order && (
          <div style={{
            background: 'rgba(2, 6, 23, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '28px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Amount Settled</div>
                <div style={{ fontSize: '28px', fontWeight: '900', color: isPaid ? '#4ade80' : '#ffffff' }}>
                  ₹{Number(order.order_amount).toLocaleString('en-IN')}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Rail Reference</div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#38bdf8' }}>Cashfree PG v2023</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', fontSize: '13px' }}>
              <div>
                <span style={{ color: '#94a3b8' }}>Order ID:</span>
                <div style={{ fontWeight: '700', color: '#f8fafc', wordBreak: 'break-all' }}>{order.order_id}</div>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Client Name:</span>
                <div style={{ fontWeight: '700', color: '#f8fafc' }}>{order.customer_details?.customer_name || order.customer_name || 'Valued Client'}</div>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Mobile Phone:</span>
                <div style={{ fontWeight: '700', color: '#f8fafc' }}>+91 {order.customer_details?.customer_phone || order.customer_phone || 'N/A'}</div>
              </div>
              {(order.customer_details?.customer_email || order.customer_email) && (
                <div>
                  <span style={{ color: '#94a3b8' }}>Email ID:</span>
                  <div style={{ fontWeight: '700', color: '#f8fafc' }}>{order.customer_details?.customer_email || order.customer_email}</div>
                </div>
              )}
              <div>
                <span style={{ color: '#94a3b8' }}>Service Purpose:</span>
                <div style={{ fontWeight: '700', color: '#f8fafc' }}>{order.order_note || 'Software Engineering'}</div>
              </div>
              {payment?.cf_payment_id && (
                <div>
                  <span style={{ color: '#94a3b8' }}>Cashfree Payment ID:</span>
                  <div style={{ fontWeight: '700', color: '#38bdf8' }}>{payment.cf_payment_id}</div>
                </div>
              )}
              {payment?.bank_reference && (
                <div>
                  <span style={{ color: '#94a3b8' }}>Bank / UPI UTR:</span>
                  <div style={{ fontWeight: '700', color: '#4ade80' }}>{payment.bank_reference}</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {isPaid ? (
            <>
              <a
                href={`https://wa.me/917597451057?text=Hi%20ChittorTech!%20I%20just%20completed%20payment%20of%20₹${order?.order_amount}%20for%20Order%20ID:%20${order?.order_id}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  flex: '1 1 260px',
                  padding: '16px 28px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  fontWeight: '800',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontSize: '15px',
                  boxShadow: '0 8px 25px -4px rgba(16, 185, 129, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                💬 Notify on WhatsApp ➔
              </a>
              <Link
                href="/"
                style={{
                  flex: '1 1 180px',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#ffffff',
                  fontWeight: '700',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                🏠 Return Home
              </Link>
            </>
          ) : (
            <Link
              href="/pay"
              style={{
                flex: '1 1 220px',
                padding: '14px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                color: '#ffffff',
                fontWeight: '700',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              🔄 Retry Payment on /pay
            </Link>
          )}
        </div>

        {/* Support Note */}
        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '12px', color: '#64748b' }}>
          Official payment handled by ChittorTech Enterprise Solutions • Need help? Call <a href="tel:+917597451057" style={{ color: '#38bdf8' }}>+91 75974 51057</a>
        </div>

      </div>
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0b0f19' }} />}>
      <PaymentStatusContent />
    </Suspense>
  );
}
