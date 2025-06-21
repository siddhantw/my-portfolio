# Siddhant Wadhwani - Portfolio Website

A modern, responsive portfolio website for Siddhant Wadhwani, Engineering Manager - SDET at Newfold Digital. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring smooth animations, dark mode support, and comprehensive SEO optimization.

## 🚀 About

This portfolio showcases the professional journey of Siddhant Wadhwani, a quality engineering leader with 10+ years of experience. The website highlights his expertise in test automation, engineering leadership, global speaking engagements, and professional achievements including being a BrowserStack Champion and LinkedIn Top Voice.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations using Framer Motion
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark Mode Support**: System-aware theme switching with next-themes
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **Performance Focused**: Optimized images, bundle splitting, and fast loading times
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA attributes
- **Multi-page Navigation**: Dedicated sections for About, Skills, Portfolio, Services, Speaking, Testimonials, Certifications, and Contact

### Key Sections

- **Home**: Hero section with professional summary and quick stats
- **About**: Detailed professional background and achievements
- **Skills**: Technical expertise and competencies
- **Portfolio**: Showcase of projects and contributions
- **Services**: Professional services offered (mentorship, consulting, speaking)
- **Speaking**: Global tech talks and conference presentations
- **Testimonials**: Client and colleague recommendations
- **Certifications**: Professional certifications and achievements
- **Contact**: Multiple ways to get in touch

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Modern React with latest features
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library for smooth interactions
- **Lucide React** - Beautiful, customizable icons
- **React Icons** - Popular icon library
- **class-variance-authority** - Type-safe component variants
- **clsx & tailwind-merge** - Conditional class handling

### Core Features
- **next-themes** - Dark/light mode with system preference
- **react-intersection-observer** - Scroll-triggered animations
- **Sharp** - Optimized image processing

### Development Tools
- **ESLint** - Code linting with Next.js config
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Performance & SEO
- **next-sitemap** - Automatic sitemap generation
- **@next/bundle-analyzer** - Bundle size analysis
- **@next/third-parties** - Third-party script optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/siddhantwadhwani/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── certifications/    # Certifications page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── skills/            # Skills page
│   ├── speaking/          # Speaking page
│   ├── testimonials/      # Testimonials page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Sitemap generation
├── components/            # Reusable components
│   ├── ui/               # UI components and animations
│   ├── footer.tsx        # Site footer
│   ├── navigation.tsx    # Main navigation
│   └── theme-provider.tsx # Theme context provider
├── lib/                  # Utility functions
│   └── utils.ts          # Helper utilities
└── types/                # TypeScript type definitions
    └── index.ts          # Global type definitions

public/                   # Static assets
├── images/              # Image assets
├── projects/            # Project-related assets
├── testimonials/        # Testimonial assets
├── profile-photo.jpg    # Main profile photo
├── og-image.jpg         # Open Graph image
├── manifest.json        # PWA manifest
└── robots.txt           # Search engine directives
```

## 🎨 Customization

### Theme Configuration
The project uses a custom theme system with CSS variables for easy customization. Modify `globals.css` for color schemes and design tokens.

### Content Updates
- Update personal information in `src/app/layout.tsx` metadata
- Modify hero content in `src/app/page.tsx`
- Add/edit sections by creating new pages in the `app` directory

### Styling
- Tailwind CSS configuration in `postcss.config.mjs`
- Custom animations defined in `src/components/ui/animations.tsx`
- Component variants using class-variance-authority

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any required environment variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://siddhantwadhwani.com
```

### SEO & Metadata
Comprehensive SEO configuration is set up in `layout.tsx` including:
- Open Graph tags
- Twitter Card metadata
- Structured data (JSON-LD)
- Meta descriptions and keywords

## 📱 Progressive Web App

The site includes PWA capabilities with:
- Web App Manifest (`manifest.json`)
- Service Worker (when enabled)
- Offline support
- Install prompts

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

### Other Platforms
The project can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Performance

The website is optimized for performance with:
- Image optimization using Next.js Image component
- Bundle splitting and code optimization
- Lazy loading for components and images
- Efficient caching strategies
- Minimal JavaScript bundle size

## 🔗 Links

- **Live Website**: [siddhantwadhwani.com](https://siddhantwadhwani.com)
- **LinkedIn**: [linkedin.com/in/siddhantwadhwani](https://linkedin.com/in/siddhantwadhwani)
- **GitHub**: [github.com/siddhantwadhwani](https://github.com/siddhantwadhwani)
- **YouTube**: [youtube.com/@siddhantwadhwani](https://youtube.com/@siddhantwadhwani)

## 📧 Contact

- **Email**: hello@siddhantwadhwani.com
- **Phone**: +91-7021158300
- **Location**: Mumbai, Maharashtra, India

## 📄 License

This project is for personal portfolio use. Feel free to use it as inspiration for your own portfolio, but please don't directly copy the content.

---

Built with ❤️ by [Siddhant Wadhwani](https://siddhantwadhwani.com)
