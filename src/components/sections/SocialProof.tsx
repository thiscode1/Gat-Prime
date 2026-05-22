const TESTIMONIALS = [
  {
    name: 'מיכל ר.',
    location: 'תל אביב',
    text: 'האמת? פחות חיפשתי מתוק במהלך היום. לא ציפיתי שיעבוד כל כך מהר.',
    stars: 5,
    tag: 'שימוש של 3 שבועות',
  },
  {
    name: 'דניאל כ.',
    location: 'ירושלים',
    text: 'לקחתי לפני העבודה והרגשתי יותר בשליטה. פחות נפילות אנרגיה בצהריים.',
    stars: 5,
    tag: 'שימוש של חודש',
  },
  {
    name: 'שירה מ.',
    location: 'חיפה',
    text: 'המשלוח הגיע מהר והשירות היה מעולה. קיבלתי מענה בוואטסאפ תוך שעה.',
    stars: 5,
    tag: 'לקוחה חוזרת',
  },
  {
    name: 'נועה ב.',
    location: 'נתניה',
    text: 'פחות נשנושים בערב — זה מה שהכי הרגשתי. ממשיכה עם החבילה השנייה.',
    stars: 5,
    tag: 'שימוש של חודשיים',
  },
]

export default function SocialProof() {
  return (
    <section id="reviews" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{background:'radial-gradient(circle,rgba(21,128,61,0.08) 0%,transparent 70%)'}} />

      <div className="max-w-6xl mx-auto relative">
        <p className="text-forest-400 text-sm font-semibold tracking-widest text-center uppercase mb-3">
          חוויות אמיתיות
        </p>
        <h2 className="section-title">מה אומרים האנשים</h2>
        <div className="divider" />

        {/* Social counter */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <div className="flex -space-x-2 space-x-reverse">
              {['מ','ד','ש','נ','ע'].map((l, i) => (
                <div key={i}
                  className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{background:`hsl(${130 + i * 20},60%,${30 + i * 5}%)`}}>
                  {l}
                </div>
              ))}
            </div>
            <span className="text-white/60 text-sm">
              <span className="text-white font-bold">מאות אנשים</span> כבר משלבים את Gat Prime בשגרה היומית
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((r, i) => (
            <div key={i}
              className="relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)'}}>
              {/* Quote mark */}
              <div className="absolute top-4 left-4 text-5xl text-forest-800/40 font-serif leading-none select-none">"</div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(r.stars)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
                <span className="mr-2 text-forest-500/60 text-xs bg-forest-500/10 px-2 py-0.5 rounded-full">
                  {r.tag}
                </span>
              </div>

              <p className="text-white/70 text-base leading-relaxed mb-4 font-medium">
                "{r.text}"
              </p>

              <div className="flex items-center gap-2 pt-3 border-t border-white/8">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{background:`linear-gradient(135deg,#15803d,#166534)`}}>
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{r.name}</div>
                  <div className="text-white/35 text-xs">{r.location}</div>
                </div>
                <span className="mr-auto text-forest-500/50 text-xs">✓ לקוח מאומת</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
