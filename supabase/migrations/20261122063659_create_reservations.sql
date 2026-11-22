/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, not null) — guest name
  - `phone` (text, not null) — contact phone
  - `date` (date, not null) — reservation date
  - `time` (text, not null) — reservation time slot
  - `guests` (integer, not null, default 2) — number of guests
  - `note` (text) — optional comment
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `reservations`.
- Grant INSERT + SELECT to `anon` and `authenticated` so the public form can create bookings.
- Allow anon + authenticated INSERT and SELECT (intentionally public booking creation).
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  note text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON reservations TO anon, authenticated;

DROP POLICY IF EXISTS "anon_select_reservations" ON reservations;
CREATE POLICY "anon_select_reservations"
ON reservations FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations"
ON reservations FOR INSERT
TO anon, authenticated WITH CHECK (true);
