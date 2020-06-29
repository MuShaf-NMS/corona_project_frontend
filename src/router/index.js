import Vue from 'vue'
import VueRouter from 'vue-router'
//import store from '../store'
import Registrasi from '../views/admin/Registrasi'
import TambahMateri from '../views/admin/TambahMateri'
import RegistrasiSiswa from '../views/siswa/RegistrasiSiswa'
import Login from '../views/Login'
import LayoutAdmin from '../container/admin/LayoutAdmin'
import LayoutSiswa from '../container/siswa/LayoutSiswa'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/register-admin',
    name: 'Home',
    component: LayoutAdmin,
    children: [
      {
        path: '/register-admin',
        name: 'Register Admin',
        component: Registrasi,
        meta: {
          authenticated: true
        }
      },
      {
        path: '/tambahmateri',
        name: 'Tambah Materi',
        component: TambahMateri,
      },
      {
        path: '/register-siswa',
        name: 'Register Siswa',
        component: RegistrasiSiswa,
      }
    ]
  },
  {
    path: '/siswa',
    redirect: '/siswa/register',
    name: 'Siswa',
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
