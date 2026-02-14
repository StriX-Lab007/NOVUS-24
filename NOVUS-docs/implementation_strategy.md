# 🧠 implementation_strategy.md

## Simplified Architecture
- **Goal:** High-impact, premium-feel marketing + registration website.
- **Constraint:** Solo-friendly, simple data capture.

## Tech Stack
- **Frontend:** Next.js, Tailwind CSS, Framer Motion.
- **Backend:** Supabase (or Firebase) for simple form data storage.
- **Auth:** NONE (No login/dashboard required).
- **Payment:** Manual (Static QR Code + Screenshot Upload).

## Key Requirements
- **UI:** High-end "Stitch generated" feel. Smooth animations.
- **Performance:** Fast load, smooth transitions.
- **Responsiveness:** Mobile-first.

## Execution Steps
1. **Lock Design System:** Define tokens (Neon Green #00FF66, Dark Navy #07121A).
2. **Build Components:** Create reusable primitives (Glow Button, Glass Card, etc.).
3. **Assemble Pages:** Home, Schedule, Register, etc.
4. **Integrate Logic:** Form submission to Supabase.
