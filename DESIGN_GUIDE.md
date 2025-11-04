# How Your World - Design Guide

## 🎨 Visual Design System

### Color Palette

**Primary Colors**
- Blue: `#0ea5e9` (Blue-500) - Primary accent
- Purple: `#9333ea` - Secondary accent
- White: `#ffffff` - Background light mode
- Dark: `#0a0a0a` - Background dark mode

**Glass Effects**
- Light glass: `rgba(255, 255, 255, 0.1)`
- Default glass: `rgba(255, 255, 255, 0.05)`
- Dark glass: `rgba(0, 0, 0, 0.1)`

### Typography

**Font Family**
- Primary: -apple-system, SF Pro Display, Inter
- Weight: 400 (regular), 500 (medium), 700 (bold)

**Font Sizes**
- Hero Title: 6xl-8xl (72px-96px)
- Section Title: 5xl-6xl (48px-60px)
- Card Title: 2xl-3xl (24px-30px)
- Body: lg-xl (18px-20px)
- Small: sm-base (14px-16px)

### Spacing & Layout

**Grid System**
- Max Width: 1280px (7xl)
- Columns: 12-column grid
- Gaps: 6-8 units (24px-32px)

**Padding**
- Section: py-32 (128px)
- Card: p-8 to p-10 (32px-40px)
- Button: px-8 py-4 (32px-16px)

### Border Radius

- Small: 1rem (16px)
- Medium: 1.5rem (24px)
- Large: 2rem (32px)
- Extra Large: 2.5rem (40px)
- Pill: 9999px (full rounded)

### Shadow System

**Glass Shadow**
```css
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
```

**Glow Effect**
```css
box-shadow: 0 0 40px rgba(14, 165, 233, 0.2);
```

**Bloom Effect**
```css
box-shadow: 0 20px 60px -15px rgba(14, 165, 233, 0.25);
```

## ✨ Animation Patterns

### Entry Animations

**Fade In**
- Duration: 0.8s
- Easing: ease-out
- Delay: Staggered 0.1-0.2s

**Slide Up**
- Transform: translateY(30px) → translateY(0)
- Duration: 0.6-0.8s
- Easing: [0.16, 1, 0.3, 1] (ease-out-expo)

### Hover Effects

**Cards**
- Scale: 1.02-1.03
- Transform: translateY(-8px)
- Shadow: Glow increase
- Duration: 0.3-0.4s

**Buttons**
- Scale: 1.05
- Glow: Increase intensity
- Duration: 0.3s

### Floating Elements

**Icon Float**
```javascript
animate: {
  y: [0, -20, 0],
  rotate: [0, 5, 0, -5, 0]
}
duration: 6s
repeat: Infinity
```

### Background Animations

**Gradient Orbs**
- Scale: [1, 1.2, 1]
- Opacity: [0.3, 0.5, 0.3]
- Duration: 8-10s
- Rotation: 360deg over 20-30s

## 🔮 Glassmorphism Style

### Glass Card Recipe
```tsx
<div className="backdrop-blur-glass bg-white/5 border border-white/10 shadow-glass rounded-3xl p-8">
  {/* Content */}
</div>
```

### Properties
- Backdrop Filter: blur(40px)
- Background: Semi-transparent white/black
- Border: Subtle white/black with opacity
- Shadow: Soft, diffused

## 🎭 Component Patterns

### Hero Section
- Full viewport height
- Centered content
- Floating animated icons
- Large gradient text
- Prominent CTA button
- Scroll indicator

### Module Cards
- 2-column grid (4 cards total)
- Glassmorphic background
- Icon at top
- Title + description
- Hover reveals arrow
- Color-coded glow effects

### AI Chat Input
- Centered floating input
- Glassmorphic container
- Animated placeholder
- Focus state with glow
- Suggestion pills below

### City Archive
- 3-column grid
- Search bar at top
- City cards with stats
- Flag emoji indicators
- Hover lift effect

### Footer
- Gradient top border
- Newsletter signup
- Link columns
- Social icons
- Animated decorations

## 📱 Responsive Breakpoints

### Mobile (< 768px)
- Single column layouts
- Reduced padding (py-20)
- Smaller typography scale
- Stacked navigation

### Tablet (768px - 1024px)
- 2-column grids
- Medium padding (py-24)
- Adjusted typography

### Desktop (> 1024px)
- Full multi-column grids
- Maximum padding (py-32)
- Full typography scale
- Horizontal navigation

## 🌓 Dark Mode

### Implementation
- System preference detection
- CSS custom properties
- Automatic color inversion
- Maintains contrast ratios

### Color Adjustments
- Background: White → Dark gray
- Text: Dark → White
- Glass: White tint → Black tint
- Shadows: Lighter in dark mode

## 🎯 Interaction Principles

### Micro-interactions
- Every hover has feedback
- Smooth 60fps animations
- Staggered reveals
- Natural easing curves

### User Feedback
- Loading states
- Hover states
- Active states
- Disabled states

### Accessibility
- Keyboard navigation
- ARIA labels
- Focus indicators
- Reduced motion support

## 🚀 Performance Tips

1. Use `viewport={{ once: true }}` for scroll animations
2. Limit simultaneous animations
3. Use `transform` and `opacity` for smooth performance
4. Lazy load components below fold
5. Optimize image assets
6. Minimize backdrop-blur usage in nested elements

## 🎨 Inspiration Sources

- **Apple.com** - Minimalism, typography, spacing
- **Linear.app** - Clean UI, micro-interactions
- **Swan.so** - Glassmorphism, premium feel
- **Vercel** - Color gradients, modern aesthetics

---

**Design Philosophy**: Less is more. Every element serves a purpose. Animation enhances, never distracts.
