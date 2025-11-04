'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const words = ['Learns', 'Travels', 'Connects', 'Documents'];

export default function AnimatedGradientText() {
  const [index, setIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);

  // Measure the width of all words on mount to find the longest
  useEffect(() => {
    if (measureRef.current) {
      const widths = words.map(word => {
        const span = document.createElement('span');
        span.style.cssText = `
          position: absolute;
          visibility: hidden;
          font-size: inherit;
          font-weight: inherit;
          font-family: inherit;
          letter-spacing: inherit;
          white-space: nowrap;
        `;
        span.textContent = word;
        measureRef.current?.appendChild(span);
        const width = span.getBoundingClientRect().width;
        measureRef.current?.removeChild(span);
        return width;
      });
      setMaxWidth(Math.max(...widths));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      ref={measureRef}
      className="relative inline-block align-baseline"
      style={{
        width: maxWidth > 0 ? `${maxWidth}px` : 'auto',
        minWidth: maxWidth > 0 ? `${maxWidth}px` : 'auto',
      }}
    >
      {/* Invisible placeholder to maintain height */}
      <span className="invisible whitespace-nowrap leading-none">
        {words[0]}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{
            opacity: 0,
            y: 20,
            filter: 'blur(8px)'
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)'
          }}
          exit={{
            opacity: 0,
            y: -20,
            filter: 'blur(8px)'
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] // Apple-style easing
          }}
          className="absolute left-0 top-0 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] via-[#f43f5e] via-[#a855f7] via-[#8b5cf6] to-[#3b82f6] animate-shimmer-smooth whitespace-nowrap leading-none"
          style={{
            backgroundSize: '300% auto',
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
