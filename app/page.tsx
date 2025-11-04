import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CoreModules from '@/components/CoreModules';
import AIChatSection from '@/components/AIChatSection';
import CityArchive from '@/components/CityArchive';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CoreModules />
      <AIChatSection />
      <CityArchive />
      <Footer />
    </main>
  );
}
