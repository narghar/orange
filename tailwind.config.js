module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: "futura-pt, sans-serif",
      },
      fontSize: {
        "15p": "15px",
      },
      margin: {
        13: "3.25rem"
      },
      screens: {
        base: "1390px"
      },
      maxWidth: {
        base: "1390px",
      },
      colors: {
        orange: "#e75420",
        "orange-light": "#f25822",
        "gray-light": "#f7f7f7",
        "gray-dark": "#6b6b6b",
        "gray-darker": "#8c8c8c"
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
