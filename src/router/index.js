import Vue from 'vue'
import VueRouter from 'vue-router'
import Registrasi from '../views/Registrasi'
import RegistrasiSiswa from '../views/RegistrasiSiswa'
import Login from '../views/Login'
import LayoutAdmin from '../container-admin/LayoutAdmin'
import LayoutSiswa from '../container-siswa/LayoutSiswa'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/register',
    name: 'Home',
    component: LayoutAdmin,
    children: [
      {
        path: '/register',
        name: 'Register',
        component: Registrasi
      }
    ]
  },
  {
    path: '/siswa',
    redirect: '/siswa/register',
    name:'Siswa',
    component: LayoutSiswa,
    children: [
      {
        path: '/siswa/register',
        name: 'Register',
        component: RegistrasiSiswa
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
