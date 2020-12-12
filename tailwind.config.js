module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        accent: "var(--color-bg-accent)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
    listStyleType: {
      none: 'none',
      square: 'square',
      roman: 'upper-roman',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
