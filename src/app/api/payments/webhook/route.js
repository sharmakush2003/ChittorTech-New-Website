import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Acknowledge Cashfree webhook notification
    const body = await req.json().catch(() => ({}));
    console.log('Cashfree Webhook event received:', body?.type || 'UNKNOWN');
    return NextResponse.json({ success: true, message: 'Webhook received' }, { status: 200 });
  } catch (error) {
    console.error('Cashfree Webhook error:', error);
    return NextResponse.json({ success: true }, { status: 200 });
  }
}
