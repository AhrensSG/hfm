/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "payment-button-gradient": "radial-gradient(103.95% 1413.54% at -3.95% 100%, #0C1660 0%, #111C68 52.83%, #1B2467 100%)",
        "payment-button-gradient-hover": "radial-gradient(103.95% 1413.54% at -3.95% 100%, #0d1870 0%, #121d78 52.83%, #1c266f 100%)",
        "banner-guest-home": "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0.5%, rgba(0, 0, 0, 0.7) 86%)",
        "offers": "linear-gradient(180deg, #FFF06D 50%, #999041 100%)",
        "type-room-gradient": "linear-gradient(270deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.53) 72.82%)"
      },
      colors: {
        "gris-español": "#919191",
        "licorice-black": "#171412",
        "white-nav": "#ffffff",
        "resolution-blue": "#0E1863",
        "gris-antracita": "#3E3E3E",
      },
    },
    boxShadow: {
      "google-auth": "0px 2px 3px 0px rgba(0, 0, 0, 0.2)",
      "reservation-list": "0px 0px 16px 0px #0000000F",
      "reservation-drop": "0px 2px 3px 0px #6B6B6B2A"
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
};
