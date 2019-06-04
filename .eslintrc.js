module.exports = {
  extends: 'airbnb',
  plugins: [],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': 0,
    'max-len': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': [ 'error', { 'props': false }],
    'react/no-danger': 0,
    'no-console': [ 'error', { 'allow': [ 'error', 'info', 'warn' ]}],
    'func-names': ['error', 'never']
  },
  globals: {
    __DEV__: true,
    window: true,
    document: true,
    jest: true,
    describe: true,
    it: true,
    expect: true
  }
};
