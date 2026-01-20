import { useState, useEffect } from 'react';
import { Flame, Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function ScarcitySection() {
  const [stockCount, setStockCount] = useState(47);
  const [viewersCount, setViewersCount] = useState(234);

  useEffect(() => {
    // Simulate stock decreasing
    const stockInterval = setInterval(() => {
      setStockCount((prev) => {
        const newValue = Math.max(15, prev - 1);
        if (newValue === 15) {
          return 47; // Reset
        }
        return newValue;
      });
    }, 45000); // Every 45 seconds

    // Simulate viewers fluctuating
    const viewersInterval = setInterval(() => {
      setViewersCount(Math.floor(Math.random() * (350 - 180) + 180));
    }, 3000); // Every 3 seconds

    return () => {
      clearInterval(stockInterval);
      clearInterval(viewersInterval);
    };
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-white">
            {/* Hot Product */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block mb-3"
              >
                <Flame className="w-10 h-10 mx-auto" />
              </motion.div>
              <p className="text-3xl font-bold mb-2">🔥 HOT</p>
              <p className="text-sm text-white/90">
                Producto más vendido del mes
              </p>
            </motion.div>

            {/* Stock Alert */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <TrendingUp className="w-10 h-10 mx-auto mb-3" />
              <p className="text-3xl font-bold mb-2">
                <motion.span
                  key={stockCount}
                  initial={{ scale: 1.2, color: '#ffff00' }}
                  animate={{ scale: 1, color: '#ffffff' }}
                  transition={{ duration: 0.3 }}
                >
                  {stockCount}
                </motion.span>{' '}
                unidades
              </p>
              <p className="text-sm text-white/90">
                Quedan pocas en stock
              </p>
            </motion.div>

            {/* Live Viewers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <Users className="w-10 h-10 mx-auto mb-3" />
              <p className="text-3xl font-bold mb-2">
                <motion.span
                  key={viewersCount}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {viewersCount}
                </motion.span>{' '}
                personas
              </p>
              <p className="text-sm text-white/90">
                Viendo este producto ahora
              </p>
            </motion.div>
          </div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-white">
              ⚠️ ¡No esperes más! La oferta termina cuando se agote el stock
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
