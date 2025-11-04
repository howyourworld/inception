# How Your World 🌍

A next-generation travel and lifestyle platform with stunning UI/UX inspired by Apple's minimalism and premium SaaS design.

## ✨ Features

- **Hero Section** with floating glass icons and smooth animations
- **Core Modules** with glassmorphic cards (Live, Travel, Connect, Documents)
- **AI Chat Interface** with animated input and suggestions
- **City Archive** with search functionality and detailed city cards
- **Premium Footer** with newsletter signup and social links

## 🎨 Design System

- **Framework**: Next.js 16 + TypeScript
- **Styling**: TailwindCSS with custom configuration
- **Animations**: Framer Motion
- **Typography**: System fonts (SF Pro, Inter)
- **Effects**: Glassmorphism, backdrop blur, gradient overlays, shadow bloom

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Design Elements

- **Glassmorphism**: Frosted glass cards with backdrop blur
- **Smooth Animations**: Entrance animations, hover effects, floating elements
- **Color Palette**: White/neutral backgrounds with blue and purple accents
- **Rounded Corners**: Large border radius (2xl, 3xl, 4xl)
- **Depth Effects**: Layered shadows, glows, and bloom effects
- **Responsive Design**: Mobile-first approach with adaptive layouts

## 📁 Project Structure

```
how-your-world/
├── app/
│   ├── globals.css       # Global styles and utilities
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── HeroSection.tsx   # Hero with floating icons
│   ├── CoreModules.tsx   # Feature cards
│   ├── AIChatSection.tsx # AI chat interface
│   ├── CityArchive.tsx   # City discovery grid
│   └── Footer.tsx        # Footer with links
├── tailwind.config.ts    # Custom theme configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  glass: {
    light: "rgba(255, 255, 255, 0.1)",
    DEFAULT: "rgba(255, 255, 255, 0.05)",
  },
  // Add your custom colors
}
```

### Animations

Custom animations are defined in `tailwind.config.ts`:

- `float` - Gentle floating motion
- `fade-in` - Fade in effect
- `slide-up` - Slide up with fade
- `pulse-glow` - Glowing pulse effect

## 🌟 Performance

- Optimized animations with `framer-motion`
- Lazy loading with viewport detection
- Smooth 60fps transitions
- Minimal bundle size

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Dark Mode

The site supports system-level dark mode preference automatically.

---

**Made with ♥ for explorers**
