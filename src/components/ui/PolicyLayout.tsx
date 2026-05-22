import Link from 'next/link'

interface Props {
  title: string
  children: React.ReactNode
}

export default function PolicyLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-black px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-forest-400 hover:text-forest-300 text-sm mb-8 transition-colors">
          → חזרה לדף הבית
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="text-forest-400 text-xs font-semibold tracking-widest uppercase mb-2">Gat Prime</div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{title}</h1>
          <div className="w-16 h-0.5 bg-gradient-to-l from-forest-500 to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-sm max-w-none
                        [&_h2]:text-white [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-3
                        [&_h3]:text-forest-300 [&_h3]:font-semibold [&_h3]:text-base [&_h3]:mt-5 [&_h3]:mb-2
                        [&_p]:text-white/60 [&_p]:leading-relaxed [&_p]:mb-4
                        [&_ul]:text-white/60 [&_ul]:space-y-1 [&_ul]:mb-4 [&_ul]:pr-5
                        [&_li]:list-disc [&_strong]:text-white/90">
          {children}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-6 border-t border-white/8 text-white/25 text-xs text-center">
          <p>Gat Prime © {new Date().getFullYear()} | לשאלות:{' '}
            <a href="https://wa.me/972501234567" className="text-forest-500 hover:text-forest-400">
              צרו קשר בוואטסאפ
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
