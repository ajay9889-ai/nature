import Link from 'next/link';
import { Camera, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <Camera className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">Monochrome</span>
            </div>
            <p className="mb-6 max-w-md text-gray-300">
              Mastering the timeless art of black and white photography. 
              Creating powerful visual stories through light, shadow, and composition.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Send us an email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="#gallery" className="text-gray-300 hover:text-white transition-colors">Photo Gallery</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Collections</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Photographers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
             Made with ❤️ for photography enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}