/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)',
        Facebook: 'hsl(208, 92%, 53%)',
        Twitter: 'hsl(203, 89%, 53%)',
        YouTube: 'hsl(348, 97%, 39%)',
        toggleLight: 'hsl(230, 22%, 74%)',
        veryDarkBlue: 'hsl(230, 17%, 14%)',
        topVeryDarkBlue: 'hsl(232, 19%, 15%)',
        cardDarkDesaturatedBlue: 'hsl(228, 28%, 20%)',
        textDesaturatedBlue: 'hsl(228, 34%, 66%)',
        topVeryPaleBlue: 'hsl(225, 100%, 98%)',
        lightGrayishBlue: 'hsl(227, 47%, 96%)',
        darkGrayishBlue: 'hsl(228, 12%, 44%)',
        veryDarkBlue: 'hsl(230, 17%, 14%)',
      }
    },
  },
  plugins: [],
}