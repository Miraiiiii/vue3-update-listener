/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-27 18:19:56
 * @LastEditors: 舌红
 * @LastEditTime: 2024-04-28 14:03:18
 */
const { defineConfig } = require('@vue/cli-service')

const timeStamp = new Date().getTime()
module.exports = defineConfig({
  transpileDependencies: true,
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
