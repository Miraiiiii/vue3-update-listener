/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-19 13:36:46
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-27 18:36:42
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    "vue/no-multiple-template-root": "off"
  }
}