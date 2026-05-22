'use client'
import { useState, useEffect } from 'react'
import { WHATSAPP_NUMBER, PROMO } from '@/config/products'
import { buildWhatsAppUrl, formatPrice } from '@/lib/utils'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, אני רוצה לקבל מחיר היכרות על טיפות גת פריים')

  return (
    <div className={`fixed bottom-0 right-0 left-0 z-40 md:hidden transition-all duration-300
                    ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-3 
                      flex items-center justify-between gap-3">
        <div>
          <div className="text-white/50 text-xs">מחיר היכרות מוגבל</div>
          <div className="text-yellow-400 font-black text-lg">{formatPrice(PROMO.price)}</div>
        </div>
        <a href={waUrl} target="_blank" rel="noreferrer"
          className="btn-gold py-3 px-6 text-sm rounded-xl flex-1 text-center">
          להזמנה עכשיו →
        </a>
      </div>
    </div>
  )
}
