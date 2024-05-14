/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-27 18:19:56
 * @LastEditors: 舌红
 * @LastEditTime: 2024-05-13 11:20:28
 */
const { defineConfig } = require('@vue/cli-service')

const timeStamp = new Date().getTime()
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'lib',
  assetsDir: 'static',
  configureWebpack: {
    entry: './packages/index.js',
    output: {
      library: 'vue3-update-listener',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'this'
    }
  }
})
