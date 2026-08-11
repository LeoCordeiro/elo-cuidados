const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // Relativo: o mesmo dist/ serve na raiz do Netlify e num subdiretorio de preview.
  publicPath: '',
  productionSourceMap: false,
  pluginOptions: {
    vuetify: {}
  }
})
