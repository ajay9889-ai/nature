import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <FeatureSection
        title="Timeless Monochrome Art"
        description="Discover the profound beauty of black and white photography. Each carefully composed image strips away color to reveal the essential elements of light, shadow, and form that define truly powerful visual storytelling."
        imageSrc="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        imageAlt="Black and white mountain landscape with dramatic clouds"
        imageLeft={true}
        ctaText="Explore Collection"
        ctaHref="#gallery"
      />
      
      <FeatureSection
        title="Artistic Excellence"
        description="Our master photographers specialize in the timeless art of monochrome imagery. Through careful composition and expert understanding of light, we create photographs that transcend the ordinary and capture the soul of each moment."
        imageSrc="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        imageAlt="Black and white architectural photography showing geometric patterns"
        imageLeft={false}
        ctaText="View Portfolio"
        ctaHref="#about"
      />
      
      <PhotoGallery />
      <Footer />
    </main>
  );
}