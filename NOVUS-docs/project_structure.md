# 🟢 FILE STRUCTURE FOR ANTIGRAVITY

Create this structure BEFORE coding:

```
/app
  /page.tsx
  /about/page.tsx       # (Optional if covered in Home, but user listed in structure)
  /schedule/page.tsx
  /sponsors/page.tsx    # (Optional if covered in Home, but listed here)
  /register/page.tsx
  /faq/page.tsx
  /contact/page.tsx

/components
  Button.tsx
  Card.tsx
  Timeline.tsx
  Countdown.tsx
  Accordion.tsx
  Navbar.tsx
  Footer.tsx
  FormInput.tsx
  UploadField.tsx

/lib
  db.ts
  submit.ts

/public
  logo.svg
  qr-code.png
```

## Strategy
- **Frontend Only:** Next.js + Tailwind + Framer Motion.
- **Data:** Supabase or Firebase (Simplest).
- **Payment:** Static QR + Manual Screenshot Verification.
- **No:** Login, Dashboard, Complex Backend.
