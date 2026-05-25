'use client'
import { useEffect, useRef } from 'react'
import { WHATSAPP_NUMBER } from '@/config/products'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Hero() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'היי, אני רוצה לקבל מחיר היכרות על טיפות גת פריים')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; r: number; dx: number; dy: number; o: number }[] = []
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: -Math.random() * 0.4 - 0.1,
        o: Math.random() * 0.4 + 0.1,
      })
    }

    let raf: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(134,239,172,${p.o})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width }
        if (p.x < -5) p.x = canvas.width + 5
        if (p.x > canvas.width + 5) p.x = -5
      })
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-20">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />

      {/* BG gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/50 via-black to-black" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] -translate-y-1/2 translate-x-1/4"
        style={{background:'radial-gradient(circle,rgba(21,128,61,0.2) 0%,transparent 70%)'}} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] translate-y-1/3 -translate-x-1/4"
        style={{background:'radial-gradient(circle,rgba(146,64,14,0.12) 0%,transparent 70%)'}} />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center lg:text-right order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
            <span className="text-forest-300 text-sm font-semibold">מחיר היכרות לזמן מוגבל</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-5">
            <span className="text-white">פחות נשנושים.</span>
            <br />
            <span className="gold-text">יותר שליטה</span>
            <br />
            <span className="text-white">בתיאבון.</span>
          </h1>

          <p className="text-white/55 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Gat Prime פותח עבור אנשים שרוצים לתמוך בשגרה מאוזנת יותר —
            עם פחות חשק למתוקים ופחמימות, תחושת שובע טובה יותר ואנרגיה לאורך היום.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 text-sm">
            <span className="flex items-center gap-1.5 text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              משלוחים יוצאים היום
            </span>
            <span className="text-white/20">|</span>
            <span className="text-yellow-400 font-semibold">מלאי מוגבל</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
            <a href="#pricing" className="btn-gold text-base">
              לקבלת מחיר היכרות
            </a>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-outline text-base">
              💬 התייעצות חינם
            </a>
          </div>

          {/* Trust inline */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 text-white/35 text-xs">
            {[['🔒','תשלום מאובטח'],['🚚','משלוח חינם'],['💬','שירות אישי'],['🌿','100% טבעי']].map(([icon, label]) => (
              <span key={label} className="flex items-center gap-1.5">
                <span className="text-forest-500 font-bold text-xs">✔</span>
                {icon} {label}
              </span>
            ))}
          </div>
        </div>

        {/* Image / Bottle */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            {/* Multi-layer glow */}
            <div className="absolute inset-0 rounded-3xl blur-[80px] scale-110"
              style={{background:'radial-gradient(circle,rgba(34,197,94,0.2) 0%,transparent 70%)'}} />
            <div className="absolute inset-0 rounded-3xl blur-[40px] scale-95"
              style={{background:'radial-gradient(circle,rgba(212,175,55,0.1) 0%,transparent 70%)'}} />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-float">
              <img
                src="/hero-image.jpg"
                alt="אישה משתמשת בטיפות גת פריים"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <div className="glass-green rounded-2xl px-4 py-3 flex items-center gap-3"
                  style={{backdropFilter:'blur(16px)',background:'rgba(0,0,0,0.5)',border:'1px solid rgba(34,197,94,0.3)'}}>
                  <span className="text-2xl">🌿</span>
                  <div>
                    <div className="text-white font-bold text-sm">Gat Prime</div>
                    <div className="text-forest-300 text-xs">טיפות גת טבעיות</div>
                  </div>
                  <div className="mr-auto">
                    <div className="text-white/40 text-xs line-through">₪400</div>
                    <div className="text-yellow-400 font-black text-xl leading-tight">₪350</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
