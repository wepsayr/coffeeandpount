# Project memory

## Product intent & audience

- Landing page for Moscow coffee shop «Кофе и Точка»
- Russian-language UI throughout
- Target: local Moscow customers wanting to view menu, see photos, find address, and book a table
- Key conversion action: «Забронировать столик» button (appears in hero and elsewhere)

## Brand personality & voice

- Warm, modern, premium coffee-house aesthetic
- Russian copy; concise, inviting tone
- Names and labels in Russian; prices in rubles (₽)

## Visual design & UX direction

- Dark coffee-themed gradient palette (browns, creams, warm tones); configured in Tailwind
- CSS-art and gradients used as image substitutes (photo service unavailable)
- Animated steam effects on coffee cup visuals
- Hero: dark gradient bg, animated steam, two CTAs (reserve / view menu)
- About: three feature cards (fresh roast, ethical sourcing, warm atmosphere) + CSS coffee cup with steam animation
- Menu: tabbed categories (Кофе, Напитки, Выпечка, Десерты) with prices in ₽
- Gallery: 6 tiles with coffee gradients and hover effects
- Contact: address (Покровка), hours, phone, socials, stylized map with marker
- Reservation: modal form (name, phone, date, time, guests, notes) → DB storage → confirmation screen
- Fully responsive (mobile + desktop)
- Icons from lucide-react; `@/` path alias for imports

## Decisions, constraints & rationale

- Framework: vite-react + Tailwind CSS + Lucide React (no extra UI packages)
- No external photo assets; CSS-art/gradients chosen as fallback
- Reservation data persisted to database (table created in this session)
- Booking modal triggered by all «Забронировать столик» buttons

## Open questions & assumptions

- Real photos not yet available; CSS-art placeholders may be replaced later
- Exact address given as Покровка — full street number/map embed may need confirmation
- Reservation DB schema/backend details assumed from template defaults
- No actual phone/social links verified yet