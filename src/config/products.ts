// =============================================
// שנו כאן מחירים, חבילות ותוכן — בקלות!
// =============================================

export const WHATSAPP_NUMBER = '972545549361' // ← שנו למספר שלכם

export const PACKAGES = [
  {
    id: 'single',
    name: 'בקבוק אחד',
    bottles: 1,
    price: 400,
    priceUSD: 109,
    badge: null as string | null,
    description: 'הכר את המוצר ותחוש את ההבדל — כולל משלוח חינם',
    paypalDescription: 'Gat Prime Drops x1',
  },
  {
    id: 'double',
    name: '2 בקבוקים',
    bottles: 2,
    price: 720,
    priceUSD: 196,
    badge: 'הכי משתלם' as string | null,
    description: 'שמרו על שגרה עקבית לאורך זמן — כולל משלוח חינם',
    paypalDescription: 'Gat Prime Drops x2',
  },
  {
    id: 'triple',
    name: '3 בקבוקים',
    bottles: 3,
    price: 999,
    priceUSD: 272,
    badge: null as string | null,
    description: 'חסכו יותר, תרגישו יותר — כולל משלוח חינם',
    paypalDescription: 'Gat Prime Drops x3',
  },
]

export const PROMO = {
  active: true,
  label: 'מחיר היכרות מוגבל',
  price: 350,
  priceUSD: 82,
  description: 'בקבוק ראשון במחיר מיוחד — להיכרות',
  id: 'promo',
  paypalDescription: 'Gat Prime Drops — מחיר היכרות',
}

export const SITE_CONFIG = {
  name: 'Gat Prime',
  nameHe: 'טיפות גת',
  tagline: 'אנרגיה, ריכוז ושליטה בתיאבון בטיפה אחת',
  email: 'info@gatprime.co.il',
  phone: '+972-50-0000000',
}
