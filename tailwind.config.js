/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1B2422',
          soft: '#3A4744',
          muted: '#6B7876',
        },
        cream: {
          DEFAULT: '#F5EEE1',
          soft: '#FBF7EE',
          deep: '#EADFC7',
        },
        sand: {
          DEFAULT: '#E2CDA5',
          deep: '#C9AE7C',
        },
        emerald: {
          leaf: '#2F6E56',
          deep: '#1F4E3D',
          soft: '#5B8F78',
          pale: '#DCE9E1',
        },
        gold: {
          DEFAULT: '#B88A3E',
          soft: '#D8B26A',
        },
        clay: {
          DEFAULT: '#B95A3E',
          soft: '#E6A88E',
        },
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', '"Tajawal"', '"Noto Kufi Arabic"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 30px -18px rgba(31, 78, 61, 0.35)',
        soft: '0 4px 20px -10px rgba(27, 36, 34, 0.18)',
        glow: '0 0 0 6px rgba(47, 110, 86, 0.18)',
      },
      borderRadius: {
        xl2: '1.25rem',
        '3xl': '1.75rem',
      },
      backgroundImage: {
        'night-makkah':
          'radial-gradient(ellipse at top, #1E3A55 0%, #0F1F2E 45%, #050B14 100%)',
        'sand-warm':
          'linear-gradient(135deg, #F5EEE1 0%, #EADFC7 60%, #E2CDA5 100%)',
        'emerald-warm':
          'linear-gradient(135deg, #2F6E56 0%, #1F4E3D 100%)',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
