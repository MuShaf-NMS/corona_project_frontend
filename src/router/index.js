import Vue from 'vue'
import VueRouter from 'vue-router'
//import store from '../store'
import Registrasi from '../views/admin/Registrasi'
import DaftarAdmin from '../views/admin/DaftarAdmin'
import TambahMateri from '../views/admin/TambahMateri'
import RegistrasiSiswa from '../views/admin/RegistrasiSiswa'
import Materi from '../views/siswa/Materi'
import DetailMateri from '../views/siswa/DetailMateri'
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
          adminAuthenticated: true
        }
      },
      {
        path: '/daftar-admin',
        name: 'Daftar Admin',
        component: DaftarAdmin,
        meta: {
          adminAuthenticated: true
        }
      },
      {
        path: '/tambahmateri',
        name: 'Tambah Materi',
        component: TambahMateri,
        meta: {
          adminAuthenticated: true
        }
      },
      {
        path: '/register-siswa',
        name: 'Register Siswa',
        component: RegistrasiSiswa,
        meta: {
          adminAuthenticated: true
        }
      }
    ]
  },
  {
    path: '/siswa',
    redirect: '/siswa/materi',
    name: 'Siswa',
    component: LayoutSiswa,
    children: [
      {
        path: '/siswa/materi',
        name: 'Materi',
        component: Materi,
        meta: {
          siswaAuthenticated: true
        }
      },
      {
        path: '/siswa/materi/:id',
        name: 'Detail Materi',
        component: DetailMateri,
        meta: {
          siswaAuthenticated: true
        }
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
