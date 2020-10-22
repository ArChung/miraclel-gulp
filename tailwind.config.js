const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.ejs',
  ],
  theme: {
    // colors: {
    //   blue: '#2f4c6a',
    // },
    fontFamily: {
      'sans': ["微軟正黑體", "Microsoft JhengHei", "STHeiti", "STHeiti Light", "Arial", "sans-serif"],
      'arial': ["Arial","微軟正黑體", "Microsoft JhengHei", "STHeiti", "STHeiti Light", "Arial", "sans-serif"],
      
    },
    extend: {
      colors: {
        'mainb': '#2f4c6a',
        'mainb-light': '#365473',
        'm-gold': '#c9b262',
        'tag-red': '#cc5e47',
        'm-orange': '#ec6941',
        'm-yellow-light': '#f4f0e0',
        'hash-pink': '#edcdc3',
        gray: {
          ...colors.gray,
          '100': '#f9f9f9',
          '300': '#e0e0e0',
          '500': '#b5b5b5',
          '900': '#3a3a3a',
        }
      }
    }


  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}