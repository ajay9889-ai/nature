import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Monochrome - Timeless Black & White Photography',
  description: 'Experience the power of monochrome photography. Discover stunning black and white landscapes and artistic compositions.',
  keywords: ['black and white', 'monochrome', 'photography', 'landscapes', 'artistic', 'minimalist'],
  authors: [{ name: 'Monochrome Studio' }],
  openGraph: {
    title: 'Monochrome - Timeless Black & White Photography',
    description: 'Experience the power of monochrome photography. Discover stunning black and white landscapes and artistic compositions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monochrome - Timeless Black & White Photography',
    description: 'Experience the power of monochrome photography. Discover stunning black and white landscapes and artistic compositions.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}