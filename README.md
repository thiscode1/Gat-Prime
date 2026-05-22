# 🌿 Gat Prime — טיפות גת טבעיות

אתר מכירות מקצועי עם PayPal, עברית RTL, מובייל-פירסט.

---

## 🚀 הפעלה מהירה

```cmd
npm install
copy .env.local.example .env.local
npm run dev
```
פתחו: http://localhost:3000

---

## ⚙️ משתני סביבה (.env.local)

| משתנה | מה זה | איפה מקבלים |
|---|---|---|
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | PayPal Client ID | developer.paypal.com |
| `PAYPAL_CLIENT_SECRET` | PayPal Secret 🔒 | developer.paypal.com |
| `PAYPAL_MODE` | sandbox / live | — |

---

## ✏️ שינוי מחירים וחבילות

ערכו: `src/config/products.ts`
- `PACKAGES` — 3 חבילות (שם, מחיר, תיאור)
- `PROMO` — מחיר היכרות
- `WHATSAPP_NUMBER` — מספר וואטסאפ שלכם

---

## 📄 עמודים

| עמוד | URL |
|---|---|
| דף הבית | `/` |
| הצלחה | `/success` |
| ביטול | `/cancel` |

---

## 🌐 Deploy לVercel

```bash
npm i -g vercel
vercel
```
הוסיפו משתני סביבה ב: Vercel → Settings → Environment Variables
