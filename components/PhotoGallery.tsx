'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    alt: "Dramatic black and white mountain landscape",
    category: "Landscapes"
  },
  {
    src: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Geometric architectural patterns in monochrome",
    category: "Architecture"
  },
  {
    src: "https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Minimalist black and white composition",
    category: "Abstract"
  },
  {
    src: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    alt: "Black and white portrait with dramatic lighting",
    category: "Portraits"
  },
  {
    src: "https://images.pexels.com/photos/1366974/pexels-photo-1366974.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Urban street photography in monochrome",
    category: "Street"
  },
  {
    src: "https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Fine art black and white nature study",
    category: "Fine Art"
  },
  {
    src: "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    alt: "Textural monochrome close-up study",
    category: "Textures"
  },
  {
    src: "https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Dramatic black and white cloudscape",
    category: "Landscapes"
  }
];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Monochrome Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our curated collection of timeless black and white photography
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-black hover:bg-gray-800" 
                : "border-black text-black hover:bg-black hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium">{image.category}</p>
                <p className="text-xs">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white"
          >
            Load More Photos
          </Button>
        </div>
      </div>
    </section>
  );
}