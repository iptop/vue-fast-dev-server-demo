import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import foo from './modules/foo'
Vue.use(VueRouter)
const routes = [
  ...foo,
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
