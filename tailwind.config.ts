import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: '#0a1a0e',
          900: '#14291a',
          800: '#1e3d27',
          700: '#2a5535',
          600: '#3a7d44',
          500: '#4a9955',
          400: '#5db870',
          300: '#80cc8f',
          200: '#aaddb5',
          100: '#d4eedb',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
