import { 
  Zap, 
  Shield, 
  Award, 
  Leaf, 
  Clock, 
  Headphones, 
  Heart,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Zap,
    title: 'Alta Potencia',
    description: 'Rendimiento superior que supera a la competencia',
    color: 'bg-yellow-500',
  },
  {
    icon: Shield,
    title: 'Ultra Seguro',
    description: 'Protección avanzada con certificación internacional',
    color: 'bg-blue-500',
  },
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Materiales de primera calidad, acabado perfecto',
    color: 'bg-purple-500',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sostenible y respetuoso con el medio ambiente',
    color: 'bg-green-500',
  },
  {
    icon: Clock,
    title: 'Larga Duración',
    description: 'Diseñado para durar años con uso intensivo',
    color: 'bg-orange-500',
  },
  {
    icon: Headphones,
    title: 'Soporte 24/7',
    description: 'Asistencia técnica siempre disponible para ti',
    color: 'bg-red-500',
  },
  {
    icon: Heart,
    title: 'Amado por Miles',
    description: '+10,000 clientes satisfechos en todo el mundo',
    color: 'bg-pink-500',
  },
  {
    icon: Globe,
    title: 'Envío Global',
    description: 'Enviamos a más de 50 países con seguimiento',
    color: 'bg-cyan-500',
  },
];

export function BenefitsGridSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por Qué Elegirnos
            </h2>
            <p className="text-lg text-gray-600">
              Más que un producto, una experiencia completa
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                {/* Icon Circle */}
                <div className="relative inline-block mb-4">
                  <div className={`w-20 h-20 ${benefit.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 rotate-6 group-hover:rotate-12`}>
                    <benefit.icon className="w-10 h-10" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
