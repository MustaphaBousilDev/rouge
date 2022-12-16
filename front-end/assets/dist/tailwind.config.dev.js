"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../*.html'],
  theme: {
    screens: {
      sm: '280px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'while': '#fff',
      'color-gray-dark': '#262626',
      'color-red-button': '#ef4444',
      'color-gray-background-light': '#d4d4d8',
      'color-rating': '#f59e0b'
    },
    extend: {}
  },
  plugins: []
};