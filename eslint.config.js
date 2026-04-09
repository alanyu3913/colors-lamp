module.exports = [
  {
    files: ["public/js/**/*.js"],
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        XMLHttpRequest: "readonly",
        define: "readonly",
        document: "readonly",
        module: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "no-undef": "error",
      "no-unused-vars": "off",
    },
  },
];
