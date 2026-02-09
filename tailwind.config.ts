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
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
