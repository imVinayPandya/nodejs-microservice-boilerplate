module.exports = {
  root: true, // make to not take in any user specified rules in parent folders
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'trailingComma': 'es5',
        'singleQuote': true,
        'printWidth': 120,
        'tabWidth': 2,
        'useTabs': false
      }
    ],
    'no-underscore-dangle': 0
  },
  plugins: [
    'prettier'
  ]
};