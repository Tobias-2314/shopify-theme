import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface BundleOption {
  id: string;
  quantity: number;
  label: string;
  originalPrice: number;
  packPrice: number;
  pricePerUnit: number;
  discount: number;
  badge?: string;
  badgeColor?: string;
}

const bundles: BundleOption[] = [
  {
    id: '1',
    quantity: 1,
    label: '1 Unidad',
    originalPrice: 39.99,
    packPrice: 39.99,
    pricePerUnit: 39.99,
    discount: 0,
  },
  {
    id: '2',
    quantity: 2,
    label: '2 Unidades',
    originalPrice: 79.98,
    packPrice: 59.99,
    pricePerUnit: 29.99,
    discount: 25,
    badge: 'MÁS POPULAR',
    badgeColor: 'bg-blue-600',
  },
  {
    id: '3',
    quantity: 3,
    label: '3 Unidades',
    originalPrice: 119.97,
    packPrice: 74.99,
    pricePerUnit: 24.99,
    discount: 37,
    badge: 'MEJOR VALOR',
    badgeColor: 'bg-green-600',
  },
];

interface Upsell {
  id: string;
  title: string;
  description: string;
  price: number;
}

const upsells: Upsell[] = [
  {
    id: 'ebook',
    title: 'E-book Exclusivo',
    description: 'Guía completa de uso y mantenimiento',
    price: 0,
  },
  {
    id: 'guide',
    title: 'Guía de Estilo Premium',
    description: 'Tips y trucos de expertos',
    price: 0,
  },
];

export function BundleSelector() {
  const [selectedBundle, setSelectedBundle] = useState('2');
  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([]);

  const currentBundle = bundles.find(b => b.id === selectedBundle)!;

  const toggleUpsell = (upsellId: string) => {
    setSelectedUpsells(prev =>
      prev.includes(upsellId)
        ? prev.filter(id => id !== upsellId)
        : [...prev, upsellId]
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Bundle Options */}
      <div className="space-y-3 mb-6">
        {bundles.map((bundle) => (
          <motion.div
            key={bundle.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedBundle(bundle.id)}
            className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
              selectedBundle === bundle.id
                ? 'border-black bg-gray-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {/* Badge */}
            {bundle.badge && (
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 ${bundle.badgeColor} text-white px-4 py-1 rounded-full text-xs font-bold`}
              >
                {bundle.badge}
              </div>
            )}

            <div className="flex items-center gap-4">
              {/* Radio Button */}
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedBundle === bundle.id
                    ? 'border-black bg-black'
                    : 'border-gray-300'
                }`}
              >
                {selectedBundle === bundle.id && (
                  <div className="w-3 h-3 bg-white rounded-full" />
                )}
              </div>

              {/* Bundle Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg">{bundle.label}</h3>
                  {bundle.discount > 0 && (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">
                      AHORRA {bundle.discount}%
                    </span>
                  )}
                </div>
                {bundle.discount > 0 && (
                  <p className="text-sm text-gray-600">
                    {bundle.pricePerUnit.toFixed(2)}€ por unidad
                  </p>
                )}
              </div>

              {/* Pricing */}
              <div className="text-right">
                {bundle.discount > 0 && (
                  <p className="text-sm text-gray-400 line-through">
                    {bundle.originalPrice.toFixed(2)}€
                  </p>
                )}
                <p className="text-2xl font-bold">
                  {bundle.packPrice.toFixed(2)}€
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upsells */}
      <div className="space-y-3 mb-6">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          Añade valor a tu pedido
        </h3>
        {upsells.map((upsell) => (
          <div
            key={upsell.id}
            onClick={() => toggleUpsell(upsell.id)}
            className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
              selectedUpsells.includes(upsell.id)
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Checkbox */}
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                  selectedUpsells.includes(upsell.id)
                    ? 'border-green-500 bg-green-500'
                    : 'border-gray-300'
                }`}
              >
                {selectedUpsells.includes(upsell.id) && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Upsell Info */}
              <div className="flex-1">
                <h4 className="font-bold">{upsell.title}</h4>
                <p className="text-sm text-gray-600">{upsell.description}</p>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">
                  {upsell.price === 0 ? 'GRATIS' : `${upsell.price.toFixed(2)}€`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-black text-white py-5 rounded-xl font-bold text-lg relative overflow-hidden group"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <span className="relative z-10">
          AGREGAR AL CARRITO - {currentBundle.packPrice.toFixed(2)}€
        </span>
      </motion.button>

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-600" />
          <span>Envío Gratis</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-600" />
          <span>Pago Seguro</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-600" />
          <span>30 Días Garantía</span>
        </div>
      </div>
    </div>
  );
}
