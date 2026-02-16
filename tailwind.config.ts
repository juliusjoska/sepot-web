import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#030712',
          secondary: '#0a1120',
          tertiary: '#111827',
        },
        foreground: '#f0f4f8',
        muted: '#7b8fad',
        accent: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
        },
        lime: {
          DEFAULT: '#84cc16',
          light: '#a3e635',
        },
        border: '#1a2744',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: { xl: '1200px' },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
        'typing': 'typing 1.5s steps(30, end) forwards',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'counter': 'counter 2s ease-out forwards',
        'particle-1': 'particle-float-1 12s ease-in-out infinite',
        'particle-2': 'particle-float-2 15s ease-in-out infinite',
        'particle-3': 'particle-float-3 10s ease-in-out infinite',
        'particle-4': 'particle-float-4 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        counter: {
          '0%': { '--counter-value': '0' },
          '100%': { '--counter-value': 'var(--target-value)' },
        },
        'particle-float-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '25%': { transform: 'translate(100px, -150px) scale(1.2)', opacity: '0.6' },
          '50%': { transform: 'translate(-50px, -250px) scale(0.8)', opacity: '0.4' },
          '75%': { transform: 'translate(80px, -100px) scale(1.1)', opacity: '0.5' },
        },
        'particle-float-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.2' },
          '33%': { transform: 'translate(-120px, -200px) scale(1.3)', opacity: '0.5' },
          '66%': { transform: 'translate(60px, -300px) scale(0.9)', opacity: '0.3' },
        },
        'particle-float-3': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'translate(80px, -180px) rotate(180deg)', opacity: '0.7' },
        },
        'particle-float-4': {
          '0%, 100%': { transform: 'translate(0, 0) scale(0.8)', opacity: '0.15' },
          '25%': { transform: 'translate(-80px, -120px) scale(1.4)', opacity: '0.4' },
          '75%': { transform: 'translate(120px, -220px) scale(0.6)', opacity: '0.2' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
