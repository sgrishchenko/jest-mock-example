module.exports = {
  presets: [
    '@babel/env',
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    test: {
      plugins: [
        'babel-plugin-dynamic-import-node',
      ]
    }
  }
};