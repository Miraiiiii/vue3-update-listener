/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-27 18:19:56
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-28 16:35:22
 */
import { createApp } from 'vue'
import App from './App.vue'

// import ListenVersion from '../lib/vue3-update-listener.umd.min'
// import '../lib/vue3-update-listener.css'
import ListenVersion from '../packages/updateListener'
import '../packages/updateListener/theme-chalk/index.scss'

createApp(App).use(ListenVersion, {
  interval: 5 * 1000
}).mount('#app')
