/** @type {import('tailwindcss').Config} */
import { radixColorFactory } from "./src/lib/utils";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,

      ...radixColorFactory({
        base: "gray",
        grass: "grass",
        indigo: "indigo",
        ruby: "ruby",
        plum: "plum",
        violet: "violet",
        teal: "teal",
        tomato: "tomato",
      }),
    }),

    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
