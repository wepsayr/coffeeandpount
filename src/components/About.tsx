import { Flame, Leaf, Heart } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Свежая обжарка',
    text: 'Обжариваем зерно каждую неделю прямо здесь, в Москве. Вы получаете кофе на пике вкуса.',
  },
  {
    icon: Leaf,
    title: 'Этичный sourcing',
    text: 'Работаем напрямую с фермерами Эфиопии, Колумбии и Бразилии по принципам честной торговли.',
  },
  {
    icon: Heart,
    title: 'Тёплая атмосфера',
    text: 'Мягкий свет, виниловые пластинки и запах свежего хлеба — место, где хочется остаться.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-coffee-500 tracking-[0.2em] uppercase text-sm font-semibold mb-4">
              О кофейне
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 leading-tight mb-6">
              Кофе, обжаренный с любовью
            </h2>
            <p className="text-coffee-700 text-lg leading-relaxed mb-6">
              «Кофе и Точка» — это маленькая кофейня с большим сердцем. Мы начали
              в 2014 году с одной ростерной машины и мечты показать москвичам,
              каким бывает настоящий спешелти-кофе.
            </p>
            <p className="text-coffee-600 text-base leading-relaxed mb-8">
              Сегодня мы по-прежнему обжариваем каждое зерно вручную, варим
              каждый напиток с заботой и встречаем каждого гостя как друга.
              Без суеты. Без компромиссов. Только кофе и точка.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="text-left">
                  <div className="w-12 h-12 rounded-xl bg-coffee-100 flex items-center justify-center mb-3">
                    <f.icon className="w-6 h-6 text-coffee-600" />
                  </div>
                  <h3 className="font-semibold text-coffee-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-coffee-500 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative coffee cup CSS art */}
          <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,125,0.25),transparent_70%)] rounded-full" />
            <div className="relative">
              {/* Steam */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-3">
                <div className="w-1.5 h-16 bg-cream-200/40 rounded-full blur-md animate-steam" />
                <div className="w-1.5 h-20 bg-cream-200/30 rounded-full blur-md animate-steam" style={{ animationDelay: '0.8s' }} />
                <div className="w-1.5 h-14 bg-cream-200/35 rounded-full blur-md animate-steam" style={{ animationDelay: '1.5s' }} />
              </div>
              {/* Cup */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-b from-cream-100 to-cream-200 rounded-b-[40px] rounded-t-2xl shadow-2xl relative overflow-hidden">
                {/* Coffee surface */}
                <div className="absolute top-4 left-4 right-4 h-24 bg-gradient-to-b from-coffee-700 to-coffee-900 rounded-2xl">
                  <div className="absolute top-2 left-3 w-16 h-3 bg-cream-100/20 rounded-full blur-sm" />
                </div>
                {/* Logo on cup */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-coffee-500 text-lg font-bold">
                  Кофе & Точка
                </div>
              </div>
              {/* Handle */}
              <div className="absolute top-16 -right-8 w-16 h-24 border-8 border-cream-200 rounded-r-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
