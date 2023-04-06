import React from "react";
import "../src/assests/style.less";
import { withThemeByClassName } from "@storybook/addon-styling";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "rs-theme-dark",
        highContrast: "rs-theme-high-contrast",
      },
      defaultTheme: "light",
      parentSelector: "body",
    }),
  ],
};

export default preview;
