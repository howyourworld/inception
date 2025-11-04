'use client';

import { motion } from 'framer-motion';

interface ModuleCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const ModuleCard = ({ icon, title, description, index }: ModuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="card p-8 h-full flex flex-col cursor-pointer">
        {/* Icon */}
        <motion.div
          className="text-5xl mb-5"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-3 text-gray-900 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-base">
          {description}
        </p>

        {/* Arrow indicator on hover */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-auto pt-6 flex items-center gap-2 text-primary font-medium text-sm"
        >
          Learn more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function CoreModules() {
  const modules = [
    {
      icon: '🏠',
      title: 'Live',
      description: 'Complete guides for settling in and living abroad. Housing, banking, healthcare, and everything you need.',
    },
    {
      icon: '✈️',
      title: 'Travel',
      description: 'Explore destinations, transport options, and unique experiences around the world.',
    },
    {
      icon: '🤝',
      title: 'Connect',
      description: 'Find local communities, services, and events. Connect with people who share your interests.',
    },
    {
      icon: '📄',
      title: 'Documents',
      description: 'Navigate visas, permits, and digital identity with ease. Your passport to seamless international living.',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 text-gray-900 tracking-tight">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four powerful tools to guide your global journey
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <ModuleCard key={module.title} {...module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
