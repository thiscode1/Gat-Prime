'use client'
import { useState, useEffect } from 'react'
import { WHATSAPP_NUMBER, PROMO } from '@/config/products'
import { buildWhatsAppUrl, formatPrice } from '@/lib/utils'

export default function ExitIntent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Show only once per session
    const seen = sessionStorage.getItem('exit-popup-seen')
    if (seen) return

    let timer: NodeJS.Timeout

    // Desktop: mouse leave at top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        timer = setTimeout(() => {
          setShow(true)
          sessionStorage.setItem('exit-popup-seen', '1')
        }, 200)
      }
    }

    // Mobile: scroll up fast
    let lastScrollY = window.scrollY
    let lastScrollTime = Date.now()
    const handleScroll = () => {
      const now = Date.now()
      const delta = lastScrollY - window.scrollY
      const timeDelta = now - lastScrollTime
      if (delta > 80 && timeDelta < 300 && window.scrollY < 200) {
        setShow(true)
        sessionStorage.setItem('exit-popup-seen', '1')
      }
      lastScrollY = window.scrollY
      lastScrollTime = now
    }

    // Show after 40 seconds if still on page
    const autoTimer = setTimeout(() => {
      if (!sessionStorage.getItem('exit-popup-seen')) {
        setShow(true)
        sessionStorage.setItem('exit-popup-seen', '1')
      }
    }, 40000)

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
      clearTimeout(autoTimer)
    }
  }, [])

  if (!show) return null

  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, ראיתי את מחיר ההיכרות ואני רוצה להזמין')

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={() => setShow(false)}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Popup */}
      <div className="relative z-10 w-full max-w-sm animate-pop-in"
        onClick={e => e.stopPropagation()}>
        <div className="relative rounded-3xl overflow-hidden"
          style={{background:'linear-gradient(135deg,#0a1a0f,#0f2d1a,#111)',border:'1px solid rgba(34,197,94,0.3)',boxShadow:'0 0 60px rgba(34,197,94,0.15)'}}>

          {/* Top gradient line */}
          <div className="h-1 bg-gradient-to-r from-forest-600 via-yellow-400 to-forest-600" />

          {/* Close button */}
          <button onClick={() => setShow(false)}
            className="absolute top-4 left-4 text-white/30 hover:text-white text-xl leading-none transition-colors"
            aria-label="סגור">✕</button>

          <div className="p-7 text-center">
            <div className="text-4xl mb-4">👀</div>
            <h2 className="text-white font-black text-xl mb-2">
              רגע לפני שאתם יוצאים
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              מחיר ההיכרות עדיין זמין היום.
              <br />
              <span className="text-yellow-400 font-semibold">רק {formatPrice(PROMO.price)} לבקבוק הראשון.</span>
            </p>

            {/* Price display */}
            <div className="glass-green rounded-2xl p-4 mb-5">
              <div className="text-white/40 text-xs mb-1">מחיר היכרות מיוחד</div>
              <div className="text-4xl font-black text-yellow-400">{formatPrice(PROMO.price)}</div>
              <div className="text-white/30 text-xs mt-1 line-through">במקום ₪350</div>
            </div>

            <a href={waUrl} target="_blank" rel="noreferrer"
              onClick={() => setShow(false)}
              className="btn-gold w-full justify-center text-base mb-3">
              לקבלת ההטבה עכשיו
            </a>

            <button onClick={() => setShow(false)}
              className="text-white/25 hover:text-white/50 text-xs transition-colors">
              לא תודה, אמשיך בלי ההטבה
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
