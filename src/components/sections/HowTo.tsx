const STEPS = [
  { num: '01', title: 'קראו את ההוראות', desc: 'עיינו בהוראות השימוש שעל גבי המוצר לפני השימוש הראשון.' },
  { num: '02', title: 'השתמשו לפי המינון', desc: 'מומלץ להשתמש לפי ההוראות שמופיעות על גבי המוצר בלבד.' },
  { num: '03', title: 'שמרו על עקביות', desc: 'שימוש יומיומי סדיר עשוי לסייע בחוויה מיטבית.' },
]

export default function HowTo() {
  return (
    <section id="how" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-950/10 to-transparent" />
      <div className="max-w-4xl mx-auto relative">
        <p className="text-forest-400 text-sm font-semibold tracking-widest text-center uppercase mb-3">
          שימוש נכון
        </p>
        <h2 className="section-title">איך משתמשים?</h2>
        <div className="divider" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {STEPS.map((s, i) => (
            <div key={i} className="card text-center">
              <div className="text-4xl font-black gold-text mb-4">{s.num}</div>
              <h3 className="text-white font-bold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-5 border border-yellow-500/20 bg-yellow-500/5">
          <div className="flex gap-3 items-start">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-yellow-300 font-semibold mb-1">הערה חשובה</p>
              <p className="text-white/60 text-sm leading-relaxed">
                מומלץ להשתמש לפי ההוראות שמופיעות על גבי המוצר. אין לחרוג מהמינון המומלץ.
                המוצר אינו תרופה ואינו מיועד לאבחן, לטפל, לרפא או למנוע מחלה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
