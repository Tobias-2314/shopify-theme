import { motion } from 'motion/react';

const logos = [
  { name: 'TechCrunch', text: 'TechCrunch' },
  { name: 'Forbes', text: 'FORBES' },
  { name: 'Wired', text: 'WIRED' },
  { name: 'CNN', text: 'CNN' },
  { name: 'The Verge', text: 'The Verge' },
  { name: 'Bloomberg', text: 'Bloomberg' },
];

export function AsSeenOnSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-2">
              Destacado en
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
                  {logo.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
