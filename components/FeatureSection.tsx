import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
  ctaText: string;
  ctaHref: string;
}

export default function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imageLeft,
  ctaText,
  ctaHref,
}: FeatureSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          imageLeft ? '' : 'lg:grid-flow-col-dense'
        }`}>
          {/* Image */}
          <div className={`relative ${imageLeft ? '' : 'lg:col-start-2'}`}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${imageLeft ? '' : 'lg:col-start-1'}`}>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {description}
            </p>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-black text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-black transition-all duration-300"
              asChild
            >
              <a href={ctaHref} aria-label={`${ctaText} - Learn more about ${title.toLowerCase()}`}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}