/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: '-0.015em',
    },

    extend: {
      height: {
        'half-screen': '50vh',
      },
      colors: {
        "primary": "#1D70B7",
        "primary-light": "#7dc7ff",
        "dark-blue": "#02009f",

      },
      animation: {
        'text': 'text 5s ease infinite',
      },
      keyframes: {
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },


      }

    },
  },

}


