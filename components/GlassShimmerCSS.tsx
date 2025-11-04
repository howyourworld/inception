'use client';

/**
 * Pure CSS Alternative - Glass Shimmer Effect
 *
 * This version uses only CSS animations, no Framer Motion required.
 * Better performance but less dynamic (no mouse parallax).
 *
 * To use this instead of GlassShimmer:
 * Replace <GlassShimmer /> with <GlassShimmerCSS /> in HeroSection
 */

export default function GlassShimmerCSS() {
  return (
    <>
      <style jsx>{`
        @keyframes shimmer-diagonal {
          0% {
            transform: translate(-100%, -50%);
          }
          100% {
            transform: translate(200%, 50%);
          }
        }

        @keyframes shimmer-horizontal {
          0% {
            transform: translateX(100%) scale(1);
          }
          50% {
            transform: translateX(0%) scale(1.2);
          }
          100% {
            transform: translateX(-100%) scale(1);
          }
        }

        @keyframes shimmer-accent {
          0% {
            transform: translate(-50%, 0%) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translate(75%, -15%) scale(1.3);
            opacity: 0.2;
          }
          100% {
            transform: translate(150%, -30%) scale(1);
            opacity: 0.1;
          }
        }

        @keyframes shimmer-glow {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.08;
          }
          50% {
            transform: scale(1.15) rotate(180deg);
            opacity: 0.15;
          }
        }

        @keyframes shimmer-vertical {
          0% {
            transform: translateY(-100%);
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(200%);
            opacity: 0.05;
          }
        }

        .shimmer-layer-1 {
          animation: shimmer-diagonal 20s linear infinite;
        }

        .shimmer-layer-2 {
          animation: shimmer-horizontal 15s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        .shimmer-layer-3 {
          animation: shimmer-accent 12s ease-in-out infinite;
        }

        .shimmer-layer-4 {
          animation: shimmer-glow 18s ease-in-out infinite;
        }

        .shimmer-layer-5 {
          animation: shimmer-vertical 25s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 1: Large diagonal shimmer */}
        <div className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] shimmer-layer-1">
          <div
            className="w-full h-full rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(0, 122, 255, 0.3) 0%, transparent 70%)',
              mixBlendMode: 'screen',
            }}
          />
        </div>

        {/* Layer 2: Medium horizontal drift */}
        <div className="absolute top-1/4 -right-1/4 w-[120%] h-[60%] shimmer-layer-2">
          <div
            className="w-full h-full rounded-full blur-3xl opacity-15"
            style={{
              background:
                'radial-gradient(ellipse, rgba(93, 188, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 40%, transparent 70%)',
              mixBlendMode: 'overlay',
            }}
          />
        </div>

        {/* Layer 3: Small fast accent */}
        <div className="absolute top-1/2 left-1/4 w-[80%] h-[80%] shimmer-layer-3">
          <div
            className="w-full h-full rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(circle, rgba(229, 243, 255, 0.5) 0%, rgba(93, 188, 255, 0.2) 50%, transparent 70%)',
              mixBlendMode: 'screen',
            }}
          />
        </div>

        {/* Layer 4: Subtle glow orb */}
        <div className="absolute top-1/3 right-1/3 w-[100%] h-[100%] shimmer-layer-4">
          <div
            className="w-full h-full rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(0, 122, 255, 0.25) 0%, rgba(93, 188, 255, 0.1) 40%, transparent 70%)',
              mixBlendMode: 'overlay',
            }}
          />
        </div>

        {/* Layer 5: Vertical sweep */}
        <div className="absolute -top-1/2 left-1/4 w-[60%] h-[150%] shimmer-layer-5">
          <div
            className="w-full h-full blur-3xl"
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, rgba(229, 243, 255, 0.3) 50%, transparent 100%)',
              mixBlendMode: 'screen',
            }}
          />
        </div>

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
    </>
  );
}
