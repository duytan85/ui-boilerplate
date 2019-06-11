module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: [],
  parser: 'babel-eslint',
  rules: {},
  globals: {
    __DEV__: true,
    window: true,
    console: true,
    global: true,
    process: true,
    __dirname: true,
    document: true,
    require: true,
    module: true,
    jest: true,
    describe: true,
    it: true,
    expect: true
  }
};
