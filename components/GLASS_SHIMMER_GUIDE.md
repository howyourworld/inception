# Glass Shimmer Effect - Customization Guide

## 🎨 Overview

The Glass Shimmer effect creates an animated, luminous overlay that adds depth and premium feel to your hero section. It's inspired by diabrowser.com but softer and more ambient.

## 📦 Two Versions Available

1. **GlassShimmer.tsx** - Framer Motion version with mouse parallax
2. **GlassShimmerCSS.tsx** - Pure CSS animations (better performance, no parallax)

## 🎛️ Customization Options

### 1. Adjust Animation Speed

In `GlassShimmer.tsx`, modify the `duration` values:

```tsx
// Slower (more ambient)
transition={{ duration: 30, ... }}

// Faster (more dynamic)
transition={{ duration: 10, ... }}
```

**Recommended speeds:**
- Layer 1 (diagonal): 15-25s
- Layer 2 (horizontal): 12-18s
- Layer 3 (accent): 8-15s
- Layer 4 (glow): 15-20s
- Layer 5 (vertical): 20-30s

### 2. Change Colors

Replace the gradient colors in each layer:

```tsx
// Current: Blue theme
background: 'radial-gradient(circle, rgba(0, 122, 255, 0.3) 0%, transparent 70%)'

// Purple theme
background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)'

// Green theme
background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)'

// Pink theme
background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)'
```

### 3. Adjust Opacity (Intensity)

Control how visible the effect is:

```tsx
// Subtle (current)
className="... opacity-20"

// More visible
className="... opacity-30"

// Very subtle
className="... opacity-10"
```

**Or adjust the gradient alpha:**
```tsx
// Softer
rgba(0, 122, 255, 0.2)  // instead of 0.3

// Stronger
rgba(0, 122, 255, 0.5)  // instead of 0.3
```

### 4. Change Blur Amount

Modify the `blur-*` classes:

```tsx
// Softer blur
className="... blur-2xl"

// Sharper
className="... blur-xl"

// Very soft/ambient
className="... blur-[100px]"
```

### 5. Adjust Blend Mode

Change how layers interact:

```tsx
// Current options
mixBlendMode: 'screen'   // Brightens
mixBlendMode: 'overlay'  // Contrast boost
mixBlendMode: 'soft-light' // Subtle
mixBlendMode: 'hard-light' // Stronger
```

### 6. Mouse Parallax Sensitivity

In `GlassShimmer.tsx`, adjust the multiplier:

```tsx
// Less parallax
x: mousePosition.x * 0.2  // instead of 0.5

// More parallax
x: mousePosition.x * 1.0  // instead of 0.5
```

### 7. Add/Remove Layers

To simplify (better performance):
- Comment out Layer 3 or Layer 5
- Keep Layers 1, 2, and 4 for good balance

To add more complexity:
- Duplicate a layer and change its position/speed/color

### 8. Size Adjustments

Change the size of shimmer elements:

```tsx
// Smaller, more focused
className="... w-[80%] h-[80%]"

// Larger, more ambient
className="... w-[200%] h-[200%]"
```

## 🎯 Preset Configurations

### Minimal (Performance Optimized)
```tsx
// Use only 3 layers (1, 2, and 4)
// Set opacity to 0.12 or lower
// Increase duration to 25-30s
// Use blur-3xl on all
```

### Dramatic (High Impact)
```tsx
// Keep all 5 layers
// Set opacity to 0.25-0.35
// Decrease duration to 10-15s
// Use blur-2xl for sharper edges
```

### Ambient (Diabrowser-style)
```tsx
// Keep all 5 layers
// Set opacity to 0.15-0.20
// Duration: 15-20s
// Use mix-blend-mode: 'overlay' on most layers
```

## 🚀 Performance Tips

1. **Reduce Layers**: Use 3 instead of 5
2. **Increase Blur**: blur-3xl is more performant than sharp gradients
3. **Use CSS Version**: GlassShimmerCSS.tsx is lighter
4. **Disable Parallax**: Remove mouse tracking in production if needed

## 🎨 Color Schemes for Different Themes

### Blue (Current)
```tsx
rgba(0, 122, 255, ...)    // Primary
rgba(93, 188, 255, ...)   // Light
rgba(229, 243, 255, ...)  // Very light
```

### Purple
```tsx
rgba(139, 92, 246, ...)   // Primary
rgba(167, 139, 250, ...)  // Light
rgba(237, 233, 254, ...)  // Very light
```

### Emerald
```tsx
rgba(16, 185, 129, ...)   // Primary
rgba(52, 211, 153, ...)   // Light
rgba(209, 250, 229, ...)  // Very light
```

### Rose
```tsx
rgba(244, 63, 94, ...)    // Primary
rgba(251, 113, 133, ...)  // Light
rgba(255, 228, 230, ...)  // Very light
```

## 📱 Responsive Adjustments

For mobile, you might want to reduce intensity:

```tsx
<div className="opacity-20 md:opacity-15">  // Less intense on desktop
```

Or disable parallax on mobile:
```tsx
useEffect(() => {
  if (window.innerWidth < 768) return; // Skip on mobile
  // ... parallax code
}, []);
```

## 🔧 Troubleshooting

**Effect too subtle?**
- Increase opacity values
- Use mixBlendMode: 'screen' instead of 'overlay'
- Reduce blur amount

**Effect too distracting?**
- Decrease opacity
- Increase animation duration
- Use more blur

**Performance issues?**
- Switch to GlassShimmerCSS.tsx
- Reduce number of layers
- Increase blur (paradoxically better for perf)

## 💡 Usage

```tsx
// In HeroSection.tsx
import GlassShimmer from './GlassShimmer';

<section className="relative ...">
  <GlassShimmer />
  {/* Your content */}
</section>
```

That's it! Experiment with the values to match your brand's aesthetic.
