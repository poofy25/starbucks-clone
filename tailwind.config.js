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
      screens: {
        mobile: '577px',
        tablet: '769px',
        laptop: '1025px',
        laptop_xl: '1201px',
        desktop_sm: '1301px',
        desktop: '1441px',
      },
    },
  },
  plugins: [],
}
