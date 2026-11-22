import { useEffect, useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

interface NavbarProps {
  onReserve: () => void;
}

export default function Navbar({ onReserve }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Меню', href: '#menu' },
    { label: 'О нас', href: '#about' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#"
          className={`flex items-center gap-2 font-display text-xl font-bold transition-colors ${
            scrolled ? 'text-coffee-800' : 'text-cream-50'
          }`}
        >
          <Coffee className="w-6 h-6" />
          Кофе и Точка
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`text-sm font-medium transition-colors hover:text-coffee-400 ${
                scrolled ? 'text-coffee-700' : 'text-cream-100'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={onReserve}
            className="bg-coffee-600 hover:bg-coffee-700 text-cream-50 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coffee-600/30 active:scale-95"
          >
            Забронировать столик
          </button>
        </nav>

        <button
          className={`md:hidden ${scrolled ? 'text-coffee-800' : 'text-cream-50'}`}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-50 border-t border-coffee-100 animate-fade-in">
          <div className="flex flex-col px-5 py-4 gap-3">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left text-coffee-700 font-medium py-2"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onReserve();
              }}
              className="bg-coffee-600 text-cream-50 px-5 py-3 rounded-full text-sm font-semibold mt-2"
            >
              Забронировать столик
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
