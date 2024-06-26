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
        mobile: '576px',
        tablet: '768px',
        laptop: '1024px',
        laptop_xl: '1200px',
        desktop_sm: '1300px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}
