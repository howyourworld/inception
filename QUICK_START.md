# Quick Start Guide

## Development

```bash
# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Before Deploying

### 1. Add Required Assets
Create these files in the `public` folder:

- `/public/favicon.ico` - Website favicon
- `/public/icon-192.png` - PWA icon (192x192px)
- `/public/icon-512.png` - PWA icon (512x512px)
- `/public/apple-touch-icon.png` - iOS icon (180x180px)
- `/public/og-image.jpg` - Social share image (1200x630px)

### 2. Update Configuration
Edit these files with your actual domain:

**app/layout.tsx** (line 22):
```typescript
metadataBase: new URL('https://your-actual-domain.com'),
```

**app/layout.tsx** (line 28):
```typescript
url: 'https://your-actual-domain.com',
```

**app/layout.tsx** (line 42):
```typescript
url: 'https://your-actual-domain.com',
```

### 3. Test Locally
```bash
npm run build
npm start
```

Visit http://localhost:3000 and verify:
- ✅ All sections load correctly
- ✅ Mobile menu works
- ✅ Animations are smooth
- ✅ No console errors
- ✅ Responsive on different screen sizes

## Deploy

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The site works with any Node.js hosting:
- Netlify
- Railway
- DigitalOcean
- AWS Amplify
- Google Cloud Run

## Performance Testing

After deployment, test with:
- [Google Lighthouse](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Support

For issues or questions, check:
- [OPTIMIZATION_REPORT.md](./OPTIMIZATION_REPORT.md) - Full optimization details
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Built with:**
- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 3
- Framer Motion 12
