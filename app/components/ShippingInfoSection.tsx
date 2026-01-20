import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Truck, Package, Shield, Clock } from 'lucide-react';

export function ShippingInfoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758523670564-d1d6a734dc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHBhY2thZ2UlMjBib3h8ZW58MXx8fHwxNzY4ODkyOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Envío Premium"
                  className="w-full h-auto"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-green-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    <span>ENVÍO GRATIS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Info */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Entrega Rápida y Segura
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Trabajamos con los mejores servicios de mensajería para garantizar 
                que tu pedido llegue rápido y en perfectas condiciones.
              </p>

              {/* Features Grid */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Envío en 24-48h</h3>
                    <p className="text-gray-600 text-sm">
                      Procesamos tu pedido inmediatamente. Recíbelo en 2 días laborables.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <Package className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Seguimiento en Tiempo Real</h3>
                    <p className="text-gray-600 text-sm">
                      Rastrea tu pedido desde nuestro almacén hasta tu puerta.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Empaquetado Premium</h3>
                    <p className="text-gray-600 text-sm">
                      Embalaje de alta calidad para proteger tu producto durante el transporte.
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Map */}
              <div className="mt-8 bg-gray-100 rounded-xl p-6">
                <p className="text-sm font-bold mb-2">Zonas de envío:</p>
                <div className="flex flex-wrap gap-2">
                  {['España', 'Portugal', 'Francia', 'Italia', 'Alemania', 'Reino Unido'].map((country) => (
                    <span key={country} className="bg-white px-3 py-1 rounded-full text-sm font-medium">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
