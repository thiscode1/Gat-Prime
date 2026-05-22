import { SITE_CONFIG, WHATSAPP_NUMBER } from '@/config/products'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/60 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="font-black text-xl mb-1">
              <span className="gold-text">Gat</span>
              <span className="text-white"> Prime</span>
            </div>
            <div className="text-forest-400 text-xs tracking-widest">טיפות גת טבעיות</div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
            {[['#hero','בית'],['#benefits','יתרונות'],['#pricing','מחיר'],['#faq','שאלות']].map(([h,l]) => (
              <a key={h} href={h} className="hover:text-white transition-colors">{l}</a>
            ))}
            <a href={buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, אני מעוניין בטיפות גת פריים')}
              target="_blank" rel="noreferrer"
              className="hover:text-white transition-colors">וואטסאפ</a>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 text-center space-y-2">
          <p className="text-white/20 text-xs">
            המוצר אינו תרופה ואינו מיועד לאבחן, לטפל, לרפא או למנוע מחלה.
            יש להתייעץ עם רופא לפני שימוש במקרה של מצב רפואי קיים.
          </p>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} {SITE_CONFIG.name} | כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  )
}
