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
      maxWidth: {
        base: "1390px",
      },
      colors: {
        orange: "#e75420",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
