'use client'
import { useState, useEffect } from 'react'
import { WHATSAPP_NUMBER, PACKAGES, PROMO } from '@/config/products'
import { buildWhatsAppUrl, formatPrice } from '@/lib/utils'
import OrderModal from '@/components/ui/OrderModal'

const BENEFITS = [
  { icon: '🍬', label: 'פחות חשק\nלמתוקים' },
  { icon: '🫃', label: 'תחושת\nשובע' },
  { icon: '⚡', label: 'יותר\nאנרגיה' },
  { icon: '🎯', label: 'יותר\nריכוז' },
]

const REVIEWS = [
  { name: 'מיכל ר.', text: 'אני לא אשקר... בעיקר רציתי פחות נשנושים וזה בדיוק מה שקיבלתי.', stars: 5 },
  { name: 'דניאל כ.', text: 'לקחתי לפני העבודה והרגשתי יותר בשליטה. פחות נפילות אנרגיה.', stars: 5 },
  { name: 'נועה ב.', text: 'המשלוח הגיע מהר, השירות מעולה וממשיכה כבר 3 חודשים.', stars: 5 },
]

export default function ModelLanding() {
  const [selected, setSelected] = useState<any>(null)
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const fn = () => setShowSticky(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, ראיתי את המודעה ואני רוצה לקבל מחיר היכרות על טיפות גת פריים')

  const promoPackage = {
    id: PROMO.id, name: 'מחיר היכרות',
    price: PROMO.price, priceUSD: PROMO.priceUSD,
    paypalDescription: PROMO.paypalDescription,
  }

  return (
    <div className="min-h-screen bg-black" dir="rtl">

      {/* ===== HERO — תמונה מלאה ===== */}
      <section className="relative min-h-screen">
        {/* תמונת הדוגמנית — מלאה */}
        <div className="absolute inset-0">
          <img
            src="/hero-image.png"
            alt="Gat Prime"
            className="w-full h-auto object-contain"
          />
          {/* Gradient מלמטה */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          {/* Gradient קל מלמעלה */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
        </div>

        {/* לוגו למעלה */}
        <div className="absolute top-6 right-6 z-10">
          <div className="font-black text-xl">
            <span style={{background:'linear-gradient(135deg,#d4af37,#f5d062)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Gat</span>
            <span className="text-white"> Prime</span>
          </div>
          <div className="text-green-400 text-xs tracking-widest">טיפות גת</div>
        </div>

        {/* תוכן תחתון */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-10">
          {/* ציטוט */}
          <div className="mb-5">
            <p className="text-white font-black text-3xl leading-tight mb-1">
              "אני לא אשקר...
            </p>
            <p className="text-white font-black text-3xl leading-tight mb-1">
              בעיקר רציתי
            </p>
            <p className="font-black text-3xl leading-tight"
              style={{background:'linear-gradient(135deg,#f472b6,#ec4899)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
              פחות נשנושים"
            </p>
          </div>

          {/* Benefits row */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="text-center"
                style={{background:'rgba(0,0,0,0.6)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'12px',padding:'10px 6px'}}>
                <div className="text-xl mb-1">{b.icon}</div>
                <div className="text-white/80 text-xs leading-tight font-medium whitespace-pre-line">{b.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button onClick={() => setSelected(promoPackage)}
            className="w-full py-4 rounded-2xl font-black text-lg text-black mb-3"
            style={{background:'linear-gradient(135deg,#92400e,#d97706,#fbbf24)',boxShadow:'0 4px 24px rgba(251,191,36,0.4)'}}>
            🔥 לקבלת מחיר היכרות — ₪{PROMO.price}
          </button>

          <div className="flex justify-center gap-6 text-white/40 text-xs">
            {['🔒 תשלום מאובטח','🚚 משלוח חינם','💬 שירות אישי'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="px-5 py-12 bg-black">
        <div className="max-w-lg mx-auto">
          <p className="text-center text-white/40 text-sm mb-2">מה אומרים</p>
          <h2 className="text-center text-white font-black text-2xl mb-8">
            מאות אנשים כבר השתמשו
          </h2>

          <div className="space-y-4">
            {REVIEWS.map((r, i) => (
              <div key={i} className="rounded-2xl p-4"
                style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(r.stars)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-3">"{r.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{background:'linear-gradient(135deg,#15803d,#166534)'}}>
                    {r.name[0]}
                  </div>
                  <span className="text-white/50 text-xs">{r.name}</span>
                  <span className="mr-auto text-green-600 text-xs">✓ מאומת</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="px-5 py-12"
        style={{background:'linear-gradient(to bottom,#000,#0a1a0f,#000)'}}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-center text-white font-black text-2xl mb-2">בחרו חבילה</h2>
          <p className="text-center text-white/40 text-sm mb-8">משלוח חינם לכל הזמנה</p>

          {/* Promo */}
          <div className="rounded-2xl p-5 mb-4 relative overflow-hidden"
            style={{background:'linear-gradient(135deg,rgba(146,64,14,0.3),rgba(217,119,6,0.15))',border:'1.5px solid rgba(251,191,36,0.4)'}}>
            <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-black px-2 py-0.5 rounded-full">
              לזמן מוגבל
            </div>
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

          {/* שאר החבילות */}
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

      {/* ===== FAQ קצר ===== */}
      <section className="px-5 py-10 bg-black">
        <div className="max-w-lg mx-auto space-y-4">
          {[
            ['מה זה בדיוק?', 'טיפות גת טבעיות לתמיכה בשגרה מאוזנת — פחות חשק למתוקים, תחושת שובע וריכוז לאורך היום.'],
            ['תוך כמה זמן מגיע?', 'משלוחים יוצאים תוך יום עסקים. בדרך כלל מגיע תוך 2-3 ימים.'],
            ['איך יוצרים קשר?', 'בוואטסאפ — מענה אישי תוך שעות ספורות.'],
          ].map(([q, a], i) => (
            <div key={i} className="rounded-2xl p-4"
              style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div className="text-white font-bold text-sm mb-2">{q}</div>
              <div className="text-white/50 text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-5 py-8 bg-black border-t border-white/8">
        <div className="max-w-lg mx-auto text-center space-y-3">
          <a href={waUrl} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-green-400 text-sm">
            💬 צרו קשר בוואטסאפ
          </a>
          <p className="text-white/20 text-xs leading-relaxed">
            המוצר אינו תרופה ואינו מיועד לאבחן, לטפל, לרפא או למנוע מחלה.
            התוצאות עשויות להשתנות מאדם לאדם.
          </p>
          <p className="text-white/15 text-xs">© 2025 Gat Prime</p>
        </div>
      </footer>

      {/* ===== STICKY BAR ===== */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500
                      ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
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

      {/* Modal */}
      {selected && <OrderModal package={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
