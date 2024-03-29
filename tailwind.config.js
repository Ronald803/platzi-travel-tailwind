/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      ...colors,
      "primary": "#CC2D4A",
      "secondary": "#8FA206",
      "tertiary": "#61AEC9",
      },
      fontFamily: { 
        Montserrat: ["Montserrat", "sans-serif"],
      },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/yosemite.jpg')",
			  'LA': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/LA.jpg')",
			  'seattle': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/seattle.jpg')",
			  'new_york': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/new_york.jpg')",
			  'norway': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/norway.jpg')",
			  'sydney': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sydney.jpg')",
			  'miami': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/miami.jpg')",
			  'switzerland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/switzerland.jpg')",
			  'bali': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/bali.jpg')",
			  'chicago': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/chicago.jpg')",
			  'europe': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/europe.jpg')",
			  'iceland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/iceland.jpg')",
      }
    },
  },
  plugins: [],
}

