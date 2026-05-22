import type { Metadata } from 'next'
import './globals.css'
import MetaPixel from '@/components/ui/MetaPixel'

export const metadata: Metadata = {
  title: 'Gat Prime | טיפות גת טבעיות — אנרגיה, ריכוז ושליטה',
  description: 'טיפות גת פרמיום לתמיכה באנרגיה, ריכוז ושליטה בתיאבון. רכיבים טבעיים, שימוש נוח, משלוח לכל הארץ.',
  keywords: 'טיפות גת, gat prime, טיפות טבעיות, אנרגיה טבעית, ריכוז, שליטה בתיאבון',
  openGraph: {
    title: 'Gat Prime | טיפות גת טבעיות',
    description: 'אנרגיה, ריכוז ושליטה בתיאבון בשגרה היומיומית.',
    type: 'website',
    locale: 'he_IL',
  },
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
