module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
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

      }
    }


  },
  variants: {},
  plugins: [],
}