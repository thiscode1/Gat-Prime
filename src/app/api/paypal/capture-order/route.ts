import { NextRequest, NextResponse } from 'next/server'

const BASE = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com'

async function getToken() {
  const creds = Buffer.from(
    `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString('base64')
  const r = await fetch(`${BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: `Basic ${creds}` },
    body: 'grant_type=client_credentials',
  })
  const d = await r.json()
  return d.access_token
}

export async function POST(req: NextRequest) {
  try {
    const { orderID, orderDetails } = await req.json()
    const token = await getToken()

    const r = await fetch(`${BASE}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    })
    const d = await r.json()
    if (!r.ok || d.status !== 'COMPLETED') {
      return NextResponse.json({ error: 'התשלום לא הושלם' }, { status: 400 })
    }

    // Log order (in production: save to DB here)
    console.log('✅ NEW ORDER:', {
      paypalOrderId: orderID,
      ...orderDetails,
      paidAt: new Date().toISOString(),
    })

    // Optional: send WhatsApp / email notification here

    return NextResponse.json({ success: true, orderId: orderID })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
