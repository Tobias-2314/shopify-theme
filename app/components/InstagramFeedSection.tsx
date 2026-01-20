import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1687078426457-89ce2b562eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg5Mjg2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '2.3k',
    comments: '142',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1662350689147-3d6c67b7cd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYWRnZXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2ODkyODYwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '1.8k',
    comments: '98',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1762463463919-a76009430ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcHJvZHVjdCUyMGRldGFpbHxlbnwxfHx8fDE3Njg5Mjg2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '3.1k',
    comments: '203',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1764831138635-35873bdd671e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwZGV2aWNlfGVufDF8fHx8MTc2ODkyODYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '2.7k',
    comments: '156',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1676914333302-53615f404416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwaGVyb3xlbnwxfHx8fDE3Njg5Mjg2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '4.2k',
    comments: '287',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1615494487949-f5f68968330e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3Njg5MzAyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '1.9k',
    comments: '124',
  },
];

export function InstagramFeedSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-10 h-10" />
              <h2 className="text-4xl md:text-5xl font-bold">
                @silkify
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Únete a nuestra comunidad de +50k seguidores
            </p>
            <a
              href="https://instagram.com/silkify"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Seguir en Instagram
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <ImageWithFallback
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <Heart className="w-6 h-6" fill="white" />
                      <span className="font-bold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-bold">{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Instagram icon badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Etiquétanos en tus fotos con{' '}
              <span className="font-bold text-pink-600">#Silkify</span> para
              aparecer aquí
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
