module.exports = {
  modulePathIgnorePatterns: ['./build'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
}
