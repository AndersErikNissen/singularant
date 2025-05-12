/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors: {
      brand: {
        50: "#fff1f2",
        100: "#ffdfe2",
        200: "#ffc5ca",
        300: "#ff9da5",
        400: "#ff6471",
        500: "#ff4655",
        600: "#ed1527",
        700: "#c80d1c",
        800: "#a50f1b",
        900: "#88141d",
        950: "#4b040a",
      },
    },
    fontFamily: {
      body: ["DM Sans", "sans-serif"],
    },
    extend: {
      animation: {
        "home-hero": "home-hero 10s ease-in-out infinite",
      },
      keyframes: {
        "home-hero": {
          "50%": {
            transform: "scale(0.9) translateY(10%)",
          },
        },
      },
    },
  },
};
