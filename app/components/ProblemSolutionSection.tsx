import { X, Check } from 'lucide-react';
import { motion } from 'motion/react';

const problems = [
  'Productos de baja calidad que se rompen rápidamente',
  'Precios excesivos sin justificación',
  'Entregas lentas y sin seguimiento',
  'Sin garantía ni soporte post-venta',
  'Resultados que no cumplen las expectativas',
];

const solutions = [
  'Materiales premium con certificación de calidad',
  'Precio justo con descuentos por volumen',
  'Envío gratis en 24-48h con seguimiento',
  'Garantía de 30 días + soporte 24/7',
  'Resultados comprobados por +10.000 clientes',
];

export function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              La Diferencia Silkify
            </h2>
            <p className="text-lg text-gray-600">
              No más productos mediocres. Es hora de elegir calidad.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems (Left) */}
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <X className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-900">
                  Otras Marcas
                </h3>
              </div>

              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Solutions (Right) */}
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 relative">
              {/* Badge */}
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                ✨ ESTO ES SILKIFY
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">
                  Silkify
                </h3>
              </div>

              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-green-700 hover:to-green-600 transition-all"
            >
              Pruébalo Sin Riesgo - 30 Días Garantía
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
