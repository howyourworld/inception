'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AIChatSection() {
  const [inputValue, setInputValue] = useState('');

  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Search Input - Dia browser style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-4 px-6 py-5">
              {/* Search Icon */}
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              {/* Input Field */}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about living, traveling, or moving anywhere..."
                className="flex-1 bg-transparent border-none outline-none text-base text-gray-900 placeholder-gray-400 font-light"
              />

              {/* Add Icon */}
              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="font-light">Add tabs or files</span>
              </button>

              {/* Send Button */}
              {inputValue && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white p-2.5 rounded-full flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-sm text-gray-500 mt-4 font-light"
        >
          Powered by AI — Get instant answers about any destination
        </motion.p>
      </div>
    </section>
  );
}
