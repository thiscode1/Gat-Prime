import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-6">😔</div>
        <h1 className="text-2xl font-bold text-white mb-3">התשלום בוטל</h1>
        <p className="text-white/50 mb-8">
          התשלום לא הושלם. אם נתקלתם בבעיה, אנחנו כאן לעזור.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/#pricing" className="btn-primary justify-center">
            נסו שוב
          </Link>
          <Link href="/" className="text-white/35 hover:text-white text-sm transition-colors">
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  )
}
