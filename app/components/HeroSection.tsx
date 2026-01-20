import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { BundleSelector } from './BundleSelector';
import { Star, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 md:pt-40 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - Product Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Badge */}
              <div className="absolute -top-4 -left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
                -37% HOY
              </div>

              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1676914333302-53615f404416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwaGVyb3xlbnwxfHx8fDE3Njg5Mjg2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Producto Premium"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <div>
                    <p className="font-bold">4.9/5</p>
                    <p className="text-xs text-gray-500">10k+ reviews</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-bold">+50% AOV</p>
                    <p className="text-xs text-gray-500">Conversión</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Product Info & Bundle Selector */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                🔥 BESTSELLER 2026
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Tecnología Premium
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Al Mejor Precio
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Eleva tu experiencia con tecnología de vanguardia. 
                Diseño elegante, calidad superior y resultados garantizados.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="font-medium">En Stock</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-medium">Envío 24-48h</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="font-medium">+500 vendidos hoy</span>
                </div>
              </div>
            </div>

            {/* Bundle Selector */}
            <BundleSelector />
          </div>
        </div>
      </div>
    </section>
  );
}
