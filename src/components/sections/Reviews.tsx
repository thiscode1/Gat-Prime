const REVIEWS = [
  { name: 'מיכל ר.', location: 'תל אביב', text: 'עזר לי להישאר מרוכזת לאורך יום עמוס בעבודה. שימוש נוח ומהיר.', stars: 5 },
  { name: 'דניאל כ.', location: 'ירושלים', text: 'פחות נשנושים באמצע היום. מרגיש יותר בשליטה על מה שאני אוכל.', stars: 5 },
  { name: 'שירה מ.', location: 'חיפה', text: 'הזמנה מהירה ושירות מעולה. קיבלתי את המוצר תוך יומיים.', stars: 5 },
  { name: 'רון א.', location: 'ראשון לציון', text: 'התחלתי לפני חודש — מרגיש יותר ממוקד בבוקר. ממליץ לנסות.', stars: 5 },
  { name: 'נועה ב.', location: 'נתניה', text: 'אהבתי שזה טבעי לגמרי. השירות האישי של הצוות מדהים.', stars: 5 },
  { name: 'עמית ג.', location: 'פתח תקווה', text: 'פשוט לשימוש, מתאים לשגרה שלי. כבר הזמנתי חבילה שנייה.', stars: 5 },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-forest-900/15 rounded-full blur-[100px]" />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-forest-400 text-sm font-semibold tracking-widest text-center uppercase mb-3">
          לקוחות מספרים
        </p>
        <h2 className="section-title">מה אומרים הלקוחות</h2>
        <div className="divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card">
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.stars)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-2 pt-3 border-t border-white/8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-forest-600 to-forest-800 
                                flex items-center justify-center text-white font-bold text-xs">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{r.name}</div>
                  <div className="text-white/35 text-xs">{r.location}</div>
                </div>
                <span className="mr-auto text-white/20 text-xs">✓ לקוח מאומת</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
