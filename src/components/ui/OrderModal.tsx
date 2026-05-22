'use client'
import { useState } from 'react'
import { WHATSAPP_NUMBER } from '@/config/products'
import { formatPrice, buildWhatsAppUrl } from '@/lib/utils'

interface Pkg {
  id: string; name: string; price: number; paypalDescription: string
}

interface Props { package: Pkg; onClose: () => void }

interface FormData {
  name: string; phone: string; city: string; address: string; notes: string
}

export default function OrderModal({ package: pkg, onClose }: Props) {
  const [form, setForm] = useState<FormData>({ name:'', phone:'', city:'', address:'', notes:'' })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'שם חובה'
    if (!/^0\d{8,9}$/.test(form.phone)) e.phone = 'טלפון לא תקין'
    if (!form.city.trim()) e.city = 'עיר חובה'
    if (!form.address.trim()) e.address = 'כתובת חובה'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleOrder = () => {
    if (!validate()) return

    const message = `היי! אני רוצה להזמין מ-Gat Prime 🌿

📦 חבילה: ${pkg.name}
💰 מחיר: ${formatPrice(pkg.price)}

👤 שם: ${form.name}
📞 טלפון: ${form.phone}
🏙️ עיר: ${form.city}
🏠 כתובת: ${form.address}
${form.notes ? `📝 הערות: ${form.notes}` : ''}

אשמח להמשך טיפול, תודה!`

    const url = buildWhatsAppUrl(WHATSAPP_NUMBER, message)
    window.open(url, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-lg glass rounded-3xl p-6 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white font-bold text-xl">הזמנת {pkg.name}</h2>
            <p className="text-forest-400 font-bold text-lg">{formatPrice(pkg.price)}</p>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white text-2xl leading-none">✕</button>
        </div>

        {/* Info box */}
        <div className="glass-green rounded-xl p-4 mb-5 flex gap-3 items-start">
          <span className="text-2xl flex-shrink-0">💬</span>
          <div>
            <p className="text-white font-semibold text-sm mb-1">איך זה עובד?</p>
            <p className="text-white/55 text-sm leading-relaxed">
              מלאו את הפרטים — נפתח לכם וואטסאפ עם ההזמנה מוכנה.
              נחזור אליכם תוך שעות ספורות עם פרטי תשלום ומשלוח.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {[
            { key: 'name', label: 'שם מלא *', placeholder: 'ישראל ישראלי', type: 'text' },
            { key: 'phone', label: 'טלפון *', placeholder: '0501234567', type: 'tel' },
            { key: 'city', label: 'עיר *', placeholder: 'תל אביב', type: 'text' },
            { key: 'address', label: 'כתובת למשלוח *', placeholder: 'רחוב, מספר, דירה', type: 'text' },
          ].map(f => (
            <div key={f.key}>
              <label className="block text-white/60 text-sm mb-1.5">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder}
                value={form[f.key as keyof FormData]}
                onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                className="form-input" />
              {errors[f.key as keyof FormData] && (
                <p className="text-red-400 text-xs mt-1">{errors[f.key as keyof FormData]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-white/60 text-sm mb-1.5">הערות (אופציונלי)</label>
            <textarea rows={2} placeholder="כל הערה או בקשה מיוחדת..."
              value={form.notes}
              onChange={e => setForm(prev => ({ ...prev, notes: e.target.value }))}
              className="form-input resize-none" />
          </div>

          <button onClick={handleOrder} className="btn-primary w-full justify-center mt-2 text-base">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9 9 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            שלחו הזמנה בוואטסאפ
          </button>

          <p className="text-white/25 text-xs text-center">
            לאחר השליחה נחזור אליכם עם פרטי תשלום ואישור הזמנה
          </p>
        </div>
      </div>
    </div>
  )
}
