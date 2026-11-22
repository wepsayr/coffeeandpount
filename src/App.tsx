import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import ReserveModal from '@/components/ReserveModal';

export default function App() {
  const [reserveOpen, setReserveOpen] = useState(false);

  const openReserve = () => setReserveOpen(true);
  const closeReserve = () => setReserveOpen(false);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar onReserve={openReserve} />
      <Hero onReserve={openReserve} />
      <About />
      <Menu />
      <Gallery />
      <Contacts onReserve={openReserve} />
      <Footer />
      <ReserveModal open={reserveOpen} onClose={closeReserve} />
    </div>
  );
}
