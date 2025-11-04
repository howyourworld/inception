'use client';

import { motion } from 'framer-motion';

interface City {
  name: string;
  country: string;
  description: string;
  stats: { population: string; language: string; climate: string };
  emoji: string;
}

const cities: City[] = [
  {
    name: 'Lisbon', country: 'Portugal',
    description: 'Coastal charm meets modern innovation',
    stats: { population: '505K', language: 'Portuguese', climate: 'Mediterranean' },
    emoji: '🇵🇹'
  },
  {
    name: 'Tokyo', country: 'Japan',
    description: 'Ancient traditions in a futuristic city',
    stats: { population: '14M', language: 'Japanese', climate: 'Humid subtropical' },
    emoji: '🇯🇵'
  },
  {
    name: 'Barcelona', country: 'Spain',
    description: 'Art, architecture, and Mediterranean life',
    stats: { population: '1.6M', language: 'Spanish, Catalan', climate: 'Mediterranean' },
    emoji: '🇪🇸'
  },
  {
    name: 'Melbourne', country: 'Australia',
    description: 'Cultural capital with endless coffee',
    stats: { population: '5M', language: 'English', climate: 'Oceanic' },
    emoji: '🇦🇺'
  },
  {
    name: 'Dubai', country: 'UAE',
    description: 'Ultra-modern desert metropolis',
    stats: { population: '3.4M', language: 'Arabic, English', climate: 'Desert' },
    emoji: '🇦🇪'
  },
  {
    name: 'Bali', country: 'Indonesia',
    description: 'Island paradise for digital nomads',
    stats: { population: '4.3M', language: 'Indonesian', climate: 'Tropical' },
    emoji: '🇮🇩'
  }
];

const CityCard = ({ city, index }: { city: City; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -4 }}
    className="card p-6 cursor-pointer h-full"
  >
    <div className="text-4xl mb-4">{city.emoji}</div>
    <h3 className="text-xl font-semibold mb-1 text-gray-900">{city.name}</h3>
    <p className="text-sm text-gray-500 mb-3">{city.country}</p>
    <p className="text-gray-600 mb-4 text-sm">{city.description}</p>
    <div className="space-y-2 text-xs">
      <div className="flex justify-between">
        <span className="text-gray-500">Population</span>
        <span className="text-gray-900 font-medium">{city.stats.population}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Language</span>
        <span className="text-gray-900 font-medium">{city.stats.language}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Climate</span>
        <span className="text-gray-900 font-medium">{city.stats.climate}</span>
      </div>
    </div>
  </motion.div>
);

export default function CityArchive() {
  return (
    <section className="relative py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 text-gray-900 tracking-tight">
            Explore destinations
          </h2>
          <p className="text-xl text-gray-600">
            Detailed guides for cities around the world
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <CityCard key={city.name} city={city} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
