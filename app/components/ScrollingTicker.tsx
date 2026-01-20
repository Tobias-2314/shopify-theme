import { motion } from 'motion/react';

const messages = [
  "🚀 Aumento del AOV en un 50%",
  "⚡ Envío GRATIS en pedidos +29€",
  "💎 Oferta limitada - Solo hoy",
  "🎁 +10.000 clientes satisfechos",
  "✨ Garantía de 30 días",
];

export function ScrollingTicker() {
  return (
    <div className="bg-black text-white py-2 overflow-hidden relative">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...messages, ...messages, ...messages].map((message, index) => (
          <span key={index} className="text-sm font-medium">
            {message}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
