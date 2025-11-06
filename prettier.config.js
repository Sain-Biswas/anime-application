// prettier.config.js

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],

  semi: true,
  quoteProps: "as-needed",
  arrowParens: "always",
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: "strict",
  singleAttributePerLine: true,
  trailingComma: "none",

  tailwindStylesheet: "./src/index.css",
  tailwindFunctions: ["cva", "cn", "clsx", "twMerge"],
};
