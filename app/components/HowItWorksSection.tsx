import { Package, Truck, Smile, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: Package,
    title: 'Elige tu Pack',
    description: 'Selecciona la cantidad que necesitas y aprovecha nuestros descuentos por volumen.',
    color: 'bg-blue-500',
  },
  {
    icon: Truck,
    title: 'Envío Rápido',
    description: 'Recibe tu pedido en 24-48h con seguimiento en tiempo real y envío gratis.',
    color: 'bg-green-500',
  },
  {
    icon: Smile,
    title: 'Disfruta',
    description: 'Experimenta la diferencia con garantía de satisfacción de 30 días.',
    color: 'bg-purple-500',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cómo Funciona
            </h2>
            <p className="text-lg text-gray-600">
              Simple, rápido y sin complicaciones
            </p>
          </div>

          {/* Steps - Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines */}
            <div className="absolute top-16 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg relative z-10`}>
                  {index + 1}
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <step.icon className="w-12 h-12 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Steps - Mobile */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3`}>
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-16 flex justify-center">
                      <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 mt-4" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="mb-3">
                    <step.icon className="w-10 h-10 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-800 transition-colors"
            >
              Empezar Ahora
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
