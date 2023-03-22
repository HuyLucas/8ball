// Use '@netlify/eslint-config-node/esm' if the repository is using pure ES modules
const { overrides } = require('@netlify/eslint-config-node')

module.exports = {
  extends: '@netlify/eslint-config-node',
  rules: {},
  overrides: [...overrides],
}
