# Deployment Guide - How Your World

## 🚀 Quick Start (Local Development)

```bash
cd how-your-world
npm install
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## ☁️ Deploy to Vercel (Recommended)

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

**Environment**: No environment variables required for basic deployment

## 🌐 Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

3. Deploy via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🐳 Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t how-your-world .
docker run -p 3000:3000 how-your-world
```

## 🔧 Environment Configuration

### Optional Environment Variables

Create `.env.local` for custom configuration:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# API URLs (if needed later)
NEXT_PUBLIC_API_URL=https://api.howyourworld.com

# Feature Flags
NEXT_PUBLIC_ENABLE_CHAT=true
NEXT_PUBLIC_ENABLE_SEARCH=true
```

## ⚡ Performance Optimizations

### Before Deployment

1. **Optimize Images**: Use WebP format where possible
2. **Enable Compression**: Gzip/Brotli on server
3. **CDN**: Use Vercel Edge Network or Cloudflare
4. **Code Splitting**: Already handled by Next.js
5. **Lazy Loading**: Implemented for scroll-triggered components

### Lighthouse Score Goals
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🔒 Security Checklist

- [ ] Remove console.log statements
- [ ] Set proper CORS headers
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Set security headers in next.config.ts
- [ ] Rate limiting for API routes (if added)

### Add Security Headers

Update [next.config.ts](next.config.ts):
```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};
```

## 📊 Monitoring & Analytics

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to [app/layout.tsx](app/layout.tsx):
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics
Add to [app/layout.tsx](app/layout.tsx):
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## 🌍 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate auto-provisioned

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records
4. SSL certificate auto-provisioned

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run start
```

## 📱 Progressive Web App (PWA)

To add PWA capabilities:
```bash
npm install next-pwa
```

Update [next.config.ts](next.config.ts):
```typescript
const withPWA = require('next-pwa')({
  dest: 'public'
});

module.exports = withPWA({
  // ... other config
});
```

## 🐛 Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: Requires Node 18+

### Performance Issues
- Enable static optimization
- Use Next.js Image component
- Implement incremental static regeneration
- Add caching headers

### Common Issues

**Framer Motion errors**: Ensure 'use client' directive at top of component files

**Tailwind not working**: Check postcss.config.mjs and tailwind.config.ts paths

**TypeScript errors**: Run `npm run build` to see all errors

## 📈 Post-Deployment

1. **Test all pages** on mobile and desktop
2. **Run Lighthouse** audit
3. **Test dark mode** functionality
4. **Verify animations** are smooth
5. **Check loading times** across regions
6. **Set up monitoring** (Sentry, LogRocket, etc.)
7. **Configure analytics**
8. **Submit sitemap** to search engines

## 🎯 Next Steps

- Add sitemap.xml for SEO
- Implement OG images for social sharing
- Add robots.txt
- Set up error tracking
- Configure email newsletter integration
- Add A/B testing capabilities

---

**Ready to Launch!** 🎉

Your site is now ready for the world. Make sure to test thoroughly before announcing.
