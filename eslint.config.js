import reactESLint from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import tanstackRouter from "@tanstack/eslint-plugin-router";
import prettier from "eslint-plugin-prettier/recommended";
import reactConfig from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
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
      globals: globals.browser,
      parser: tseslint.parser,
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
