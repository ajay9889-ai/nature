# Monochrome - High-Performance Black & White Photography Homepage

A production-ready, performance-optimized black and white photography homepage built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates modern web development best practices with a focus on Core Web Vitals optimization, accessibility, and sophisticated monochrome design.

## 🚀 Features

- **Responsive Hero Section** with black & white background video (desktop) and optimized static image (mobile)
- **Two Feature Sections** showcasing monochrome photography with alternating layouts
- **Interactive Monochrome Gallery** with category filtering and lazy loading
- **Fully Accessible** footer with social links and navigation
- **Performance Optimized** to exceed Core Web Vitals requirements
- **Sophisticated Black & White Theme** with elegant typography and spacing
- **Mobile-First Responsive Design** with intelligent video-to-image switching

## 📊 Performance Optimizations

### Core Web Vitals Targets Met:
- **LCP (Largest Contentful Paint)**: < 2.5s ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅  
- **INP (Interaction to Next Paint)**: < 200ms ✅
- **TTFB (Time to First Byte)**: < 800ms ✅

### Optimization Techniques Implemented:

#### Image Optimization
- Next.js `Image` component with automatic WebP conversion
- Responsive images with proper `sizes` attribute
- Lazy loading for gallery images
- Optimized dimensions and compression from Pexels

#### Video Optimization
- High-quality monochrome background video optimized for web
- Intelligent automatic fallback to static image on mobile devices
- Proper video attributes (`autoPlay`, `muted`, `loop`, `playsInline`)
- Optimized poster image for seamless loading states

#### Font Loading
- Inter font with `display: swap` for optimal loading
- Preloaded font files to prevent layout shift
- Proper font fallbacks defined

#### Bundle Optimization
- Component-based architecture for code splitting
- Dynamic imports ready for future enhancements
- Minimal JavaScript bundle size
- Tree-shaking enabled

#### Accessibility (WCAG 2.1 AA)
- Semantic HTML5 structure
- Proper ARIA labels and descriptions
- High contrast black and white color scheme
- Keyboard navigation support
- Enhanced readability with monochrome design
- Screen reader optimized content

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom black & white theme
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: next/image
- **Font Loading**: next/font

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Homepage component
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── HeroSection.tsx  # Hero with video/image switching
│   ├── FeatureSection.tsx # Monochrome feature sections
│   ├── PhotoGallery.tsx # Black & white gallery with filtering
│   └── Footer.tsx       # Footer with social links
└── lib/
    └── utils.ts         # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
cd monochrome-homepage
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Responsive Design

- **Mobile First**: Intelligent video-to-image switching for optimal mobile performance
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px  
  - Desktop: 1024px+
- **Fluid Layout**: Seamless transitions with black & white aesthetic
- **Touch Optimized**: Proper touch targets and gestures

## ♿ Accessibility Features

- Semantic HTML5 structure with proper landmarks
- Enhanced contrast with black and white color scheme
- ARIA labels and descriptions for interactive elements
- Keyboard navigation support throughout
- Superior contrast ratios with monochrome design
- Screen reader optimized content structure
- Focus management and visible focus indicators

## 🎯 Performance Monitoring

Run Lighthouse audit:
\`\`\`bash
npm run build
npx lighthouse http://localhost:3000 --view
\`\`\`

## 🔧 Customization

### Adding New Sections
Create new components in `/components/` and import them into `app/page.tsx`

### Updating Gallery Images
Modify the `galleryImages` array in `components/PhotoGallery.tsx` with black & white photography URLs

### Styling Changes
Update Tailwind classes or modify CSS variables in `app/globals.css` for theme customization

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ for the timeless art of black and white photography.# nature
