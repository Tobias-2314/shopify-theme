import { useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX, e.currentTarget);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX, e.currentTarget);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Resultados Reales, Impacto Inmediato
            </h2>
            <p className="text-lg text-gray-600">
              Descubre la diferencia que marca nuestro producto
            </p>
          </div>

          {/* Before/After Slider */}
          <div
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (Right) */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1687078426457-89ce2b562eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg5Mjg2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Después"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                DESPUÉS
              </div>
            </div>

            {/* Before Image (Left) - Clipped */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763472051866-2e627b1800ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc2ODg2NTAxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Antes"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                ANTES
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Draggable Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <p className="text-4xl font-bold text-green-600 mb-2">+87%</p>
              <p className="text-gray-700">Mejora en rendimiento</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <p className="text-4xl font-bold text-blue-600 mb-2">24h</p>
              <p className="text-gray-700">Resultados visibles</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <p className="text-4xl font-bold text-purple-600 mb-2">100%</p>
              <p className="text-gray-700">Satisfacción garantizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
