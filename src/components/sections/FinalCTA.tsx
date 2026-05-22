export default function FinalCTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-950/15 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-forest-600/10 rounded-full blur-[80px]" />
      <div className="max-w-2xl mx-auto text-center relative">
        <div className="glass rounded-3xl p-10 md:p-14 border border-forest-500/20">
          <span className="text-5xl block mb-6">🌿</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            רוצים להתחיל היום?
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-8">
            בחרו חבילה, שלמו בצורה מאובטחת דרך PayPal
            ונחזור אליכם להשלמת המשלוח.
          </p>
          <a href="#pricing" className="btn-gold text-lg">
            🛒 להזמנה עכשיו
          </a>
        </div>
      </div>
    </section>
  )
}
