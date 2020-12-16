import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
      // {
      //   path: '/subapp/vue2',
      //   name: 'error',
      //   component: Home
      // }
      // { path: '*', redirect: '/' }
    ]
  },
  // { path: '/:catchAll(.*)', redirect: '/' }
  { path: '/:catchAll(.*)', component: Home }
  // {
  //   path: '/subapp/vue2',
  //   name: 'Home',
  //   component: Home
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
