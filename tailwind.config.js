/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx}'], // tell tailwind where to look
  theme: {
    extend: {
      colors: {
        black: '#131310',
        grey: '#5C5D60',
        brand_red: '#E60E02',
        green: '#00994D',
      },
      fontFamily: {
        generalSans: ['var(--General-Sans)'],
        switzer: ['var(--Switzer)'],
      },
    },
    screens: {
      desktop: { max: '1440px' },
      desktop_sm: { max: '1300px' },
      laptop_xl: { max: '1200px' },
      laptop: { max: '1024px' },
      tablet: { max: '768px' },
      mobile: { max: '576px' },
    },
  },
  plugins: [],
}
