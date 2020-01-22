import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackMode: "lazy" */ '@/views/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
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

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"] // add more paths to this array
  const authRequired = !publicPages.includes(to.path)
  // console.log(store.getters.bearer)
  const isLoggedIn = store.getters.bearer
  // eslint-disable-next-line no-console
  console.log(isLoggedIn)

  if (authRequired && !isLoggedIn) {
    return next('/login');
  }

  next();
})

export default router
