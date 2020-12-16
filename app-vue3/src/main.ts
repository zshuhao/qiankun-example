import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

registerMicroApps([
  {
    name: 'vue2 app', // app name registered
    entry: 'http://localhost:7101/',
    container: '#vue-2',
    activeRule: '#/subapp/vue2'
  }
])
start()

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
