const tiles = [
  { label: 'Интерьер', sub: 'Уютные столики у окна', gradient: 'from-coffee-800 via-coffee-600 to-coffee-400' },
  { label: 'Бар', sub: 'Где рождается ваш кофе', gradient: 'from-coffee-900 via-coffee-700 to-coffee-500' },
  { label: 'Зёрна', sub: 'Свежая обжарка', gradient: 'from-coffee-700 via-coffee-500 to-coffee-300' },
  { label: 'Латте-арт', sub: 'Каждый кофе — произведение', gradient: 'from-coffee-600 via-coffee-400 to-cream-200' },
  { label: 'Утро', sub: 'Лучшее начало дня', gradient: 'from-coffee-800 via-coffee-500 to-coffee-200' },
  { label: 'Десерты', sub: 'К кофе и не только', gradient: 'from-coffee-700 via-coffee-400 to-cream-100' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-coffee-500 tracking-[0.2em] uppercase text-sm font-semibold mb-4">
            Галерея
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-coffee-900">
            Атмосфера нашей кофейни
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {tiles.map((tile, i) => (
            <div
              key={tile.label}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[420px]' : 'min-h-[160px] sm:min-h-[200px]'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} transition-transform duration-700 group-hover:scale-110`} />
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-cream-50 text-lg sm:text-xl font-bold mb-1">
                  {tile.label}
                </h3>
                <p className="text-cream-100/70 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {tile.sub}
                </p>
              </div>
              {/* Decorative cup accent */}
              {i === 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                  <div className="w-24 h-24 border-4 border-cream-50/30 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
