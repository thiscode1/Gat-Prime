import type { Metadata } from 'next'
import ModelLanding from './ModelLanding'

export const metadata: Metadata = {
  title: 'Gat Prime | פחות נשנושים. יותר שליטה.',
  description: 'טיפות גת טבעיות — פחות חשק למתוקים, תחושת שובע טובה יותר ואנרגיה לאורך היום. מחיר היכרות לזמן מוגבל.',
}

export default function ModelPage() {
  return <ModelLanding />
}
