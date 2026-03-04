import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#39ff14",   // Neon green core
          600: "#22c55e",
          700: "#16a34a",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        accent: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        brand: {
          black: "#000000",
          dark: "#080808",
          darker: "#050505",
          card: "#0e0e0e",
          border: "#1a1a1a",
        }
      },
      fontFamily: {
        sans: ["Outfit", "Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-reveal': 'scaleReveal 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'tetris-fall': 'tetrisFall 12s linear infinite',
        'tetris-drift': 'tetrisDrift 15s ease-in-out infinite',
        'cube-spin': 'cubeSpin 20s linear infinite',
        'cube-spin-rev': 'cubeSpinRev 16s linear infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'netflix-intro': 'netflixIntro 1.0s cubic-bezier(0.16,1,0.3,1) forwards',
        'scan-down': 'scanDown 4s linear infinite',
        'neon-flicker': 'neonFlicker 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(3deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleReveal: {
          '0%': { opacity: '0', transform: 'scale(0.88)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(57,255,20,0.3), 0 0 40px rgba(57,255,20,0.06)' },
          '50%': { boxShadow: '0 0 35px rgba(57,255,20,0.7), 0 0 80px rgba(57,255,20,0.2)' },
        },
        tetrisFall: {
          '0%': { transform: 'translateY(-120px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(180deg)', opacity: '0' },
        },
        tetrisDrift: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(30px) translateY(-20px) rotate(90deg)' },
          '50%': { transform: 'translateX(-20px) translateY(-40px) rotate(180deg)' },
          '75%': { transform: 'translateX(15px) translateY(-20px) rotate(270deg)' },
          '100%': { transform: 'translateX(0) translateY(0) rotate(360deg)' },
        },
        cubeSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        cubeSpinRev: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(57,255,20,0.2)' },
          '50%': { borderColor: 'rgba(57,255,20,0.8)' },
        },
        netflixIntro: {
          '0%': { opacity: '0', transform: 'scale(1.08) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        scanDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        neonFlicker: {
          '0%, 90%, 100%': { opacity: '1' },
          '92%': { opacity: '0.4' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.6' },
          '98%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'netflix': 'cubic-bezier(0.37, 0, 0.63, 1)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
