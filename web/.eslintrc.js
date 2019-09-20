module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    indent: 0,
    'jsx-quotes': 0,
    'react/prop-types': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
