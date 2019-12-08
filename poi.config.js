module.exports = {
  configureWebpack: {
    resolve: {
      // Setup the preact/compat layer
      alias: {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      },
    },
  },
};
