module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target:
          'http://74.208.135.85:9222',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}
