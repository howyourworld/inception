import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#007AFF", // Apple blue
          light: "#5AC8FA",
          lighter: "#E5F3FF",
          dark: "#0051D5",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F7",
          200: "#E8E8ED",
          300: "#D2D2D7",
          400: "#AEAEB2",
          500: "#8E8E93",
          600: "#636366",
          700: "#48484A",
          800: "#3A3A3C",
          900: "#1C1C1E",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-subtle": "linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%)",
        "gradient-blue": "linear-gradient(135deg, #E5F3FF 0%, #FFFFFF 100%)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "24px",
        xl: "40px",
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
        'md': '0 4px 16px 0 rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px 0 rgba(0, 0, 0, 0.1)',
        'xl': '0 12px 40px 0 rgba(0, 0, 0, 0.12)',
        '2xl': '0 24px 64px 0 rgba(0, 0, 0, 0.14)',
        'blue': '0 4px 24px 0 rgba(0, 122, 255, 0.15)',
        'blue-lg': '0 8px 32px 0 rgba(0, 122, 255, 0.2)',
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "shimmer-smooth": "shimmerSmooth 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        shimmerSmooth: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
