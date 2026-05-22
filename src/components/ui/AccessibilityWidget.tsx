'use client'
import { useState, useEffect } from 'react'

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState({
    fontSize: 0,       // -1, 0, 1, 2
    contrast: false,   // ניגודיות גבוהה
    grayscale: false,  // גווני אפור
    underline: false,  // קו תחת קישורים
    animate: false,    // עצור אנימציות
    cursor: false,     // סמן גדול
  })

  useEffect(() => {
    const root = document.documentElement

    // גודל טקסט
    const sizes = [100, 110, 125, 140]
    root.style.fontSize = sizes[settings.fontSize + 1] + '%'

    // ניגודיות
    document.body.style.filter = [
      settings.contrast ? 'contrast(150%)' : '',
      settings.grayscale ? 'grayscale(100%)' : '',
    ].filter(Boolean).join(' ') || ''

    // קו תחת קישורים
    if (settings.underline) {
      root.style.setProperty('--link-decoration', 'underline')
      document.querySelectorAll('a').forEach(a => a.style.textDecoration = 'underline')
    } else {
      document.querySelectorAll('a').forEach(a => a.style.textDecoration = '')
    }

    // עצור אנימציות
    if (settings.animate) {
      root.style.setProperty('--animation-duration', '0.01ms')
      const style = document.getElementById('stop-animations') || document.createElement('style')
      style.id = 'stop-animations'
      style.textContent = '*, *::before, *::after { animation: none !important; transition: none !important; }'
      document.head.appendChild(style)
    } else {
      document.getElementById('stop-animations')?.remove()
    }

    // סמן גדול
    root.style.cursor = settings.cursor ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'14\' fill=\'%23facc15\' stroke=\'%23000\' stroke-width=\'2\'/%3E%3C/svg%3E") 16 16, auto' : ''

  }, [settings])

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof settings] }))
  }

  const reset = () => {
    setSettings({ fontSize: 0, contrast: false, grayscale: false, underline: false, animate: false, cursor: false })
    document.documentElement.style.fontSize = ''
    document.body.style.filter = ''
    document.getElementById('stop-animations')?.remove()
    document.documentElement.style.cursor = ''
  }

  const BUTTONS = [
    { key: 'contrast', icon: '◑', label: 'ניגודיות גבוהה' },
    { key: 'grayscale', icon: '◐', label: 'גווני אפור' },
    { key: 'underline', icon: 'A̲', label: 'קו תחת קישורים' },
    { key: 'animate',   icon: '⏸', label: 'עצור אנימציות' },
    { key: 'cursor',    icon: '⬤', label: 'סמן גדול' },
  ]

  return (
    <>
      {/* כפתור פתיחה */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="תפריט נגישות"
        title="נגישות"
className="fixed bottom-24 left-6 z-50 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm flex items-center justify-center shadow-[0_4px_20px_rgba(37,99,235,0.5)] hover:scale-110 transition-all duration-200"


      >
        ♿
      </button>

      {/* תפריט */}
      {open && (
        <div
          role="dialog"
          aria-label="הגדרות נגישות"
          className="fixed bottom-40 left-6 z-50 w-64 bg-gray-900 border border-white/15
                     rounded-2xl shadow-2xl p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold text-sm">הגדרות נגישות</h2>
            <button onClick={() => setOpen(false)} aria-label="סגור תפריט נגישות"
              className="text-white/40 hover:text-white text-lg leading-none">✕</button>
          </div>

          {/* גודל טקסט */}
          <div className="mb-4">
            <p className="text-white/50 text-xs mb-2">גודל טקסט</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSettings(p => ({ ...p, fontSize: Math.max(-1, p.fontSize - 1) }))}
                aria-label="הקטן טקסט"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors">
                A-
              </button>
              <div className="flex-1 text-center text-white/60 text-xs">
                {['קטן','רגיל','גדול','גדול מאוד'][settings.fontSize + 1]}
              </div>
              <button
                onClick={() => setSettings(p => ({ ...p, fontSize: Math.min(2, p.fontSize + 1) }))}
                aria-label="הגדל טקסט"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors">
                A+
              </button>
            </div>
          </div>

          {/* שאר הכפתורים */}
          <div className="space-y-2 mb-4">
            {BUTTONS.map(btn => (
              <button key={btn.key}
                onClick={() => toggle(btn.key as keyof typeof settings)}
                aria-pressed={settings[btn.key as keyof typeof settings] as boolean}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm
                           transition-all duration-200 font-medium
                           ${settings[btn.key as keyof typeof settings]
                             ? 'bg-blue-600 text-white'
                             : 'bg-white/8 text-white/70 hover:bg-white/15'}`}>
                <span className="text-base w-5 text-center">{btn.icon}</span>
                {btn.label}
                {settings[btn.key as keyof typeof settings] && (
                  <span className="mr-auto text-xs opacity-70">פעיל</span>
                )}
              </button>
            ))}
          </div>

          {/* איפוס */}
          <button onClick={reset}
            className="w-full py-2 text-white/40 hover:text-white text-xs transition-colors border border-white/10 rounded-xl hover:border-white/25">
            ↺ איפוס הגדרות
          </button>

          <p className="text-white/20 text-xs text-center mt-3">
            נגישות לפי תקן WCAG 2.1
          </p>
        </div>
      )}
    </>
  )
}
