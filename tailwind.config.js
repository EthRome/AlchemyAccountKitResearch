import { withAccountKitUi, createColorSet } from "@account-kit/react/tailwind";

// wrap your existing tailwind config with 'withAccountKitUi'
export default withAccountKitUi({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}, {
  // override account kit themes
  colors: {
    "btn-primary": createColorSet("#363FF9", "#9AB7FF"),
    "fg-accent-brand": createColorSet("#363FF9", "#9AB7FF"),
  },
})