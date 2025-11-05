import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

// Dynamic imports for below-the-fold content (lazy loading)
const CoreModules = dynamic(() => import('@/components/CoreModules'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />,
});

const CityArchive = dynamic(() => import('@/components/CityArchive'), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-gray-50" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-white" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CoreModules />
      <CityArchive />
      <Footer />
    </main>
  );
}
