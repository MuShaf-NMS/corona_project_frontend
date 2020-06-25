import Vue from 'vue'
import VueRouter from 'vue-router'
import Registrasi from '../views/Registrasi'
import RegistrasiSiswa from '../views/RegistrasiSiswa'
import Login from '../views/Login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/admin/register',
    name: 'register',
    component: Registrasi
  },
  {
    path: '/siswa/register',
    name: 'register_siswa',
    component: RegistrasiSiswa
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
