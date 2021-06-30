const path = require('path')

module.exports = {
  devServer: {
    before: require('vue-fast-dev-server/devServer')
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/router/modules')
      ],
      loader: 'vue-fast-dev-server'
    })
  }
}
