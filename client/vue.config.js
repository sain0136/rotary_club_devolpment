module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://bgwz0156sspovhk22599.cleaver.rocks',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}