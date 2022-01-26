import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../Page/Home.vue'
import Product from './../Page/Product'
import Cart from './../Page/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
