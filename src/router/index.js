import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import admin from './admin'
import siswa from './siswa'

Vue.use(VueRouter)

const routes = [
  admin,
  siswa,
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
