import { defineConfig, globalIgnores } from "eslint/config";

import javascriptESLint from "@eslint/js";
import globals from "globals";
import typescriptESLint from "typescript-eslint";

import reactESLint from "@eslint-react/eslint-plugin";
import tanstackRouter from "@tanstack/eslint-plugin-router";
import prettier from "eslint-plugin-prettier/recommended";
import reactConfig from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      javascriptESLint.configs.recommended,
      typescriptESLint.configs.strictTypeChecked,
      typescriptESLint.configs.stylisticTypeChecked,

      reactHooks.configs.flat["recommended-latest"],
      reactRefresh.configs.vite,
      reactESLint.configs["strict-type-checked"],
      tanstackRouter.configs["flat/recommended"],
      prettier,
    ],

    plugins: {
      react: reactConfig,
    },

    rules: {
      ...reactConfig.configs.recommended.rules,
      ...reactConfig.configs["jsx-runtime"].rules,
      "react/react-in-jsx-scope": "off",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
    
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser
      },
      parser: typescriptESLint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
]);
