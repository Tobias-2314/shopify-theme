import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function StickyCartBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past hero section (approx 800px)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t-2 border-gray-200 shadow-lg p-4"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500">Precio desde</p>
              <p className="text-xl font-bold">24.99€</p>
            </div>
            
            <button className="flex-1 bg-black text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span>AGREGAR AL CARRITO</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
