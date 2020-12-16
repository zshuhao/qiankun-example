
import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

let instance = null
let router = null

function render (props = {}) {
  const { container } = props

  console.log(container)
  console.log(window.__POWERED_BY_QIANKUN__)
  router = new VueRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? '#/subapp/vue2' : '/',
    // mode: 'history',
    mode: 'hash',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

export async function mount (props: any) {
  console.log('[vue] props from main framework', props)
  // storeTest(props)
  render(props)
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
