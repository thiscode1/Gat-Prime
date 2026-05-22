'use client'
import { useState } from 'react'
import { PACKAGES, PROMO } from '@/config/products'
import { formatPrice } from '@/lib/utils'
import OrderModal from '@/components/ui/OrderModal'

export default function Pricing() {
  const [selected, setSelected] = useState<any>(null)

  const promoPackage = PROMO.active ? {
    id: PROMO.id, name: 'מחיר היכרות', bottles: 1,
    price: PROMO.price, priceUSD: PROMO.priceUSD,
    badge: PROMO.label, description: PROMO.description,
    paypalDescription: PROMO.paypalDescription,
  } : null

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-forest-400 text-sm font-semibold tracking-widest text-center uppercase mb-3">
          בחרו את החבילה שלכם
        </p>
        <h2 className="section-title">מחיר וחבילות</h2>
        <div className="divider" />

        {/* Promo banner */}
        {promoPackage && (
          <div className="relative rounded-2xl p-6 mb-8 overflow-hidden"
            style={{background:'linear-gradient(135deg,rgba(146,64,14,0.3),rgba(217,119,6,0.2),rgba(251,191,36,0.1))',border:'1px solid rgba(251,191,36,0.3)'}}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-yellow-400 text-black text-xs font-black px-2 py-0.5 rounded-full">לזמן מוגבל</span>
                  <span className="text-yellow-400 font-bold text-lg">🔥 {PROMO.label}</span>
                </div>
                <p className="text-white/60 text-sm">{PROMO.description}</p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-center">
                  <div className="text-white/30 text-sm line-through">₪350</div>
                  <div className="text-3xl font-black text-yellow-400">{formatPrice(PROMO.price)}</div>
                </div>
                <button onClick={() => setSelected(promoPackage)} className="btn-gold text-sm py-3 px-6 rounded-xl whitespace-nowrap">
                  אני רוצה להתחיל
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, i) => {
            const isPopular = pkg.badge !== null
            return (
              <div key={pkg.id}
                className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300
                           hover:-translate-y-2 hover:shadow-2xl
                           ${isPopular
                             ? 'border-2 border-forest-500/60 bg-gradient-to-b from-forest-950/40 to-black/60'
                             : 'glass hover:border-forest-500/20'}`}
                style={isPopular ? {boxShadow:'0 0 40px rgba(34,197,94,0.15)'} : {}}>

                {/* Popular badge */}
                {isPopular && (
                  <>
                    <div className="absolute -top-4 right-1/2 translate-x-1/2 z-10">
                      <div className="flex gap-2">
                        <span className="bg-forest-500 text-white text-xs font-black px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                          ⭐ {pkg.badge}
                        </span>
                        <span className="bg-yellow-400 text-black text-xs font-black px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                          הכי נמכר
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-400/60 to-transparent" />
                  </>
                )}

                <div className="mb-5 mt-2">
                  <div className="text-white/40 text-sm mb-1">{pkg.bottles} {pkg.bottles === 1 ? 'בקבוק' : 'בקבוקים'}</div>
                  <h3 className={`font-bold text-xl mb-2 ${isPopular ? 'text-forest-300' : 'text-white'}`}>{pkg.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{pkg.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="mb-5">
                    <span className={`text-3xl font-black ${isPopular ? 'text-forest-300' : 'text-white'}`}>
                      {formatPrice(pkg.price)}
                    </span>
                    {pkg.bottles > 1 && (
                      <span className="text-white/35 text-xs mr-2">
                        ({formatPrice(Math.round(pkg.price / pkg.bottles))}/בקבוק)
                      </span>
                    )}
                  </div>
                  <button onClick={() => setSelected(pkg)}
                    className={`w-full justify-center text-base ${isPopular ? 'btn-primary' : 'btn-outline'}`}>
                    {isPopular ? 'להזמנה עכשיו' : 'לקבלת מחיר היכרות'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/30 text-sm">
          {[['🔒','תשלום מאובטח'],['🚚','משלוח חינם'],['💬','שירות אישי בוואטסאפ']].map(([icon, label]) => (
            <span key={label} className="flex items-center gap-1.5">{icon} {label}</span>
          ))}
        </div>
      </div>

      {selected && <OrderModal package={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
