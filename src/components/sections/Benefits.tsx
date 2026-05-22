const BENEFITS = [
  { icon: '⚡', title: 'מסייע לתחושת אנרגיה', desc: 'תמיכה בתחושת ערנות ורעננות לאורך היום.' },
  { icon: '🧠', title: 'תומך בריכוז', desc: 'עשוי לסייע בשמירה על קשב וריכוז במהלך עיסוקים יומיומיים.' },
  { icon: '🍬', title: 'שליטה בחשק למתוק', desc: 'עשוי לסייע בהפחתת חשק לממתקים ופחמימות.' },
  { icon: '💧', title: 'שימוש פשוט ונוח', desc: 'כמה טיפות בלבד — מתאים לכל שגרה, בכל מקום.' },
  { icon: '🌿', title: 'רכיבים טבעיים', desc: 'מבוסס על צמחים ומרכיבים מהטבע, ללא תוספים מלאכותיים.' },
  { icon: '📅', title: 'מתאים לשגרה עמוסה', desc: 'מינון יומיומי פשוט שנכנס בקלות לכל לוח זמנים.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-forest-400 text-sm font-semibold tracking-widest text-center uppercase mb-3">
          למה Gat Prime?
        </p>
        <h2 className="section-title">יתרונות המוצר</h2>
        <div className="divider" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <div key={i} className="card hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl mb-4 w-12 h-12 glass-green rounded-xl flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs text-center mt-8 max-w-xl mx-auto">
          * המוצר אינו תרופה ואינו מיועד לאבחן, לטפל, לרפא או למנוע מחלה.
          התוצאות עשויות להשתנות מאדם לאדם.
        </p>
      </div>
    </section>
  )
}
