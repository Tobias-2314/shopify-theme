import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: '¿Cuánto tarda el envío?',
    answer: 'Realizamos envíos en 24-48 horas laborables. Una vez enviado, recibirás un número de seguimiento para rastrear tu pedido en tiempo real. La entrega suele tardar entre 3-5 días laborables.',
  },
  {
    question: '¿Qué incluye la garantía de 30 días?',
    answer: 'Si no estás 100% satisfecho con tu compra, puedes devolver el producto dentro de los 30 días posteriores a la recepción y te reembolsaremos el importe completo. Sin preguntas, sin complicaciones.',
  },
  {
    question: '¿Es compatible con todos los dispositivos?',
    answer: 'Sí, nuestro producto es universalmente compatible y funciona perfectamente con la mayoría de dispositivos del mercado. Incluye todos los adaptadores necesarios en el paquete.',
  },
  {
    question: '¿Cuál es la diferencia entre los packs?',
    answer: 'La única diferencia es la cantidad y el precio por unidad. Al comprar más unidades, obtienes un mayor descuento. El pack de 3 unidades ofrece el mejor valor con un 37% de ahorro.',
  },
  {
    question: '¿Cómo sé que mi pago es seguro?',
    answer: 'Utilizamos encriptación SSL de 256 bits y procesadores de pago certificados PCI-DSS. Tu información financiera está completamente protegida y nunca almacenamos datos de tarjetas.',
  },
  {
    question: '¿Puedo cambiar o cancelar mi pedido?',
    answer: 'Sí, puedes modificar o cancelar tu pedido contactándonos dentro de las primeras 2 horas después de realizar la compra. Después de ese tiempo, el pedido entra en proceso de preparación.',
  },
  {
    question: '¿Ofrecen soporte técnico?',
    answer: 'Por supuesto. Nuestro equipo de soporte está disponible 24/7 por email y chat en vivo. También incluimos manuales detallados y guías en video para ayudarte a sacar el máximo provecho de tu producto.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay y transferencia bancaria.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que necesitas saber sobre nuestro producto
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl overflow-hidden transition-all hover:border-gray-300"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
            <h3 className="font-bold text-xl mb-2">¿Tienes más preguntas?</h3>
            <p className="text-gray-600 mb-4">
              Nuestro equipo está aquí para ayudarte
            </p>
            <a
              href="mailto:info@silkify.com"
              className="inline-block bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
            >
              Contactar Soporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
