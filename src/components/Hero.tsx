import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onReserve: () => void;
}

export default function Hero({ onReserve }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee-900">
      {/* Layered gradient background evoking coffee tones */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-950 via-coffee-800 to-coffee-600" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_70%_20%,rgba(176,136,85,0.5),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_20%_80%,rgba(201,168,125,0.4),transparent_50%)]" />
        {/* Steam wisps */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-1 h-24 bg-cream-100/10 rounded-full blur-xl animate-steam" />
        <div className="absolute left-1/2 top-1/3 -translate-x-8 w-1 h-32 bg-cream-100/5 rounded-full blur-xl animate-steam" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/3 translate-x-6 w-1 h-28 bg-cream-100/5 rounded-full blur-xl animate-steam" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in-up">
        <p className="text-cream-200/80 tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 font-medium">
          Москва · с 2014 года
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-cream-50 leading-tight mb-6">
          Кофе <span className="text-coffee-300">&</span> Точка
        </h1>
        <p className="text-cream-100/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Авторская обжарка, тёплая атмосфера и аромат, ради которого хочется
          возвращаться каждое утро.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onReserve}
            className="bg-cream-50 hover:bg-white text-coffee-800 px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-2xl hover:shadow-coffee-300/20 active:scale-95 w-full sm:w-auto"
          >
            Забронировать столик
          </button>
          <button
            onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-cream-100/30 hover:border-cream-100/60 text-cream-50 px-8 py-4 rounded-full font-medium text-base transition-all active:scale-95 w-full sm:w-auto"
          >
            Посмотреть меню
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-100/50 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
