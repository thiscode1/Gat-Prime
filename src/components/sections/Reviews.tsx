const REVIEWS = [
  { name: 'מיכל ר.', location: 'תל אביב', text: 'האמת? הופתעתי לטובה. לא ציפיתי שארגיש הבדל כל כך מהר. ממשיכה להשתמש.', stars: 5, service: 'בקבוק אחד' },
  { name: 'דניאל כ.', location: 'ירושלים', text: 'התחלתי להשתמש בזה לפני העבודה — מרגיש יותר ממוקד ופחות עייף בצהריים.', stars: 5, service: '2 בקבוקים' },
  { name: 'שירה מ.', location: 'חיפה', text: 'פחות מתוק במהלך היום. לא ציפיתי לזה בכלל, אבל זה מה שהכי הרגשתי.', stars: 5, service: 'מחיר היכרות' },
  { name: 'רון א.', location: 'ראשון לציון', text: 'המשלוח הגיע מהר והשירות היה מעולה. קיבלתי מענה בוואטסאפ תוך שעה.', stars: 5, service: 'בקבוק אחד' },
  { name: 'נועה ב.', location: 'נתניה', text: 'משתמשת כבר חודשיים. השגרה שלי השתנתה — פחות נשנושים, יותר אנרגיה בבוקר.', stars: 5, service: '3 בקבוקים' },
  { name: 'עמית ג.', location: 'פתח תקווה', text: 'פשוט לשימוש ולא מרגיש כבד. כבר הזמנתי חבילה שנייה — מרוצה מאוד.', stars: 5, service: '2 בקבוקים' },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-forest-900/15 rounded-full blur-[100px]" />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-forest-400 text-sm font-semibold tracking-widest text-center uppercase mb-3">לקוחות מספרים</p>
        <h2 className="section-title">מה אומרים הלקוחות</h2>
        <div className="divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card hover:-translate-y-1 transition-transform duration-300">
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.stars)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-2 pt-3 border-t border-white/8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-forest-600 to-forest-800
                                flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{r.name}</div>
                  <div className="text-white/35 text-xs">{r.location}</div>
                </div>
                <span className="mr-auto text-forest-500/60 text-xs">✓ לקוח מאומת</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
