module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        Tajawal: ["Tajawal", "sans-serif"],
      },
      colors: {
        light: "#F3F7F9",
      },
      animation: {
        "up-down": "updown 2s ease-in-out infinite alternate-reverse both",
      },
      keyframes: {
        updown: {
          "0%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
