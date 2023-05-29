/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ff_primary': ['Roboto Slab'],
        'ff_secondary': ['Roboto']
      },
      colors: {
        'BLACK': '#0D0C0F',
        
        'BGDARK_900': '#1C1B1E',
        'BGDARK_850': '#282124',
        'BGDARK_800': '#262529',
        'BGDARK_700': '#312E38',

        'WHITE_100': '#F4EDE8',
        'WHITE_200':  '#CAC4CF',
        'WHITE_300': '#E5E5E5',
        'PINK': '#FF859B',

        'GRAY_100': '#948F99',
        'GRAY_50': '#999591'
      },
      backgroundImage: {
        'BG_COVER': "url('./src/assets/cover.svg')",
        'PINK_STAR': "url('./src/assets/star.svg')",
        'HOLLOW_STAR': "url('./src/assets/hollowStar.svg')",
        'BIG_STAR': "url('./src/assets/bigStar.svg')",
        'BIG_HOLLOW_STAR': "url('./src/assets/bigHollowStar.svg')"
      },      
    },
  },
  plugins: [],
}

