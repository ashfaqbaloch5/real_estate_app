/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:
      {
        rebik :['Rubik-Regular', 'sans-serif'],
        "rebik-bold" :['Rubik-Bold', 'sans-serif'],
        "rebik-extrabold" :['Rubik-ExtraBold', 'sans-serif'],
        "rebik-medium" :['Rubik-Medium', 'sans-serif'],
        "rebik-semibold" :['Rubik-SemiBold', 'sans-serif'],
        "rebik-light" :['Rubik-Light', 'sans-serif'],
      },
      colors: {
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF",
        },
        accent :
        {
          100: "#FBFBFD",
        },
        black:
        {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191d31",
        },
        danger: "#F75555"
      },

    },
  },
  plugins: [],
}

