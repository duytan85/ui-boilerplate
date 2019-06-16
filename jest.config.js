module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}'
  ],
  coverageDirectory: '<rootDir>/test/test_coverage/',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/config/',
    '/stubs/',
    '/__tests__/scenarios.js',
    '/test_coverage/',
    '/dist/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/config/',
    '/stubs/',
    '/test_coverage/',
    '/dist/'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$' : '<rootDir>/stubs/jest/file-mock.js',
    '^[./a-zA-Z0-9$_-]+\\.scss$': '<rootDir>/stubs/jest/style-mock.js'
  },
  roots: [
    'src/'
  ],
  testRegex: '(/__tests__/.*(test|spec)).jsx?$'
}
