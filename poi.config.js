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
  entry: [
	  'src/index.jsx'
  ],
  // Config for Now deployment
  output: {
	  dir: 'public',
	  html: {
		  template: 'src/public/index.html',
		  title: 'My Little Pony'
	  },
	  clean: false
  }
};
