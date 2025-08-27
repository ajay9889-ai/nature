'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video for Desktop */}
      {!isMobile && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          aria-hidden="true"
        >
          <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      )}

      {/* Background Image for Mobile */}
      {isMobile && (
        <Image
          src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
          alt="Black and white architectural composition"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              The Art of
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Monochrome
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-gray-100 sm:text-xl lg:text-2xl">
              Experience the timeless elegance of black and white photography. 
              Where light meets shadow, and every frame tells a powerful story.
            </p>
            
            <Button 
              size="lg"
              className="group bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all duration-300"
              aria-label="Start exploring our monochrome photography collection"
            >
              Start Exploring
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}