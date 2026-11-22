import { useState } from 'react';
import { Coffee, Croissant, IceCream, Cookie } from 'lucide-react';

type Category = 'coffee' | 'drinks' | 'bakery' | 'desserts';

const menu: Record<Category, { name: string; desc: string; price: string }[]> = {
  coffee: [
    { name: 'Эспрессо', desc: 'Классический шот из зёрен эфиопской обжарки', price: '180 ₽' },
    { name: 'Капучино', desc: 'Бархатная молочная пена и авторский бленд', price: '240 ₽' },
    { name: 'Флэт уайт', desc: 'Двойной эспрессо, тонкий слой микропены', price: '260 ₽' },
    { name: 'Раф-кофе', desc: 'Сливочный раф на топлёном молоке', price: '280 ₽' },
    { name: 'Латте', desc: 'Мягкий кофе с воздушной пенкой', price: '250 ₽' },
    { name: 'Фильтр-кофе V60', desc: 'Альтернативная заварка, чистый вкус зерна', price: '300 ₽' },
  ],
  drinks: [
    { name: 'Матча-латте', desc: 'Японская матча на тёплом молоке', price: '320 ₽' },
    { name: 'Какао на миндальном', desc: 'Бельгийский шоколад с миндальным молоком', price: '290 ₽' },
    { name: 'Чай масала', desc: 'Индийский пряный чай со специями', price: '260 ₽' },
    { name: 'Клюквенный боул', desc: 'Холодный напиток с ягодами и имбирём', price: '240 ₽' },
  ],
  bakery: [
    { name: 'Круассан классический', desc: 'Слоёное масло, французская мука, 36 часов расстойки', price: '220 ₽' },
    { name: 'Бриошь с корицей', desc: 'Воздушная бриошь с корично-сахарной начинкой', price: '250 ₽' },
    { name: 'Чизкейк Нью-Йорк', desc: 'Классический чизкейк на песочной основе', price: '340 ₽' },
    { name: 'Морковный торт', desc: 'Влажный бисквит с кремом-чиз и орехами', price: '320 ₽' },
  ],
  desserts: [
    { name: 'Тирамису', desc: 'Савоярди, маскарпоне и наш эспрессо', price: '360 ₽' },
    { name: 'Эклер шоколадный', desc: 'Заварное тесто, заварной крем, тёмная глазурь', price: '280 ₽' },
    { name: 'Тарт с ягодами', desc: 'Песочная основа, заварной крем, свежие ягоды', price: '310 ₽' },
    { name: 'Брауни', desc: 'Тёмный шоколад, фундук, мороженое на гарнир', price: '300 ₽' },
  ],
};

const categories: { key: Category; label: string; icon: typeof Coffee }[] = [
  { key: 'coffee', label: 'Кофе', icon: Coffee },
  { key: 'drinks', label: 'Напитки', icon: IceCream },
  { key: 'bakery', label: 'Выпечка', icon: Croissant },
  { key: 'desserts', label: 'Десерты', icon: Cookie },
];

export default function Menu() {
  const [active, setActive] = useState<Category>('coffee');

  return (
    <section id="menu" className="py-24 sm:py-32 bg-coffee-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,rgba(201,168,125,0.4),transparent_50%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_80%,rgba(176,136,85,0.3),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-coffee-400 tracking-[0.2em] uppercase text-sm font-semibold mb-4">
            Наше меню
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-4">
            Выбирайте своё настроение
          </h2>
          <p className="text-cream-100/60 text-lg max-w-xl mx-auto">
            Каждая позиция готовится вручную из свежих ингредиентов
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === cat.key
                  ? 'bg-coffee-400 text-coffee-900 shadow-lg'
                  : 'bg-coffee-800/50 text-cream-100/70 hover:bg-coffee-800 hover:text-cream-50'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid md:grid-cols-2 gap-5 animate-fade-in" key={active}>
          {menu[active].map((item, i) => (
            <div
              key={item.name}
              className="group bg-coffee-800/40 hover:bg-coffee-800/60 border border-coffee-700/50 rounded-2xl p-6 transition-all hover:border-coffee-400/40"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-cream-50 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-cream-100/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-coffee-300 font-display text-lg font-bold whitespace-nowrap">
                    {item.price}
                  </span>
                  <div className="w-8 h-0.5 bg-coffee-400/60 mt-2 group-hover:w-12 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
