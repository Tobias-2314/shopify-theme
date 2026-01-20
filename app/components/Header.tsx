import { useState, useEffect } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { PriceDropTimer } from './PriceDropTimer';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Menu className="w-6 h-6 md:hidden mr-4" />
            <h1 className="text-2xl font-bold">SILKIFY</h1>
          </div>

          {/* Center - Timer (hidden on mobile) */}
          <div className="hidden md:block">
            <PriceDropTimer />
          </div>

          {/* Right - Cart */}
          <div className="flex items-center gap-4">
            <button className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Timer */}
        <div className="md:hidden pb-3 flex justify-center">
          <PriceDropTimer />
        </div>
      </div>
    </header>
  );
}
