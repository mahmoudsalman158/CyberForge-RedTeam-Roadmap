/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070d',
          surface: '#0b111e',
          card: '#111b2e',
          border: '#1e2e4a',
          neon: '#00f3ff',
          neonPink: '#ff0055',
          neonGreen: '#00ff88',
          neonPurple: '#a855f7',
          neonAmber: '#f59e0b'
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'Courier New', 'monospace'],
        cyber: ['Orbitron', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif']
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 243, 255, 0.4), inset 0 0 5px rgba(0, 243, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 243, 255, 0.8), inset 0 0 10px rgba(0, 243, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
