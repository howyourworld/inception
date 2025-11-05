'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const words = ['Learns', 'Travels', 'Connects', 'Documents'];

export default function AnimatedGradientText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Memoize animation variants
  const animationVariants = useMemo(() => ({
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      filter: 'blur(10px)'
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)'
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.9,
      filter: 'blur(10px)'
    }
  }), []);

  const transition = useMemo(() => ({
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
    opacity: { duration: 0.4 },
    scale: { duration: 0.5 }
  }), []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={animationVariants.initial}
        animate={animationVariants.animate}
        exit={animationVariants.exit}
        transition={transition}
        className="inline-block bg-clip-text text-transparent"
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
  );
}
