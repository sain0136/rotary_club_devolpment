module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:9222',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}
