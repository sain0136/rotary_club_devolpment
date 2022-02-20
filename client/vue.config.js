module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target:
          'http://127.0.0.1:9222/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}
