import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Shield, Zap, Target } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'PROTECCIÓN',
    description: 'Tecnología avanzada de protección',
    image: 'https://images.unsplash.com/photo-1662350689147-3d6c67b7cd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYWRnZXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2ODkyODYwOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Zap,
    title: 'PRECISIÓN',
    description: 'Máxima precisión y rendimiento',
    image: 'https://images.unsplash.com/photo-1762463463919-a76009430ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcHJvZHVjdCUyMGRldGFpbHxlbnwxfHx8fDE3Njg5Mjg2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Target,
    title: 'ERGONOMÍA',
    description: 'Diseño ergonómico y confortable',
    image: 'https://images.unsplash.com/photo-1764831138635-35873bdd671e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwZGV2aWNlfGVufDF8fHx8MTc2ODkyODYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function BentoGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          TECNOLOGÍA DE VANGUARDIA
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl ${
                index === 1 ? 'row-span-2' : ''
              }`}
            >
              <div className="relative h-full min-h-[300px]">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <feature.icon className="w-8 h-8 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-200">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl">
              <div className="relative h-64">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <feature.icon className="w-8 h-8 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-200">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
