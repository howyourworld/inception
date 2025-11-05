'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedGradientText from './AnimatedGradientText';
import GlassShimmer from './GlassShimmer';

export default function HeroSection() {
  const [inputValue, setInputValue] = useState('');

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white" aria-label="Hero section">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-lighter/20 via-white to-white" />

      {/* Glass Shimmer Effect */}
      <GlassShimmer />

      {/* Floating orb - minimal, hidden on mobile for performance */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden md:block absolute top-20 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col items-center justify-center space-y-6 sm:space-y-8"
          >
            {/* Overline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-primary font-semibold text-sm tracking-wide uppercase text-center"
            >
              Your World, Simplified
            </motion.p>

            {/* Main Headline - Apple style with animated gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-gray-900 leading-tight inline">
                How Your World{' '}
              </h1>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight inline-block">
                <AnimatedGradientText />
              </span>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed text-center"
            >
              The smartest way to live, travel, and connect anywhere on Earth.
            </motion.p>

            {/* AI Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="w-full max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5">
                  {/* Search Icon */}
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>

                  {/* Input Field */}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about living, traveling, or moving anywhere..."
                    className="flex-1 bg-transparent border-none outline-none text-sm sm:text-base text-gray-900 placeholder-gray-400 font-light min-w-0"
                    aria-label="Search for travel and living information"
                  />

                  {/* Add tabs or files button */}
                  <button
                    className="hidden lg:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0 focus:outline-none focus:text-gray-700 whitespace-nowrap"
                    aria-label="Add tabs or files"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="font-light">Add tabs or files</span>
                  </button>

                  {/* Send Button - appears when there's input */}
                  {inputValue && (
                    <motion.button
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white p-2.5 rounded-full flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      aria-label="Submit search"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Helper text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 font-light"
              >
                Powered by AI — Get instant answers about any destination
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
