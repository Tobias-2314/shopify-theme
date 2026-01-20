import { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  time: string;
  comment: string;
  verified: boolean;
}

const allReviews: Review[] = [
  {
    id: '1',
    name: 'María González',
    avatar: 'MG',
    rating: 5,
    time: 'hace 2h',
    comment: '¡Increíble! La calidad superó mis expectativas. Llegó antes de lo esperado y el empaquetado era premium. Totalmente recomendado.',
    verified: true,
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    avatar: 'CR',
    rating: 5,
    time: 'hace 5h',
    comment: 'Excelente producto. La tecnología realmente funciona como prometido. Vale cada euro.',
    verified: true,
  },
  {
    id: '3',
    name: 'Ana Martínez',
    avatar: 'AM',
    rating: 5,
    time: 'hace 10h',
    comment: 'Compré el pack de 2 unidades y fue la mejor decisión. El descuento es real y la calidad impecable.',
    verified: true,
  },
  {
    id: '4',
    name: 'Javier López',
    avatar: 'JL',
    rating: 5,
    time: 'hace 1d',
    comment: 'Ya es mi tercera compra. Regalo perfecto y siempre llega en perfectas condiciones.',
    verified: true,
  },
  {
    id: '5',
    name: 'Laura Sánchez',
    avatar: 'LS',
    rating: 5,
    time: 'hace 1d',
    comment: 'Atención al cliente de 10. Tuve una consulta y me respondieron en minutos. El producto es maravilloso.',
    verified: true,
  },
  {
    id: '6',
    name: 'Miguel Torres',
    avatar: 'MT',
    rating: 5,
    time: 'hace 2d',
    comment: 'Calidad premium a precio justo. La garantía de 30 días da mucha confianza.',
    verified: true,
  },
  {
    id: '7',
    name: 'Isabel Ruiz',
    avatar: 'IR',
    rating: 5,
    time: 'hace 2d',
    comment: 'Superó todas mis expectativas. El diseño es elegante y funcional. 100% satisfecha.',
    verified: true,
  },
  {
    id: '8',
    name: 'David Moreno',
    avatar: 'DM',
    rating: 5,
    time: 'hace 3d',
    comment: 'Mejor que en las fotos. La inversión vale totalmente la pena.',
    verified: true,
  },
  {
    id: '9',
    name: 'Carmen Jiménez',
    avatar: 'CJ',
    rating: 5,
    time: 'hace 3d',
    comment: 'Lo uso diariamente desde que llegó. Durabilidad excelente y muy fácil de usar.',
    verified: true,
  },
];

const avatarColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-yellow-500',
  'bg-red-500',
  'bg-indigo-500',
  'bg-teal-500',
];

export function ReviewsGrid() {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleReviews = allReviews.slice(0, visibleCount);
  const hasMore = visibleCount < allReviews.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, allReviews.length));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen de nosotros
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600">
            4.9/5 basado en +10,000 reseñas verificadas
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {visibleReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full ${
                    avatarColors[index % avatarColors.length]
                  } flex items-center justify-center text-white font-bold`}
                >
                  {review.avatar}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">{review.name}</h4>
                    <span className="text-xs text-gray-500">{review.time}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm mb-3">{review.comment}</p>

              {/* Verified Badge */}
              {review.verified && (
                <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Compra verificada</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
            >
              Cargar más reseñas
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
