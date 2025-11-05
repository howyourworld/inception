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
      <span className="invisible whitespace-nowrap">
        {words[0]}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9,
            filter: 'blur(10px)'
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)'
          }}
          exit={{
            opacity: 0,
            y: -30,
            scale: 0.9,
            filter: 'blur(10px)'
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1], // Smooth Apple-style easing
            opacity: { duration: 0.4 },
            scale: { duration: 0.5 }
          }}
          className="absolute left-0 top-0 inline-block bg-clip-text text-transparent whitespace-nowrap"
          style={{
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
            backgroundSize: '300% 300%',
            animation: 'gradient-flow 6s ease-in-out infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            willChange: 'transform, opacity, filter',
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
