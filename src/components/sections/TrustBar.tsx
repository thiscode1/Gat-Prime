const ITEMS = [
  { icon: '🔒', text: 'תשלום מאובטח' },
  { icon: '🚚', text: 'משלוח מהיר' },
  { icon: '💬', text: 'שירות אישי בוואטסאפ' },
  { icon: '🌿', text: '100% טבעי' },
  { icon: '↩️', text: 'מדיניות החזרה' },
]

export default function TrustBar() {
  return (
    <div className="py-4 px-4 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-white/40 text-xs font-medium">
            <span className="text-sm">{item.icon}</span>
            <span className="flex items-center gap-1">
              <span className="text-forest-500 font-bold">✔</span>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
