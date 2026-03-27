/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.9rem', { lineHeight: '1.2rem' }],
      sm: ['1.05rem', { lineHeight: '1.5rem' }],
      base: ['1.2rem', { lineHeight: '1.8rem' }],
      lg: ['1.35rem', { lineHeight: '2.1rem' }],
      xl: ['1.5rem', { lineHeight: '2.1rem' }],
      '2xl': ['1.8rem', { lineHeight: '2.4rem' }],
      '3xl': ['2.25rem', { lineHeight: '2.7rem' }],
      '4xl': ['2.7rem', { lineHeight: '3rem' }],
      '5xl': ['3.6rem', { lineHeight: '1' }],
      '6xl': ['4.5rem', { lineHeight: '1' }],
      '7xl': ['5.4rem', { lineHeight: '1' }],
      '8xl': ['7.2rem', { lineHeight: '1' }],
      '9xl': ['9.6rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        brand: {
          page: '#F6F8FA',
          section: '#FFFFFF',
          tint: '#EAF1F3',
          text: '#111827',
          secondary: '#4B5563',
          muted: '#6B7280',
          border: '#E5E7EB',
          accent: '#0E7490',
          'accent-hover': '#0B5F74',
          card: '#7D7D7D',
          'card-dark': '#6F6F6F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(17, 24, 39, 0.04)',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}
