module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_7f: "#ffffff7f" },
        light_blue: { A700: "#007bff" },
        black: { 900: "#000000", "900_e5": "#000000e5", "900_7f": "#0000007f" },
        gray: {
          100: "#f7f7f7",
          200: "#efefef",
          500: "#999999",
          600: "#6c757d",
          800: "#404040",
          "600_01": "#797979",
          "600_02": "#7e7e7e",
        },
        blue_gray: { "900_01": "#2c2c2c" },
        green: { 600: "#28a745" },
      },
      boxShadow: { xs: "0px 4px 4px 0px #0000003f", sm: "4px 1px 4px 0px #0000003f" },
      fontFamily: { inter: "Inter", prompt: "Prompt" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #28a745b2,#007bffb2)",
        gradient1: "linear-gradient(90deg, #28a745,#007bff)",
      },
      opacity: { 0.3: 0.3 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
