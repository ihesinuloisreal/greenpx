/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "accent-2": "var(--accent-2)",
          "accent-color": "var(--accent-color)",
          "dark-color": "var(--dark-color)",
          "primary-color": "var(--primary-color)",
          "primary-color-90": "var(--primary-color-90)",
        },
        fontFamily: {
          "body-text-bold": "var(--body-text-bold-font-family)",
          "body-text-regular": "var(--body-text-regular-font-family)",
          "image-label": "var(--image-label-font-family)",
          "nav-bar-text-bold": "var(--nav-bar-text-bold-font-family)",
          "nav-bar-text-regular": "var(--nav-bar-text-regular-font-family)",
          "type-headline": "var(--type-headline-font-family)",
          "type-subheadline": "var(--type-subheadline-font-family)",
        },
        boxShadow: {
          "buttons-color-default": "var(--buttons-color-default)",
          "buttons-color-hover": "var(--buttons-color-hover)",
          "buttons-white-default": "var(--buttons-white-default)",
          "buttons-white-hover": "var(--buttons-white-hover)",
          "cards-long-default": "var(--cards-long-default)",
          "cards-long-hover": "var(--cards-long-hover)",
          "cards-short-default": "var(--cards-short-default)",
          "cards-short-hover": "var(--cards-short-hover)",
          "icons-blue": "var(--icons-blue)",
          "icons-orange": "var(--icons-orange)",
          "icons-purple": "var(--icons-purple)",
          "icons-teal": "var(--icons-teal)",
          "icons-white-shadow": "var(--icons-white-shadow)",
          "icons-yellow": "var(--icons-yellow)",
          "illustration-bottom": "var(--illustration-bottom)",
          "illustration-top": "var(--illustration-top)",
          "images-long": "var(--images-long)",
          "images-medium": "var(--images-medium)",
          "images-short": "var(--images-short)",
        },
      },
    },
    plugins: [],
  };
  