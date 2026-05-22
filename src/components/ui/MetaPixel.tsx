'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// ====================================================
// Meta Pixel — הכניסו את ה-Pixel ID שלכם ב-.env.local
// NEXT_PUBLIC_META_PIXEL_ID=your-pixel-id-here
// ====================================================

declare global {
  interface Window {
    fbq: (...args: any[]) => void
    _fbq: any
  }
}

export function initPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
  if (!pixelId || typeof window === 'undefined') return
  if (window.fbq) return

  const n: any = window.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  }
  if (!window._fbq) window._fbq = n
  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  window.fbq('init', pixelId)
}

// Events — קראו לפונקציות האלה מהקומפוננטים
export const pixel = {
  pageView: () => window.fbq?.('track', 'PageView'),
  viewContent: (name: string, value: number) =>
    window.fbq?.('track', 'ViewContent', { content_name: name, value, currency: 'ILS' }),
  addToCart: (name: string, value: number) =>
    window.fbq?.('track', 'AddToCart', { content_name: name, value, currency: 'ILS' }),
  initiateCheckout: (value: number) =>
    window.fbq?.('track', 'InitiateCheckout', { value, currency: 'ILS' }),
  purchase: (value: number, orderId: string) =>
    window.fbq?.('track', 'Purchase', { value, currency: 'ILS', order_id: orderId }),
}

export default function MetaPixel() {
  const pathname = usePathname()
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  useEffect(() => {
    if (!pixelId) return
    initPixel()
    pixel.pageView()
  }, [pathname, pixelId])

  if (!pixelId) return null

  return (
    <noscript>
      <img height="1" width="1" style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt="" />
    </noscript>
  )
}
