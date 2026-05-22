'use client'
import { WHATSAPP_NUMBER } from '@/config/products'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Hero() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, אני רוצה לקבל מחיר היכרות על טיפות גת פריים')

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-black to-black" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-forest-900/25 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div className="text-center lg:text-right order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
            <span className="text-forest-300 text-sm font-semibold">מחיר היכרות לזמן מוגבל</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-5">
            <span className="text-white">Gat Prime</span>
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

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 text-sm">
            <span className="flex items-center gap-1.5 text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              משלוחים יוצאים היום
            </span>
            <span className="text-white/20">|</span>
            <span className="text-yellow-400">מלאי מוגבל</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#pricing" className="btn-gold text-base">
              להזמנה עכשיו
            </a>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-outline text-base">
              לקבלת מחיר היכרות
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8 text-white/35 text-xs">
            {[['🔒','תשלום מאובטח'],['🚚','משלוח חינם'],['🌿','100% טבעי'],['💬','שירות אישי']].map(([icon, label]) => (
              <span key={label} className="flex items-center gap-1">{icon} {label}</span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-forest-500/15 rounded-3xl blur-[60px] scale-110" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-float">
              <img
                src="/hero-image.jpg"
                alt="אישה משתמשת בטיפות גת פריים"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <div className="glass-green rounded-2xl px-4 py-3 flex items-center gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <div className="text-white font-bold text-sm">Gat Prime</div>
                    <div className="text-forest-300 text-xs">טיפות גת טבעיות</div>
                  </div>
                  <div className="mr-auto text-yellow-400 font-black text-lg">300 ₪</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
