module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-strongly-recommended", "eslint:recommended"],
  parserOptions: {},

  rules: {
    "vue/multi-word-component-names": "off",
  },
};