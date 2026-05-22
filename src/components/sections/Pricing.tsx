'use client'
import { useState } from 'react'
import { PACKAGES, PROMO } from '@/config/products'
import { formatPrice } from '@/lib/utils'
import OrderModal from '@/components/ui/OrderModal'

export default function Pricing() {
  const [selected, setSelected] = useState<any>(null)

  const promoPackage = PROMO.active ? {
    id: PROMO.id,
    name: 'מחיר היכרות',
    bottles: 1,
    price: PROMO.price,
    priceUSD: PROMO.priceUSD,
    badge: PROMO.label,
    description: PROMO.description,
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
          <div className="glass rounded-2xl p-5 border border-yellow-500/30 bg-yellow-500/5 mb-8 
                          flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-yellow-400 font-bold text-lg">🔥 {PROMO.label}</span>
              <p className="text-white/60 text-sm mt-1">{PROMO.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-black text-yellow-400">{formatPrice(PROMO.price)}</span>
              <button onClick={() => setSelected(promoPackage)} className="btn-gold text-sm py-2.5 px-5 rounded-xl whitespace-nowrap">
                הזמינו עכשיו
              </button>
            </div>
          </div>
        )}

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, i) => (
            <div key={pkg.id}
              className={`relative card flex flex-col hover:-translate-y-1 transition-all duration-300
                         ${pkg.badge ? 'border-forest-500/40 bg-forest-950/20' : ''}`}>
              {pkg.badge && (
                <div className="absolute -top-3 right-1/2 translate-x-1/2 
                                bg-gradient-to-l from-forest-700 to-forest-500 
                                text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  ⭐ {pkg.badge}
                </div>
              )}

              <div className="mb-5">
                <div className="text-white/40 text-sm mb-1">{pkg.bottles} {pkg.bottles === 1 ? 'בקבוק' : 'בקבוקים'}</div>
                <h3 className="text-white font-bold text-xl mb-2">{pkg.name}</h3>
                <p className="text-white/50 text-sm">{pkg.description}</p>
              </div>

              <div className="mt-auto">
                <div className="mb-5">
                  <span className="text-3xl font-black text-white">{formatPrice(pkg.price)}</span>
                  {pkg.bottles > 1 && (
                    <span className="text-white/35 text-sm mr-2">
                      ({formatPrice(Math.round(pkg.price / pkg.bottles))}/בקבוק)
                    </span>
                  )}
                </div>
                <button onClick={() => setSelected(pkg)}
                  className={`w-full ${pkg.badge ? 'btn-primary' : 'btn-outline'} justify-center`}>
                  🛒 להזמנה עכשיו
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/30 text-sm">
          {[['🔒','תשלום מאובטח ב-PayPal'],['🚚','משלוח לכל הארץ'],['💬','שירות אישי בוואטסאפ']].map(([icon, label]) => (
            <span key={label} className="flex items-center gap-1.5">{icon} {label}</span>
          ))}
        </div>
      </div>

      {selected && (
        <OrderModal
          package={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
