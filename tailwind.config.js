/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        coffee: {
          50: '#f8f5f0',
          100: '#f0e8dc',
          200: '#e0cbb0',
          300: '#c9a87d',
          400: '#b08855',
          500: '#8b5e34',
          600: '#6f4a2a',
          700: '#553820',
          800: '#3d2817',
          900: '#261810',
          950: '#170d07',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf4e8',
          200: '#f3e6d0',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'steam': 'steam 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        steam: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0) scaleX(1)' },
          '50%': { opacity: '0.8', transform: 'translateY(-12px) scaleX(1.3)' },
        },
      },
    },
  },
  plugins: [],
};
