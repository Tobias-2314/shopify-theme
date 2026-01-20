import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const specifications = [
  {
    category: 'Dimensiones',
    specs: [
      { label: 'Peso', value: '250g' },
      { label: 'Tamaño', value: '15 x 8 x 3 cm' },
      { label: 'Material', value: 'Aleación de aluminio premium' },
    ],
  },
  {
    category: 'Rendimiento',
    specs: [
      { label: 'Potencia', value: '45W de alta velocidad' },
      { label: 'Batería', value: 'Hasta 12h de uso continuo' },
      { label: 'Carga', value: 'USB-C rápida (2h completa)' },
    ],
  },
  {
    category: 'Conectividad',
    specs: [
      { label: 'Bluetooth', value: '5.3 última generación' },
      { label: 'Alcance', value: 'Hasta 30 metros' },
      { label: 'Compatible', value: 'iOS, Android, Windows' },
    ],
  },
  {
    category: 'Extras',
    specs: [
      { label: 'Certificaciones', value: 'CE, FCC, RoHS' },
      { label: 'Garantía', value: '2 años del fabricante' },
      { label: 'Incluye', value: 'Cable USB-C, Manual, Funda' },
    ],
  },
];

const features = [
  'Tecnología de protección inteligente',
  'Diseño ergonómico antideslizante',
  'Resistente al agua IPX6',
  'Modo silencioso para uso nocturno',
  'LED indicador de estado',
  'Control táctil de precisión',
  'Sistema de ventilación optimizado',
  'Compatible con accesorios universales',
];

export function SpecificationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Especificaciones Técnicas
            </h2>
            <p className="text-lg text-gray-600">
              Tecnología de vanguardia en cada detalle
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Specs Table */}
            <div className="space-y-6">
              {specifications.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-4 border-b pb-2">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.specs.map((spec, specIndex) => (
                      <div
                        key={specIndex}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-bold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Features List */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white h-full"
              >
                <h3 className="text-2xl font-bold mb-6">
                  Características Destacadas
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-white/95">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom Badge */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm">Calidad Certificada</p>
                      <p className="font-bold text-lg">100% Premium</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">Garantía</p>
                      <p className="font-bold text-lg">2 Años</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
