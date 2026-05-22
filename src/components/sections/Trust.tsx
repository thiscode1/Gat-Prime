const TRUST = [
  { icon: '🔒', title: 'תשלום מאובטח', desc: 'כל ההזמנות מטופלות בצורה מאובטחת ופרטית' },
  { icon: '🚚', title: 'משלוח מהיר', desc: 'משלוחים יוצאים תוך יום עסקים אחד' },
  { icon: '💬', title: 'שירות אישי', desc: 'מענה אישי בוואטסאפ — בני אדם אמיתיים' },
  { icon: '🌿', title: 'מוצר טבעי', desc: 'רכיבים טבעיים בלבד, ללא תוספים מלאכותיים' },
  { icon: '↩️', title: 'מדיניות החזרה', desc: 'לא מרוצים? נטפל בזה אישית' },
]

export default function Trust() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-8 border border-white/8">
          <h2 className="text-center text-white font-bold text-xl mb-8">למה לקוחות בוחרים ב-Gat Prime</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {TRUST.map((t, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{t.icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{t.title}</div>
                <div className="text-white/40 text-xs leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
