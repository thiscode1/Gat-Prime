'use client'
import { WHATSAPP_NUMBER } from '@/config/products'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Hero() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, אשמח לשמוע יותר על טיפות גת פריים')

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* BG layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-black to-black" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest-900/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

      {/* Noise grain */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-2 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
          <span className="text-forest-300 text-sm font-semibold">100% רכיבים טבעיים</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="text-white">Gat Prime —</span>
          <br />
          <span className="gold-text">אנרגיה, ריכוז</span>
          <br />
          <span className="text-white">ושליטה בתיאבון</span>
          <br />
          <span className="text-forest-400 text-3xl sm:text-4xl md:text-5xl font-bold">בטיפה אחת</span>
        </h1>

        <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}>
          טיפות גת טבעיות לחוויית יום ממוקדת יותר, קלילה יותר ומלאת אנרגיה.
          <br />
          שימוש פשוט ונוח שמתאים לכל שגרה.
        </p>

        {/* Bottle visual */}
        <div className="my-10 flex justify-center animate-float">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-forest-500/20 rounded-full blur-[60px] scale-150" />
            {/* Bottle SVG */}
            <svg width="120" height="220" viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative drop-shadow-2xl">
              {/* Cap */}
              <rect x="42" y="0" width="36" height="28" rx="6" fill="url(#capGrad)"/>
              {/* Neck */}
              <rect x="46" y="24" width="28" height="20" rx="3" fill="url(#neckGrad)"/>
              {/* Body */}
              <rect x="18" y="40" width="84" height="162" rx="20" fill="url(#bodyGrad)"/>
              {/* Label bg */}
              <rect x="24" y="70" width="72" height="100" rx="12" fill="rgba(0,0,0,0.25)"/>
              {/* Label text lines */}
              <rect x="34" y="86" width="52" height="6" rx="3" fill="rgba(212,175,55,0.9)"/>
              <rect x="38" y="100" width="44" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
              <rect x="34" y="114" width="52" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
              <rect x="38" y="128" width="44" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
              <rect x="38" y="142" width="44" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
              {/* Shine */}
              <rect x="24" y="44" width="12" height="140" rx="6" fill="rgba(255,255,255,0.07)"/>
              <defs>
                <linearGradient id="capGrad" x1="42" y1="0" x2="78" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#d4af37"/><stop offset="1" stopColor="#8B6914"/>
                </linearGradient>
                <linearGradient id="neckGrad" x1="46" y1="24" x2="74" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1a3a2a"/><stop offset="1" stopColor="#0d1f15"/>
                </linearGradient>
                <linearGradient id="bodyGrad" x1="18" y1="40" x2="102" y2="202" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1e4d35"/><stop offset="0.5" stopColor="#133526"/><stop offset="1" stopColor="#0a1f15"/>
                </linearGradient>
              </defs>
            </svg>
            {/* Stars */}
            {[[-40,-20],[50,-10],[-50,60],[55,80]].map(([x,y],i) => (
              <div key={i} className="absolute text-yellow-400 text-lg animate-pulse"
                style={{left:`calc(50% + ${x}px)`,top:`calc(50% + ${y}px)`,animationDelay:`${i*0.4}s`}}>✦</div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}>
          <a href="#pricing" className="btn-gold w-full sm:w-auto">
            💬 להזמנה דרך וואטסאפ
          </a>
          <a href={waUrl} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9 9 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            התייעצות בוואטסאפ
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-14 text-white/35 text-sm">
          {[['🔒','תשלום מאובטח'],['🚚','משלוח מהיר'],['🌿','100% טבעי'],['💬','שירות אישי']].map(([icon, label]) => (
            <div key={label} className="flex items-center gap-1.5">
              <span>{icon}</span><span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
