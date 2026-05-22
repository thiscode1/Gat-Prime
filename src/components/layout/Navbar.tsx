'use client'
import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '@/config/products'

const LINKS = [
  { label: 'בית', href: '#hero' },
  { label: 'יתרונות', href: '#benefits' },
  { label: 'איך משתמשים', href: '#how' },
  { label: 'מחיר', href: '#pricing' },
  { label: 'שאלות נפוצות', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-3' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none">
          <span className="font-black text-xl tracking-tight">
            <span className="gold-text">Gat</span>
            <span className="text-white"> Prime</span>
          </span>
          <span className="text-forest-400 text-xs tracking-widest">טיפות גת</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(l => (
            <a key={l.href} href={l.href}
              className="text-white/55 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="#pricing" className="btn-primary text-sm py-2.5 px-5 rounded-xl">
            להזמנה עכשיו
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/60">
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/5 px-4 py-4 space-y-3">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-white font-medium py-1">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
