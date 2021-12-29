module.exports = {
  // 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
  root: true,
  // 추가적인 규칙들을 적용
  env: {
    node: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier', 'plugin:prettier/recommended'],
  // 코드 정리 플러그인 추가
  plugins: ['prettier', 'vue'],
  // 사용자 편의 규칙 추가
  rules: {
    'no-console': 'error',
    'vue/no-unused-vars': 'error',
  },
};
