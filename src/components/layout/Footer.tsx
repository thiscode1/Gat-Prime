import Link from 'next/link'
import { SITE_CONFIG, WHATSAPP_NUMBER } from '@/config/products'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Footer() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, אני מעוניין בטיפות גת פריים')

  return (
    <footer className="border-t border-white/8 bg-black/80 px-4 pt-12 pb-32 md:pb-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-black text-xl mb-1">
              <span className="gold-text">Gat</span>
              <span className="text-white"> Prime</span>
            </div>
            <div className="text-forest-400 text-xs tracking-widest mb-4">טיפות גת טבעיות</div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              מוצר טבעי לתמיכה באנרגיה, ריכוז ושליטה בתיאבון בשגרה היומיומית.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white/70 font-semibold text-sm mb-4">ניווט</h4>
            <div className="space-y-2">
              {[['#hero','בית'],['#benefits','יתרונות'],['#pricing','מחיר'],['#faq','שאלות נפוצות']].map(([h,l]) => (
                <div key={h}>
                  <a href={h} className="text-white/40 hover:text-white transition-colors text-sm">{l}</a>
                </div>
              ))}
              <div>
                <a href={waUrl} target="_blank" rel="noreferrer"
                  className="text-white/40 hover:text-white transition-colors text-sm">
                  יצירת קשר
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white/70 font-semibold text-sm mb-4">מדיניות</h4>
            <div className="space-y-2">
              <div><Link href="/takanon" className="text-white/40 hover:text-white transition-colors text-sm">תקנון האתר</Link></div>
              <div><Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-sm">מדיניות פרטיות</Link></div>
              <div><Link href="/shipping" className="text-white/40 hover:text-white transition-colors text-sm">מדיניות משלוחים</Link></div>
              <div><Link href="/returns" className="text-white/40 hover:text-white transition-colors text-sm">מדיניות החזרות</Link></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 space-y-3">
          <p className="text-white/20 text-xs text-center leading-relaxed">
            המוצר אינו תרופה ואינו מיועד לאבחן, לטפל, לרפא או למנוע מחלה.
            יש להתייעץ עם רופא לפני שימוש במקרה של מצב רפואי קיים, הריון, הנקה או נטילת תרופות.
            התוצאות עשויות להשתנות מאדם לאדם.
          </p>
          <p className="text-white/20 text-xs text-center">
            © {new Date().getFullYear()} {SITE_CONFIG.name} | כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  )
}
