'use client'
import { useState, useEffect } from 'react'
import { WHATSAPP_NUMBER, PACKAGES, PROMO } from '@/config/products'
import { buildWhatsAppUrl, formatPrice } from '@/lib/utils'
import OrderModal from '@/components/ui/OrderModal'
import AccessibilityWidget from '@/components/ui/AccessibilityWidget'

const REVIEWS = [
  { name: 'מיכל ר.', text: 'אני לא אשקר... בעיקר רציתי פחות נשנושים וזה בדיוק מה שקיבלתי.', stars: 5 },
  { name: 'דניאל כ.', text: 'לקחתי לפני העבודה והרגשתי יותר בשליטה. פחות נפילות אנרגיה.', stars: 5 },
  { name: 'נועה ב.', text: 'המשלוח הגיע מהר, השירות מעולה וממשיכה כבר 3 חודשים.', stars: 5 },
]

export default function ModelLanding() {
  const [selected, setSelected] = useState<any>(null)
const [showSticky, setShowSticky] = useState(true)


  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, ראיתי את המודעה ואני רוצה לקבל מחיר היכרות על טיפות גת פריים')

  const promoPackage = {
    id: PROMO.id, name: 'מחיר היכרות',
    price: PROMO.price, priceUSD: PROMO.priceUSD,
    paypalDescription: PROMO.paypalDescription,
  }

  return (
    <div className="min-h-screen bg-black" dir="rtl">

      {/* לוגו */}
      <div className="fixed top-4 right-4 z-50">
        <div className="font-black text-lg"
          style={{background:'rgba(0,0,0,0.6)',backdropFilter:'blur(10px)',borderRadius:'12px',padding:'6px 12px'}}>
          <span style={{background:'linear-gradient(135deg,#d4af37,#f5d062)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Gat</span>
          <span className="text-white"> Prime</span>
        </div>
      </div>

      {/* ===== תמונה עם טקסט מעל ===== */}
      <section className="relative" style={{height:'100vh',maxHeight:'750px'}}>
        <img
          src="/hero-image.png"
          alt="Gat Prime"
          className="w-full h-full object-cover object-top"
        />
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

        {/* טקסט */}
        <div className="absolute bottom-10 right-0 left-0 px-6 text-center">
                            </div>
      </section>

      {/* ===== trust ===== */}
      <section className="px-5 py-5 bg-black">
        <div className="flex justify-center gap-5 text-white/35 text-xs">
          {['🔒 מאובטח','🚚 משלוח חינם','💬 שירות אישי'].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* ===== ביקורות ===== */}
      <section className="px-5 py-8 bg-black">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 text-white/40 text-sm">
              <span className="flex gap-0.5">{[...Array(5)].map((_,i) => <span key={i} className="text-yellow-400">★</span>)}</span>
              מאות לקוחות מרוצים
            </div>
          </div>
          <div className="space-y-3">
            {REVIEWS.map((r, i) => (
              <div key={i} className="rounded-2xl p-4"
                style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(r.stars)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-2">"{r.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{background:'linear-gradient(135deg,#15803d,#166534)'}}>
                    {r.name[0]}
                  </div>
                  <span className="text-white/40 text-xs">{r.name}</span>
                  <span className="mr-auto text-green-600 text-xs">✓ מאומת</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== מחירים ===== */}
      <section id="pricing" className="px-5 py-10"
        style={{background:'linear-gradient(to bottom,#000,#0a1a0f,#000)'}}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-center text-white font-black text-2xl mb-2">בחרו חבילה</h2>
          <p className="text-center text-white/40 text-sm mb-6">משלוח חינם לכל הזמנה</p>

          <div className="rounded-2xl p-5 mb-4 relative overflow-hidden"
            style={{background:'linear-gradient(135deg,rgba(146,64,14,0.3),rgba(217,119,6,0.15))',border:'1.5px solid rgba(251,191,36,0.4)'}}>
            <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-black px-2 py-0.5 rounded-full">לזמן מוגבל</div>
            <div className="text-center pt-3">
              <div className="text-white/40 text-sm line-through mb-1">₪350</div>
              <div className="text-yellow-400 font-black text-4xl mb-1">₪{PROMO.price}</div>
              <div className="text-white/60 text-sm mb-4">בקבוק אחד — מחיר היכרות</div>
              <button onClick={() => setSelected(promoPackage)}
                className="w-full py-4 rounded-2xl font-black text-base text-black"
                style={{background:'linear-gradient(135deg,#d97706,#fbbf24)'}}>
                🔥 אני רוצה להתחיל
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className="rounded-2xl p-4 flex items-center justify-between"
                style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                <div>
                  <div className="text-white font-bold">{pkg.name}</div>
                  <div className="text-white/40 text-xs">{pkg.description}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-white font-black text-lg">{formatPrice(pkg.price)}</div>
                  <button onClick={() => setSelected(pkg)}
                    className="py-2 px-4 rounded-xl text-sm font-bold text-white"
                    style={{background:'rgba(22,163,74,0.2)',border:'1px solid rgba(22,163,74,0.4)'}}>
                    הזמנה
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="px-5 py-8 bg-black border-t border-white/8">
        <div className="max-w-lg mx-auto text-center space-y-3">
          <a href={waUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-green-400 text-sm">
            💬 צרו קשר בוואטסאפ
          </a>
          <p className="text-white/20 text-xs leading-relaxed">
            המוצר אינו תרופה ואינו מיועד לאבחן, לטפל, לרפא או למנוע מחלה.
            התוצאות עשויות להשתנות מאדם לאדם.
          </p>
          <p className="text-white/15 text-xs">© 2025 Gat Prime</p>
        </div>
      </footer>

      {/* ===== Sticky bar ===== */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500
                      translate-y-0 opacity-100`}>
        <div className="px-4 py-3 flex items-center gap-3"
          style={{background:'rgba(0,0,0,0.92)',backdropFilter:'blur(16px)',borderTop:'1px solid rgba(255,255,255,0.1)'}}>
          <div>
            <div className="text-white/40 text-xs">מחיר היכרות</div>
            <div className="text-yellow-400 font-black text-xl">₪{PROMO.price}</div>
          </div>
          <button onClick={() => setSelected(promoPackage)}
            className="flex-1 py-3 rounded-2xl font-black text-black text-base"
            style={{background:'linear-gradient(135deg,#d97706,#fbbf24)'}}>
            🔥 להזמנה עכשיו
          </button>
        </div>
      </div>

      {selected && <OrderModal package={selected} onClose={() => setSelected(null)} />}
<AccessibilityWidget />

    </div>
  )
}
