/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      borderWidth: {
        DEFAULT: '1px',
        0.5: '0.5px',
        2: '2px',
      },
      margin: {
        90: '48rem',
        101: '845px',
        102: '445px',
      },
      width: {
        999: '30px'
      },
      height: {
        999: '30px'
      },
      keyframes: {
        upDown1: {
          '0%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-1.5px)' },
          '50%': { transform: 'translateY(0px)' },
          '75%': { transform: 'translateY(1.5px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        upDown2: {
          '0%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-1.5px)' },
          '50%': { transform: 'translateY(0px)' },
          '75%': { transform: 'translateY(1.5px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        hoverPulse: {
          '0%': { transform: 'scale(0.99)' },
          '50%': { transform: 'scale(1.01)' },
          '100%': { transform: 'scale(0.99)' },
        },
        subtlePulse: {
          '0%': { transform: 'scale(0.999)' },
          '50%': { transform: 'scale(1.001)' },
          '100%': { transform: 'scale(0.999)' },
        },
        alert: {
          '0%': { transform: 'translateY(0px)' },
          '5%': { transform: 'translateY(5px)' },
          '20%': { transform: 'translateY(-12px)' },
          '30%': { transform: 'translateY(2px)' },
          '35%': { transform: 'translateY(4px)' },
          '40%': { transform: 'translateY(0px)' },
          '45%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(0px)' },
          '55%': { transform: 'translateY(2px)' },
          '65%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        eyeLeftRight: {
          '0%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(0px)' },
          '75%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        travelAcrossScreen: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(300px)' },
          '75%': { transform: 'translateX(300px)' },
          '100%': { transform: 'translateX(0px)' },
        },

      },
      animation: {
        'upDown1': 'upDown1 4s linear infinite',
        'upDown2': 'upDown2 4s linear infinite',
        'hoverPulse': 'hoverPulse 2s linear infinite',
        'subtlePulse': 'subtlePulse 3s linear infinite',
        'alert': 'alert 2s linear',
        'eyeLeftRight': 'eyeLeftRight 2s linear',
        'travelAcrossScreen': 'travelAcrossScreen 2s linear',
      }
    },
  },

  plugins: [],
}