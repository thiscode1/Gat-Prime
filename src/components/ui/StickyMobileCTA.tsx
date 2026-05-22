'use client'
import { useState, useEffect } from 'react'
import { WHATSAPP_NUMBER, PROMO } from '@/config/products'
import { buildWhatsAppUrl, formatPrice } from '@/lib/utils'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleClick = () => {
    const pricingEl = document.getElementById('pricing')
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, אני רוצה לקבל מחיר היכרות על טיפות גת פריים'), '_blank')
    }
  }

  return (
    <div className={`fixed bottom-0 right-0 left-0 z-40 md:hidden transition-all duration-500
                    ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      {/* Blur bg */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md border-t border-white/10" />

      <div className="relative px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/50 text-xs">מחיר היכרות מוגבל</span>
          </div>
          <div className="text-yellow-400 font-black text-xl leading-tight">
            {formatPrice(PROMO.price)}
          </div>
        </div>

        <button onClick={handleClick}
          className="btn-gold py-3 px-6 text-sm rounded-xl flex-1 max-w-[200px]">
          🔥 להזמנה עכשיו
        </button>
      </div>
    </div>
  )
}
