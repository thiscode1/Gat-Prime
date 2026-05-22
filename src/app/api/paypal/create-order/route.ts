import { NextRequest, NextResponse } from 'next/server'

const BASE = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com'

async function getToken() {
  // ← PAYPAL_CLIENT_SECRET goes in .env.local (never in client code!)
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
    const { amount, description } = await req.json()
    const token = await getToken()
    const r = await fetch(`${BASE}/v2/checkout/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{ amount: { currency_code: 'USD', value: String(amount) }, description }],
        application_context: { brand_name: 'Gat Prime', user_action: 'PAY_NOW' },
      }),
    })
    const d = await r.json()
    if (!r.ok) return NextResponse.json({ error: 'PayPal error' }, { status: 500 })
    return NextResponse.json({ id: d.id })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
