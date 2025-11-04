'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const links = {
    product: [
      { name: 'Live', href: '#' },
      { name: 'Travel', href: '#' },
      { name: 'Connect', href: '#' },
      { name: 'Documents', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API', href: '#' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
    ],
  };

  return (
    <footer className="relative py-16 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-tight">
              How Your World
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your guide to living, traveling, and connecting anywhere on Earth.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-gray-900 mb-3 capitalize">
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© 2025 How Your World — Designed for explorers.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-red-500">♥</span> for adventurers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
