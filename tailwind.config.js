/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
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
