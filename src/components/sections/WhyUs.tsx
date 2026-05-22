const REASONS = [
  { icon: '🧪', title: 'פורמולה איכותית', desc: 'רכיבים טבעיים נבחרים בקפידה, ללא תוספים מלאכותיים.' },
  { icon: '💧', title: 'שימוש פשוט', desc: 'כמה טיפות ביום — נוח, מהיר, ומתאים לכל שגרה.' },
  { icon: '💬', title: 'שירות אישי', desc: 'מענה אנושי בוואטסאפ — לא בוטים, לא תורים.' },
  { icon: '🔒', title: 'תשלום מאובטח', desc: 'הזמנה בטוחה ומאובטחת, ללא חשיפת פרטים.' },
  { icon: '🚚', title: 'משלוח מהיר', desc: 'משלוחים יוצאים תוך יום עסקים אחד.' },
  { icon: '🤝', title: 'מדיניות החזרה', desc: 'לא מרוצים? נטפל בזה אישית — ללא בירוקרטיה.' },
]

export default function WhyUs() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-950/8 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <p className="text-forest-400 text-sm font-semibold tracking-widest text-center uppercase mb-3">
          למה לבחור בנו
        </p>
        <h2 className="section-title">למה דווקא Gat Prime?</h2>
        <div className="divider" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REASONS.map((r, i) => (
            <div key={i}
              className="flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 group"
              style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div className="text-2xl w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{background:'rgba(22,163,74,0.1)',border:'1px solid rgba(22,163,74,0.2)'}}>
                {r.icon}
              </div>
              <div>
                <h3 className="text-white font-bold mb-1 group-hover:text-forest-300 transition-colors">{r.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
