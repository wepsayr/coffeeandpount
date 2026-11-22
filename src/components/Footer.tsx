import { Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coffee-950 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-cream-50">
            <Coffee className="w-6 h-6" />
            <span className="font-display text-xl font-bold">Кофе и Точка</span>
          </div>
          <p className="text-cream-100/40 text-sm text-center">
            Москва, ул. Покровка, 12 · +7 (495) 123-45-67
          </p>
          <p className="text-cream-100/30 text-sm">
            © 2014–2026 Кофе и Точка
          </p>
        </div>
      </div>
    </footer>
  );
}
