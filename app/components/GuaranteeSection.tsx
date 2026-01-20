import { Shield, RefreshCw, Lock, Award } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#8A84CF' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Seal */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-12 h-12 md:w-16 md:h-16 text-yellow-900 mx-auto mb-1" />
                  <p className="text-xs md:text-sm font-bold text-yellow-900">30 DÍAS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            GARANTÍA DE SATISFACCIÓN
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Si no estás 100% satisfecho con tu compra, te devolvemos tu dinero. 
            Sin preguntas. Sin complicaciones.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <RefreshCw className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Devolución Fácil</h3>
              <p className="text-sm text-white/80">
                Proceso de devolución simple y rápido
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Lock className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Pago Seguro</h3>
              <p className="text-sm text-white/80">
                Transacciones 100% protegidas
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Shield className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Soporte 24/7</h3>
              <p className="text-sm text-white/80">
                Siempre aquí para ayudarte
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
