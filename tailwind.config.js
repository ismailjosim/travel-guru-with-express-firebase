/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d65e02",

          "secondary": "#47eddf",

          "accent": "#8c77f4",

          "neutral": "#25263C",

          "base-100": "#35445F",

          "info": "#66B8D6",

          "success": "#23AF8C",

          "warning": "#EFC12A",

          "error": "#EB6760",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
