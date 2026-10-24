/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/shipping/**/*.{js,jsx,ts,tsx}',
  ],
  important: '.shipping-portal-root',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        status: {
          amber: '#f59e0b',
          emerald: '#10b981',
        },
      },
      animation: {
        'pulse-fast': 'pulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-bounce': 'subtleBounce 2s infinite ease-in-out',
      },
      keyframes: {
        subtleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
    },
  },
  plugins: [],
};
