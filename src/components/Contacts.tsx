import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

interface ContactsProps {
  onReserve: () => void;
}

export default function Contacts({ onReserve }: ContactsProps) {
  return (
    <section id="contacts" className="py-24 sm:py-32 bg-coffee-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,rgba(201,168,125,0.4),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-coffee-400 tracking-[0.2em] uppercase text-sm font-semibold mb-4">
              Контакты
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-8">
              Заходите на чашку
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coffee-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-coffee-300" />
                </div>
                <div>
                  <h3 className="text-cream-50 font-semibold mb-1">Адрес</h3>
                  <p className="text-cream-100/60">Москва, ул. Покровка, 12</p>
                  <p className="text-cream-100/60">м. Китай-город, 5 минут пешком</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coffee-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-coffee-300" />
                </div>
                <div>
                  <h3 className="text-cream-50 font-semibold mb-1">Часы работы</h3>
                  <p className="text-cream-100/60">Пн–Пт: 08:00 — 22:00</p>
                  <p className="text-cream-100/60">Сб–Вс: 09:00 — 23:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coffee-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-coffee-300" />
                </div>
                <div>
                  <h3 className="text-cream-50 font-semibold mb-1">Телефон</h3>
                  <a href="tel:+74951234567" className="text-cream-100/60 hover:text-coffee-300 transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coffee-800 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-coffee-300" />
                </div>
                <div>
                  <h3 className="text-cream-50 font-semibold mb-1">Соцсети</h3>
                  <p className="text-cream-100/60">@kofe_i_tochka</p>
                </div>
              </div>
            </div>

            <button
              onClick={onReserve}
              className="mt-10 bg-coffee-400 hover:bg-coffee-300 text-coffee-900 px-8 py-4 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-coffee-400/20 active:scale-95"
            >
              Забронировать столик
            </button>
          </div>

          {/* Stylized map placeholder */}
          <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden bg-coffee-800 border border-coffee-700/50">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-px h-full bg-coffee-600" />
              <div className="absolute top-0 left-2/3 w-px h-full bg-coffee-600" />
              <div className="absolute left-0 top-1/3 w-full h-px bg-coffee-600" />
              <div className="absolute left-0 top-2/3 w-full h-px bg-coffee-600" />
              {/* Roads */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-coffee-500/40 -rotate-6" />
              <div className="absolute top-0 left-1/2 w-1 h-full bg-coffee-500/40 rotate-12" />
            </div>

            {/* Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-14 h-14 bg-coffee-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <MapPin className="w-7 h-7 text-coffee-900" />
              </div>
              <div className="mt-2 bg-cream-50 px-4 py-2 rounded-full shadow-lg">
                <span className="text-coffee-800 text-sm font-semibold">Кофе и Точка</span>
              </div>
              <div className="w-2 h-2 bg-coffee-400 rounded-full mt-1" />
            </div>

            <div className="absolute bottom-4 right-4 bg-cream-50/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-cream-100/70 text-xs">Покровка, 12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
