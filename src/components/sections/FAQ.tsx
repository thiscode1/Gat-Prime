'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: 'תוך כמה זמן מגיע המשלוח?',
    a: 'בדרך כלל 2-4 ימי עסקים לכל רחבי הארץ. תקבלו עדכון ישיר בוואטסאפ לאחר אישור ההזמנה.',
  },
  {
    q: 'איך משתמשים בטיפות?',
    a: 'מומלץ להשתמש לפי ההוראות שמופיעות על גבי המוצר. אין לחרוג מהמינון המומלץ.',
  },
  {
    q: 'האם זה טבעי לגמרי?',
    a: 'כן, Gat Prime מבוסס על רכיבים טבעיים ממוצא צמחי, ללא תוספים מלאכותיים.',
  },
  {
    q: 'האם אפשר לשלם בפייפאל?',
    a: 'בהחלט! כל ההזמנות מתבצעות דרך PayPal — תשלום מאובטח עם כרטיס אשראי או חשבון PayPal.',
  },
  {
    q: 'איך יוצרים קשר אחרי הזמנה?',
    a: 'ניתן לפנות אלינו ישירות בוואטסאפ. אחרי ביצוע ההזמנה תוצג לכם אפשרות לשלוח הודעה אוטומטית.',
  },
  {
    q: 'האם זה מתאים לכולם?',
    a: 'נשים בהריון, מניקות, קטינים מתחת לגיל 18, אנשים עם בעיות רפואיות קיימות או מי שנוטל תרופות — יש להתייעץ עם רופא לפני שימוש. המוצר אינו מיועד לכל אדם.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-forest-400 text-sm font-semibold tracking-widest text-center uppercase mb-3">
          שאלות ותשובות
        </p>
        <h2 className="section-title">שאלות נפוצות</h2>
        <div className="divider" />

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300
                         ${open === i ? 'border-forest-500/30' : 'hover:border-white/15'}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-right flex items-center justify-between p-5 gap-4">
                <span className="font-semibold text-white">{f.q}</span>
                <span className={`text-forest-400 text-2xl flex-shrink-0 transition-transform duration-300 leading-none
                                  ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 border-t border-white/8 pt-4">
                  <p className="text-white/60 leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
