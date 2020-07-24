module.exports = {
  presets: [
    [
      'poi/babel',
      {
        jsx: 'preact',
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-react-remove-prop-types'],
    },
  },
}
