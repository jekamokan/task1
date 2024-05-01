// eslint-disable-next-line no-undef
const {  mauve } = require('@radix-ui/colors');
/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      ...mauve,

    },
  },
  keyframes: {
    slideUpAndFade: {
      '0%': { opacity: '0', transform: 'translateY(2px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    slideRightAndFade: {
      '0%': { opacity: '0', transform: 'translateX(-2px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    slideDownAndFade: {
      '0%': { opacity: '0', transform: 'translateY(-2px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    slideLeftAndFade: {
      '0%': { opacity: '0', transform: 'translateX(2px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    
  },
  animation: {
    slideUpAndFade: 'slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
    slideDownAndFade: 'slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
    slideRightAndFade: 'slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
    slideLeftAndFade: 'slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];