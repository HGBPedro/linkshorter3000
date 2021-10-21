const sassLoader = require('sass-loader')

module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => { return sassLoaderOptions; }
    }
  },
  typescript: {
    enableTypeChecking: true
  }
}