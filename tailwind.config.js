/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1B17',
          800: '#15261F',
          700: '#1C3128',
          600: '#234038',
        },
        paper: '#F4F1E8',
        worth: {
          DEFAULT: '#E8A33D',
          light: '#F4C679',
          dark: '#C1812A',
        },
        loop: {
          DEFAULT: '#3FA796',
          light: '#6FCBBA',
          dark: '#2C7A6D',
        },
        muted: '#8FA39B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        loop: '2rem',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-60px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(220px) rotate(180deg)', opacity: '0' },
        },
        ringspin: {
          '0%': { strokeDashoffset: 'var(--ring-start, 283)' },
          '100%': { strokeDashoffset: 'var(--ring-end, 0)' },
        },
        riseup: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        loopRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        fall: 'fall 3.2s linear infinite',
        riseup: 'riseup 0.6s ease-out both',
        loopRotate: 'loopRotate 14s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
