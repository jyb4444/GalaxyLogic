/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.825rem', { lineHeight: '1.1rem' }],
      sm: ['0.9625rem', { lineHeight: '1.375rem' }],
      base: ['1.1rem', { lineHeight: '1.65rem' }],
      lg: ['1.2375rem', { lineHeight: '1.925rem' }],
      xl: ['1.375rem', { lineHeight: '1.925rem' }],
      '2xl': ['1.65rem', { lineHeight: '2.2rem' }],
      '3xl': ['2.0625rem', { lineHeight: '2.475rem' }],
      '4xl': ['2.475rem', { lineHeight: '2.75rem' }],
      '5xl': ['3.3rem', { lineHeight: '1' }],
      '6xl': ['4.125rem', { lineHeight: '1' }],
      '7xl': ['4.95rem', { lineHeight: '1' }],
      '8xl': ['6.6rem', { lineHeight: '1' }],
      '9xl': ['8.8rem', { lineHeight: '1' }],
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
