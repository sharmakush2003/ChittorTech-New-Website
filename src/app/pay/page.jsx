'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CashfreePartnerPage() {
  const [calculatorAmount, setCalculatorAmount] = useState('50000');
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultWebsite, setConsultWebsite] = useState('');
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  // Live Checkout State
  const [payAmount, setPayAmount] = useState('22500');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [payPurpose, setPayPurpose] = useState('Google Play Console Setup & Android App Deployment');
  const [isPaying, setIsPaying] = useState(false);
  const [payError, setPayError] = useState('');

  const handleProceedToPay = async (e) => {
    e.preventDefault();
    setPayError('');
    setIsPaying(true);

    try {
      const gasUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbz3n1PLnpquUYngOnqqqlwYD4xtYBipBna3aJW821BY7IbY4vM3ZEuxM4ok61I-Vpgk/exec";
      
      const res = await fetch(gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'create_cashfree_order',
          amount: payAmount,
          customerName: clientName,
          customerPhone: clientPhone,
          customerEmail: clientEmail,
          purpose: payPurpose
        })
      });

      const rawText = await res.text();
      let data;
      try {
        data = JSON.parse(rawText);
      } catch (parseErr) {
        console.error('Server non-JSON response:', rawText);
        throw new Error('Payment gateway bridge returned an invalid response. Please try again.');
      }

      if (!data || (!data.success && data.status !== 'success') || !data.payment_session_id) {
        throw new Error(data?.msg || data?.message || 'Unable to initialize Cashfree payment session.');
      }

      // Launch Cashfree Drop-in Checkout
      if (typeof window !== 'undefined' && window.Cashfree) {
        const cashfree = window.Cashfree({
          mode: 'production'
        });
        cashfree.checkout({
          paymentSessionId: data.payment_session_id,
          redirectTarget: '_self'
        });
      } else {
        throw new Error('Cashfree payment SDK is loading. Please click pay again in a second.');
      }
    } catch (err) {
      console.error('Payment checkout error:', err);
      setPayError(err.message || 'Payment initiation failed.');
      setIsPaying(false);
    }
  };

  // Financial Savings Calculation
  const numAmount = parseFloat(calculatorAmount) || 0;
  const standardCompetitorFee = (numAmount * 0.0236).toFixed(0); // 2% + 18% GST = 2.36%
  const totalSaved = standardCompetitorFee;

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    setConsultSubmitted(true);
    const msg = `Hi ChittorTech! I want Turnkey Cashfree Payment Gateway Integration for my business.%0AName: ${consultName}%0APhone: ${consultPhone}%0AWebsite/App: ${consultWebsite || 'Not yet launched'}`;
    window.open(`https://wa.me/917597451057?text=${msg}`, '_blank');
  };

  return (
    <>
      <style>{`
        /* ─── Ultra-Responsive Breakpoints ─── */
        .ct-pay-wrapper {
          min-height: 100vh;
          background: linear-gradient(180deg, #0b0f19 0%, #0f172a 35%, #1e1b4b 70%, #0b0f19 100%);
          color: #f8fafc;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
          padding-top: 100px;
          padding-bottom: 90px;
          position: relative;
          overflow-x: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .ct-pay-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
          box-sizing: border-box;
          width: 100%;
        }

        .ct-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 32px;
          box-sizing: border-box;
          width: 100%;
        }

        .ct-hero-showcase {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          padding: 20px 36px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 28px;
          backdrop-filter: blur(20px);
          max-width: 100%;
          box-sizing: border-box;
        }

        .ct-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 36px;
          width: 100%;
          box-sizing: border-box;
        }

        .ct-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          width: 100%;
          box-sizing: border-box;
        }

        .ct-roadmap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          width: 100%;
          box-sizing: border-box;
        }

        .ct-calc-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 32px;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }

        /* Tablet & Mobile (Below 992px) */
        @media (max-width: 992px) {
          .ct-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ct-calc-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile (Below 768px) */
        @media (max-width: 768px) {
          .ct-pay-wrapper {
            padding-top: 75px;
            padding-bottom: 60px;
          }
          .ct-pay-container {
            padding: 0 14px;
          }
          .ct-card {
            padding: 20px 16px;
            border-radius: 18px;
          }
          .ct-hero-showcase {
            flex-direction: column;
            padding: 16px;
            gap: 16px;
            width: 100%;
          }
          .ct-hero-showcase > div {
            width: 100%;
            justify-content: center;
          }
          .ct-stats-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .ct-products-grid {
            grid-template-columns: 1fr;
          }
          .ct-roadmap-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Extra Small Screens (Below 380px) */
        @media (max-width: 380px) {
          .ct-pay-container {
            padding: 0 8px;
          }
          .ct-card {
            padding: 16px 12px;
          }
        }
      `}</style>

      <div className="ct-pay-wrapper">

        {/* Dynamic Glowing Mesh Orbs */}
        <div style={{
          position: 'absolute',
          top: '-5%',
          left: '10%',
          width: 'min(500px, 90vw)',
          height: 'min(500px, 90vw)',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }} />

        <div className="ct-pay-container">

          {/* ─── TOP STATUS BADGE ─── */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.15))',
              border: '1px solid rgba(34, 197, 94, 0.45)',
              borderRadius: '999px',
              color: '#4ade80',
              fontSize: 'clamp(10px, 2.8vw, 12px)',
              fontWeight: '800',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.25)',
              maxWidth: '100%',
              wordBreak: 'break-word',
              textAlign: 'center'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 10px #22c55e',
                flexShrink: 0
              }} />
              OFFICIAL RBI-LICENSED PAYMENT RAIL • LIVE &amp; ACTIVE
            </div>
          </div>

          {/* ─── MAIN HERO HEADLINE ─── */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{
              fontSize: 'clamp(26px, 6vw, 56px)',
              fontWeight: '900',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              margin: '0 auto 16px auto',
              maxWidth: '960px',
              wordBreak: 'break-word',
              background: 'linear-gradient(135deg, #ffffff 40%, #bae6fd 80%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              ChittorTech Partners With Cashfree Payments
            </h1>

            <p style={{
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              color: '#cbd5e1',
              maxWidth: '780px',
              margin: '0 auto 28px auto',
              lineHeight: '1.6',
              wordBreak: 'break-word'
            }}>
              A landmark fintech collaboration bringing bank-grade checkouts, 140+ cross-border currency support, and automated WhatsApp invoicing to our enterprise software ecosystem.
            </p>

            {/* ─── REAL CHITTORTECH LOGO + CASHFREE LOGO SHOWCASE ─── */}
            <div className="ct-hero-showcase">

              {/* ChittorTech Real Logo Entity */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  background: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '12px',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <img
                    src="/assets/images/ct-logo.png"
                    alt="ChittorTech Official Logo"
                    style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff' }}>ChittorTech</div>
                  <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: '600' }}>Enterprise Technology</div>
                </div>
              </div>

              {/* Synergy Badge */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
                <div style={{
                  padding: '4px 14px',
                  background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                  borderRadius: '999px',
                  color: '#ffffff',
                  fontSize: '10px',
                  fontWeight: '800',
                  letterSpacing: '0.04em'
                }}>
                  OFFICIAL ALLIANCE
                </div>
                <span style={{ fontSize: '10px', color: '#94a3b8' }}>RBI Regulated Rail</span>
              </div>

              {/* Cashfree Official Logo Entity */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  background: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '8px 16px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L20 20L8 32V8Z" fill="#10B981" />
                    <path d="M20 8L32 20L20 32V8Z" fill="#06B6D4" />
                    <circle cx="20" cy="20" r="4" fill="#ffffff" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' }}>
                      Cashfree<span style={{ color: '#10B981' }}>Payments</span>
                    </div>
                    <div style={{ fontSize: '10px', color: '#94a3b8' }}>RBI Licensed Aggregator</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Stats Grid */}
            <div className="ct-stats-grid">
              {[
                { value: '0%', label: 'Platform Fee (Festive Offer)', color: '#4ade80' },
                { value: '140+', label: 'Global Currencies (TRY, USD, AED)', color: '#38bdf8' },
                { value: '100+', label: 'Payment Modes (UPI, Cards, EMI)', color: '#c084fc' },
                { value: 'PCI-DSS', label: 'Level 1 Certified Bank Security', color: '#facc15' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '16px 12px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 'clamp(22px, 4vw, 26px)', fontWeight: '800', color: stat.color }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ─── LIVE INSTANT CLIENT CHECKOUT CARD ─── */}
          <div id="quick-pay" className="ct-card" style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.9) 100%)',
            border: '2px solid rgba(56, 189, 248, 0.4)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.2)',
            marginBottom: '48px',
            position: 'relative'
          }}>
            <Script src="https://sdk.cashfree.com/js/v3/cashfree.js" strategy="lazyOnload" />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  background: 'rgba(74, 222, 128, 0.15)',
                  border: '1px solid #4ade80',
                  borderRadius: '999px',
                  color: '#4ade80',
                  fontSize: '11px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                  Cashfree PG v2023 Live
                </div>
                <h2 style={{ fontSize: 'clamp(20px, 4.5vw, 28px)', fontWeight: '900', color: '#ffffff', margin: 0 }}>
                  Pay ChittorTech Online — Instant Invoice &amp; Project Advance
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '13px', margin: '4px 0 0 0' }}>
                  Settle milestone bills instantly via Google Pay, PhonePe, Paytm, Cards, NetBanking, or EMI.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <span style={{ fontSize: '11px', color: '#94a3b8', background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  🔒 256-Bit Bank Grade SSL
                </span>
                <span style={{ fontSize: '11px', color: '#4ade80', background: 'rgba(74,222,128,0.1)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(74,222,128,0.3)' }}>
                  ✓ Instant Receipt
                </span>
              </div>
            </div>

            {payError && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #ef4444',
                color: '#fca5a5',
                padding: '12px 16px',
                borderRadius: '12px',
                fontSize: '13px',
                marginBottom: '20px'
              }}>
                ⚠️ {payError}
              </div>
            )}

            <form onSubmit={handleProceedToPay}>
              {/* Quick Amount Presets */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#cbd5e1', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Quick Amount Select:
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[
                    { label: '₹1 (Live Verification)', val: '1' },
                    { label: '₹5,000 (Sprint)', val: '5000' },
                    { label: '₹10,000 (Milestone)', val: '10000' },
                    { label: '₹22,500 (TWA & Play Console)', val: '22500' }
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPayAmount(p.val)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '10px',
                        background: payAmount === p.val ? 'linear-gradient(135deg, #0284c7, #2563eb)' : 'rgba(255,255,255,0.06)',
                        border: `1px solid ${payAmount === p.val ? '#38bdf8' : 'rgba(255,255,255,0.12)'}`,
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#cbd5e1', marginBottom: '6px' }}>
                    Amount (INR) *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#38bdf8', fontWeight: '800' }}>₹</span>
                    <input
                      type="number"
                      required
                      min="1"
                      value={payAmount}
                      onChange={(e) => setPayAmount(e.target.value)}
                      placeholder="e.g. 22500"
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 32px',
                        borderRadius: '12px',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        color: '#ffffff',
                        fontSize: '16px',
                        fontWeight: '800',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#cbd5e1', marginBottom: '6px' }}>
                    Your Name / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Vikram Roy"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#cbd5e1', marginBottom: '6px' }}>
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="10-digit mobile (e.g. 9876543210)"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#cbd5e1', marginBottom: '6px' }}>
                    Email ID (Optional for Invoice PDF)
                  </label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="client@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Purpose */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#cbd5e1', marginBottom: '6px' }}>
                  Project / Service Note:
                </label>
                <input
                  type="text"
                  value={payPurpose}
                  onChange={(e) => setPayPurpose(e.target.value)}
                  placeholder="e.g. Google Play Console Setup & Android App Deployment"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Submit Pay Button */}
              <button
                type="submit"
                disabled={isPaying}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '14px',
                  background: isPaying
                    ? '#475569'
                    : 'linear-gradient(135deg, #10b981 0%, #0284c7 50%, #2563eb 100%)',
                  color: '#ffffff',
                  fontSize: 'clamp(14px, 3.5vw, 17px)',
                  fontWeight: '900',
                  border: 'none',
                  cursor: isPaying ? 'not-allowed' : 'pointer',
                  boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.2s ease'
                }}
              >
                {isPaying ? (
                  <>
                    <span style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#ffffff',
                      borderRadius: '50%',
                      display: 'inline-block',
                      animation: 'spin 1s linear infinite'
                    }} />
                    <span>Connecting Secure Cashfree Checkout...</span>
                  </>
                ) : (
                  <>
                    <span>⚡</span>
                    <span>Pay ₹{Number(payAmount || 0).toLocaleString('en-IN')} Securely with Cashfree (UPI / Cards / NetBanking) ➔</span>
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '11px', color: '#94a3b8' }}>
                💳 Supports Google Pay, PhonePe, Paytm QR, Visa, MasterCard, RuPay, NetBanking &amp; EMI
              </div>
            </form>
          </div>

          {/* ─── ROADMAP TRACKER ─── */}
          <div className="ct-card" style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase' }}>
                  Integration Roadmap Status
                </div>
                <h2 style={{ fontSize: 'clamp(18px, 3.5vw, 22px)', fontWeight: '800', color: '#ffffff', margin: '2px 0 0 0' }}>
                  Gateway Onboarding &amp; Deployment Tracker
                </h2>
              </div>
              <div style={{
                padding: '4px 14px',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '999px',
                color: '#4ade80',
                fontSize: '12px',
                fontWeight: '700'
              }}>
                ✅ Phase 4: Production Gateway Live &amp; Active
              </div>
            </div>

            <div className="ct-roadmap-grid">
              {[
                { step: '01', title: 'Technical Architecture', desc: 'Next.js SDK & webhook infrastructure completed', status: 'Completed', color: '#4ade80' },
                { step: '02', title: 'Sandbox Verification', desc: 'Tested simulated orders and multi-counter room sync', status: 'Completed', color: '#4ade80' },
                { step: '03', title: 'Merchant Activation', desc: 'Production account approved & 46+ payment modes enabled', status: 'Completed', color: '#4ade80' },
                { step: '04', title: 'Public Gateway Launch', desc: 'Live payments enabled with 0% fee on ChittorTech', status: 'Live Now', color: '#4ade80' },
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${item.color}30`,
                  borderRadius: '14px',
                  padding: '16px',
                  boxSizing: 'border-box'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: item.color }}>STEP {item.step}</span>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: item.color, padding: '2px 6px', borderRadius: '4px', background: `${item.color}20` }}>
                      {item.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.4' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── PRODUCTS EMPOWERED BY INTEGRATION ─── */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h2 style={{ fontSize: 'clamp(22px, 4.5vw, 32px)', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0', wordBreak: 'break-word' }}>
                Flagship Software Suites Powered by This Integration
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>
                Native Cashfree payment rails integrated across ChittorTech&apos;s proprietary products:
              </p>
            </div>

            <div className="ct-products-grid">
              
              <div className="ct-card">
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>⛩️</div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#f59e0b', textTransform: 'uppercase' }}>Flagship SaaS</div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '4px 0 8px 0' }}>
                  Dharamshala &amp; Temple Trust OS
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                  Express multi-counter check-in with advance booking collection, security deposit tracking, and automated WhatsApp donation receipts.
                </p>
                <div style={{ fontSize: '12px', color: '#38bdf8', fontWeight: '600' }}>
                  ✓ Instant Aadhaar ID Verification Rail
                </div>
              </div>

              <div className="ct-card">
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>💬</div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase' }}>AI CRM Suite</div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '4px 0 8px 0' }}>
                  ChittorDesk AI WhatsApp CRM
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                  AI chatbot agents that qualify client leads 24/7 on WhatsApp and generate 1-click Cashfree payment links directly inside chats.
                </p>
                <div style={{ fontSize: '12px', color: '#38bdf8', fontWeight: '600' }}>
                  ✓ 1-Click WhatsApp Instant Checkout
                </div>
              </div>

              <div className="ct-card">
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>🏭</div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#10b981', textTransform: 'uppercase' }}>Industrial ERP</div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '4px 0 8px 0' }}>
                  ChittorFlow Cloud ERP
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                  Designed for Rajasthan manufacturing, stone, and mining belts. Automates B2B e-invoices, transport challan payments, and batch ledger reconciliations.
                </p>
                <div style={{ fontSize: '12px', color: '#10b981', fontWeight: '600' }}>
                  ✓ Automated GSTIN Verification &amp; e-Invoicing
                </div>
              </div>

              <div className="ct-card">
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>🌍</div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#c084fc', textTransform: 'uppercase' }}>Global Services</div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '4px 0 8px 0' }}>
                  Cross-Border Software Export Desk
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                  Seamless billing for global clients in <strong>Turkey (TRY)</strong>, <strong>UAE (AED)</strong>, <strong>USA (USD)</strong>, and <strong>Europe (EUR)</strong> with automatic digital FIRCs.
                </p>
                <div style={{ fontSize: '12px', color: '#c084fc', fontWeight: '600' }}>
                  ✓ 140+ Currencies Supported
                </div>
              </div>

            </div>
          </div>

          {/* ─── SAVINGS CALCULATOR ─── */}
          <div className="ct-card" style={{
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.85) 100%)',
            border: '1px solid rgba(147, 51, 234, 0.35)',
            marginBottom: '56px'
          }}>
            <div className="ct-calc-grid">
              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'rgba(74, 222, 128, 0.15)',
                  border: '1px solid #4ade80',
                  borderRadius: '999px',
                  color: '#4ade80',
                  fontSize: '11px',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  💰 0% PLATFORM FEE BENEFIT
                </div>
                <h3 style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: '800', color: '#ffffff', margin: '0 0 10px 0' }}>
                  Calculate Your Real Savings
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5', margin: '0 0 18px 0' }}>
                  Other gateways charge 2.0% to 2.36% on every payment. With ChittorTech x Cashfree&apos;s festive advantage, your business keeps 100% of its hard-earned revenue.
                </p>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#cbd5e1', marginBottom: '6px' }}>
                    Simulate Sales / Billing Amount (INR):
                  </label>
                  <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#38bdf8', fontWeight: '700', fontSize: '16px' }}>
                      ₹
                    </span>
                    <input
                      type="number"
                      value={calculatorAmount}
                      onChange={(e) => setCalculatorAmount(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 14px 10px 32px',
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#ffffff',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        borderRadius: '10px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Savings Box */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '18px',
                padding: '24px 20px',
                boxSizing: 'border-box',
                width: '100%'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#94a3b8', fontSize: '13px' }}>
                  <span>Competitor Fee (2.36%):</span>
                  <span style={{ color: '#f87171', fontWeight: '700' }}>- ₹{Number(standardCompetitorFee).toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#94a3b8', fontSize: '13px' }}>
                  <span>ChittorTech x Cashfree:</span>
                  <span style={{ color: '#4ade80', fontWeight: '700' }}>₹0.00 (0% Waived)</span>
                </div>
                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '14px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Profit Retained</div>
                    <div style={{ fontSize: '12px', color: '#cbd5e1' }}>Direct Bank Value</div>
                  </div>
                  <div style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '900', color: '#38bdf8' }}>
                    + ₹{Number(totalSaved).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── OPTION 2: TURNKEY CASHFREE INTEGRATION FOR YOUR BUSINESS ─── */}
          <div className="ct-card" style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
            marginBottom: '56px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '999px',
                color: '#38bdf8',
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                💼 HIGH-TICKET FINTECH SERVICE BY CHITTORTECH
              </div>
              <h2 style={{
                fontSize: 'clamp(22px, 5vw, 34px)',
                fontWeight: '900',
                color: '#ffffff',
                margin: '0 0 12px 0',
                lineHeight: '1.25',
                wordBreak: 'break-word'
              }}>
                Want Cashfree Payment Gateway on Your Own Website or App?
              </h2>
              <p style={{
                color: '#cbd5e1',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                maxWidth: '780px',
                margin: '0 auto',
                lineHeight: '1.6',
                wordBreak: 'break-word'
              }}>
                Take advantage of the <strong>0% platform fee campaign</strong> for your own company. ChittorTech provides complete, turnkey API integration, WhatsApp invoice automation, and KYC setup for your business in <strong>under 24 hours</strong>.
              </p>
            </div>

            {/* Integration Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '12px',
              marginBottom: '28px'
            }}>
              {[
                { title: 'Full-Stack SDK Integration', desc: 'Next.js, React, Node.js, PHP, WordPress & Shopify' },
                { title: 'WhatsApp Meta Cloud API', desc: 'Instant automated PDF invoice & payment link dispatch' },
                { title: 'Priority KYC & Activation', desc: 'Assistance getting your business approved fast' },
                { title: '0% Platform Fee Setup', desc: 'Save up to ₹39,000+ on your first ₹20L transactions' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '14px',
                  boxSizing: 'border-box'
                }}>
                  <div style={{ fontWeight: '700', fontSize: '13px', color: '#38bdf8', marginBottom: '4px' }}>
                    ✓ {item.title}
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', lineHeight: '1.4' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Form / Direct WhatsApp Consultation */}
            <form onSubmit={handleConsultSubmit} style={{ maxWidth: '640px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                <input
                  type="text"
                  required
                  placeholder="Your Name / Business Name"
                  value={consultName}
                  onChange={(e) => setConsultName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: '14px',
                    color: '#ffffff',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Mobile Number"
                  value={consultPhone}
                  onChange={(e) => setConsultPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: '14px',
                    color: '#ffffff',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <input
                type="text"
                placeholder="Website URL or App Name (Optional)"
                value={consultWebsite}
                onChange={(e) => setConsultWebsite(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  fontSize: '14px',
                  color: '#ffffff',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  outline: 'none',
                  marginBottom: '16px',
                  boxSizing: 'border-box'
                }}
              />

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  fontWeight: '800',
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #7c3aed 100%)',
                  border: 'none',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  wordBreak: 'break-word',
                  boxSizing: 'border-box'
                }}
              >
                <span>⚡</span> Book a Free Fintech Integration Consultation ➔
              </button>

              <div style={{
                textAlign: 'center',
                marginTop: '12px',
                fontSize: '11px',
                color: '#94a3b8'
              }}>
                💬 Direct fast-track connection with ChittorTech&apos;s Fintech Lead on WhatsApp
              </div>
            </form>
          </div>

          {/* ─── FOOTER CONTACT DESK ─── */}
          <div className="ct-card" style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.02)',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>
              Direct Merchant &amp; Client Inquiries
            </h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 14px 0' }}>
              For enterprise contracts, custom software invoices, or immediate SWIFT wire instructions:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:+917597451057" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '700', fontSize: '13px' }}>
                📞 +91 75974 51057
              </a>
              <a href="mailto:business@chittortech.in" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '700', fontSize: '13px' }}>
                ✉️ business@chittortech.in
              </a>
              <span style={{ color: '#64748b', fontSize: '13px' }}>📍 Chittorgarh, Rajasthan</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
