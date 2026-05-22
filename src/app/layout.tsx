import type { Metadata } from 'next'
import './globals.css'
import MetaPixel from '@/components/ui/MetaPixel'

export const metadata: Metadata = {
  title: 'Gat Prime | פחות נשנושים. יותר שליטה בתיאבון.',
  description: 'Gat Prime — טיפות גת טבעיות לתמיכה בשגרה מאוזנת. פחות חשק למתוקים, תחושת שובע טובה יותר ואנרגיה לאורך היום. משלוח חינם.',
  keywords: 'טיפות גת, gat prime, שליטה בתיאבון, פחות נשנושים, טבעי, שגרה מאוזנת',
  openGraph: {
    title: 'Gat Prime | פחות נשנושים. יותר שליטה.',
    description: 'טיפות גת טבעיות לשגרה מאוזנת יותר. מחיר היכרות לזמן מוגבל.',
    type: 'website',
    locale: 'he_IL',
  },
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <MetaPixel />
        <a href="#main-content" className="skip-link">דלגו לתוכן הראשי</a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
