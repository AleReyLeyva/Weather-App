module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#100E1D",
      secondary: "#1E213A",
      gray: {
        300: "#E7E7EB",
        400: "#A09FB1",
        500: "#6E707A",
        600: "#88869D, ",
      },
      white: "#fff",
      transparent: "transparent",
      blue: "#3C47E9",
      yellow: "#FFEC65",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
