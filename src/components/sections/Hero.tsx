'use client'
import { WHATSAPP_NUMBER } from '@/config/products'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Hero() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, אני רוצה לקבל מחיר היכרות על טיפות גת פריים')

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-black to-black" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-forest-900/25 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text side */}
        <div className="text-center lg:text-right order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
            <span className="text-forest-300 text-sm font-semibold">מחיר היכרות לזמן מוגבל</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-5">
            <span className="text-white">Gat Prime —</span>
            <br />
            <span className="gold-text">אנרגיה, ריכוז</span>
            <br />
            <span className="text-white">ושליטה בתיאבון</span>
            <br />
            <span className="text-forest-400 text-2xl sm:text-3xl font-bold">בשגרה היומיומית</span>
          </h1>

          <p className="text-white/55 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            טיפות גת טבעיות לחוויית יום ממוקדת יותר, קלילה יותר ומלאת אנרגיה.
            שימוש פשוט שמתאים לכל שגרה.
          </p>

          {/* Urgency */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 text-sm">
            <span className="flex items-center gap-1.5 text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              משלוחים יוצאים היום
            </span>
            <span className="text-white/20">|</span>
            <span className="text-yellow-400">מלאי מוגבל</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#pricing" className="btn-gold text-base">
              🛒 להזמנה עכשיו
            </a>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-outline text-base">
              💬 לקבלת מחיר היכרות
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8 text-white/35 text-xs">
            {[['🔒','תשלום מאובטח'],['🚚','משלוח מהיר'],['🌿','100% טבעי'],['💬','שירות אישי']].map(([icon, label]) => (
              <span key={label} className="flex items-center gap-1">{icon} {label}</span>
            ))}
          </div>
        </div>

        {/* Bottle side */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative animate-float">
            {/* Glow layers */}
            <div className="absolute inset-0 bg-forest-500/20 rounded-full blur-[80px] scale-150" />
            <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-[60px] scale-125" />

            {/* Bottle SVG — bigger */}
            <svg width="180" height="320" viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="relative drop-shadow-2xl" style={{filter:'drop-shadow(0 0 40px rgba(34,197,94,0.2))'}}>
              <rect x="42" y="0" width="36" height="28" rx="6" fill="url(#capG)"/>
              <rect x="46" y="24" width="28" height="20" rx="3" fill="url(#neckG)"/>
              <rect x="18" y="40" width="84" height="162" rx="20" fill="url(#bodyG)"/>
              <rect x="24" y="70" width="72" height="100" rx="12" fill="rgba(0,0,0,0.25)"/>
              <rect x="34" y="82" width="52" height="7" rx="3.5" fill="rgba(212,175,55,0.95)"/>
              <text x="60" y="104" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="8" fontWeight="bold" fontFamily="Arial">Gat Prime</text>
              <text x="60" y="116" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="Arial">טיפות גת</text>
              <rect x="34" y="124" width="52" height="3" rx="1.5" fill="rgba(255,255,255,0.2)"/>
              <rect x="38" y="132" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
              <rect x="38" y="140" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
              <rect x="24" y="44" width="10" height="140" rx="5" fill="rgba(255,255,255,0.08)"/>
              <defs>
                <linearGradient id="capG" x1="42" y1="0" x2="78" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#d4af37"/><stop offset="1" stopColor="#8B6914"/>
                </linearGradient>
                <linearGradient id="neckG" x1="46" y1="24" x2="74" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1a3a2a"/><stop offset="1" stopColor="#0d1f15"/>
                </linearGradient>
                <linearGradient id="bodyG" x1="18" y1="40" x2="102" y2="202" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1e5c3a"/><stop offset="0.5" stopColor="#133526"/><stop offset="1" stopColor="#0a1f15"/>
                </linearGradient>
              </defs>
            </svg>

            {/* Stars */}
            {[[-55,-30],[65,-15],[-60,70],[70,90],[-40,130]].map(([x,y],i) => (
              <div key={i} className="absolute text-yellow-400 animate-pulse"
                style={{left:`calc(50% + ${x}px)`,top:`calc(50% + ${y}px)`,
                  fontSize:`${14+i*2}px`,animationDelay:`${i*0.3}s`}}>✦</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
