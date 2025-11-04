'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function GlassShimmer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Optional: Track mouse for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1: Large diagonal shimmer - Slowest */}
      <motion.div
        animate={{
          x: ['-100%', '200%'],
          y: ['-50%', '50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%]"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 122, 255, 0.3) 0%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>

      {/* Layer 2: Medium horizontal drift */}
      <motion.div
        animate={{
          x: ['100%', '-100%'],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        className="absolute top-1/4 -right-1/4 w-[120%] h-[60%]"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-15"
          style={{
            background:
              'radial-gradient(ellipse, rgba(93, 188, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 40%, transparent 70%)',
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>

      {/* Layer 3: Small fast accent */}
      <motion.div
        animate={{
          x: ['-50%', '150%'],
          y: ['0%', '-30%'],
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          x: mousePosition.x * 0.7,
          y: mousePosition.y * 0.7,
        }}
        className="absolute top-1/2 left-1/4 w-[80%] h-[80%]"
      >
        <div
          className="w-full h-full rounded-full blur-2xl"
          style={{
            background:
              'radial-gradient(circle, rgba(229, 243, 255, 0.5) 0%, rgba(93, 188, 255, 0.2) 50%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>

      {/* Layer 4: Subtle glow orb - Ambient */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-1/3 w-[100%] h-[100%]"
      >
        <div
          className="w-full h-full rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 122, 255, 0.25) 0%, rgba(93, 188, 255, 0.1) 40%, transparent 70%)',
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>

      {/* Layer 5: Vertical sweep - Adds depth */}
      <motion.div
        animate={{
          y: ['-100%', '200%'],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-1/2 left-1/4 w-[60%] h-[150%]"
      >
        <div
          className="w-full h-full blur-3xl"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(229, 243, 255, 0.3) 50%, transparent 100%)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>

      {/* Optional: Noise texture overlay for extra glass effect */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}
