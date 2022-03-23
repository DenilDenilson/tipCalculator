const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    //"./src/**/*.{html,js}",
    //"./index.html"
    "./src/**/*.{html, js}",
    "./**/*.{html, js}",
  ],
  theme: {
    screen: {
      'xl': '1440px',
    },
    
    extend: {
      colors: {
        //### Primary

        'Strong_cyan': 'hsl(172, 67%, 45%)',

        //### Neutral

        'Very_dark_cyan': 'hsl(183, 100%, 15%)',
        'Dark_grayish_cyan': 'hsl(186, 14%, 43%)',
        'Grayish_cyan': 'hsl(184, 14%, 56%)',
        'Light_grayish_cyan': 'hsl(185, 41%, 84%)',
        'Very_light_grayish_cyan': 'hsl(189, 41%, 97%)',
        'White': 'hsl(0, 0%, 100%)',

      },

      fontFamily: {
        'sans': ['Space Mono', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}