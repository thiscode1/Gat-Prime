import { WHATSAPP_NUMBER } from '@/config/products'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function FinalCTA() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, אני רוצה להזמין טיפות גת פריים')
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{background:'radial-gradient(ellipse 60% 50% at 50% 50%,rgba(21,128,61,0.08) 0%,transparent 70%)'}} />
      <div className="max-w-2xl mx-auto text-center relative">
        <div className="rounded-3xl p-10 md:p-14"
          style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(34,197,94,0.2)',boxShadow:'0 0 60px rgba(34,197,94,0.06)'}}>
          <span className="text-5xl block mb-6">🌿</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            רוצים להתחיל היום?
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-8">
            בחרו חבילה, שלחו הזמנה בוואטסאפ
            ונחזור אליכם עם פרטי משלוח ותשלום.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#pricing" className="btn-gold text-lg">
              להזמנה עכשיו
            </a>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-outline text-lg">
              💬 שאלו אותנו
            </a>
          </div>
          <p className="text-white/20 text-xs mt-6">
            מחיר היכרות | משלוח חינם | שירות אישי
          </p>
        </div>
      </div>
    </section>
  )
}
