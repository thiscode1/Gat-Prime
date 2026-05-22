import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gat Prime | טיפות גת טבעיות',
  description: 'טיפות גת פרמיום לתמיכה באנרגיה, ריכוז ושליטה בתיאבון.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <a href="#main-content" className="skip-link">
          דלגו לתוכן הראשי
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  )
}