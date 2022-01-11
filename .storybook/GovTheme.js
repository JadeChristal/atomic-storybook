// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export default create({
  colorSecondary: "#1351B4",

  // UI
  appBg: "#f8f8f8",
  appContentBg: "#f8f8f8",
  appBorderColor: "#ffffff",
  appBorderRadius: 4,

  // Toolbar default and active colors
  barTextColor: "#f8f8f8",
  barSelectedColor: "#ffffff",
  barBg: "#0C326F",

  // Form colors
  inputBg: "pink",
  inputBorder: "purple",
  inputTextColor: "hotpink",
  inputBorderRadius: 4,

  fontBase: '"Rawline", sans-serif',

  base: "light",
  brandTitle: "Governo Federal",
  brandUrl: "https://dsgov.estaleiro.serpro.gov.br/ds/home",
  brandImage: "https://dsgov.estaleiro.serpro.gov.br/assets/img/govbr-logo.png",
});
