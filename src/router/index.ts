import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Login
  },
  {
    path: '/spa',
    name: 'spa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "spa" */ '@/views/Index.vue')
  },
  // otherwise redirect to home
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
