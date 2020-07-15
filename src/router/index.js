import Vue from 'vue'
import VueRouter from 'vue-router'
import Registrasi from '../views/admin/Registrasi'
import UpdateAdmin from '../views/admin/UpdateAdmin'
import DaftarAdmin from '../views/admin/DaftarAdmin'
import DaftarSiswa from '../views/admin/DaftarSiswa'
import ProfileAdmin from '../views/admin/ProfileAdmin'
import UpdateUsernameAdmin from '../views/admin/UpdateUsernameAdmin'
import UpdatePasswordAdmin from '../views/admin/UpdatePasswordAdmin'
import TambahMateri from '../views/admin/TambahMateri'
import RegistrasiSiswa from '../views/admin/RegistrasiSiswa'
import UpdateSiswa from '../views/admin/UpdateSiswa'
import ProfileSiswa from '../views/siswa/ProfileSiswa'
import UpdateUsernameSiswa from '../views/siswa/UpdateUsernameSiswa'
import UpdatePasswordSiswa from '../views/siswa/UpdatePasswordSiswa'
import Materi from '../views/siswa/Materi'
import BuatSoal from '../views/admin/BuatSoal'
import Soal from '../views/siswa/Soal'
import DetailSoal from '../views/admin/DetailSoal'
import JawabSoal from '../views/siswa/JawabSoal'
import DaftarSoal from '../views/admin/DaftarSoal'
import DetailMateri from '../views/siswa/DetailMateri'
import Login from '../views/Login'
import LayoutAdmin from '../container/admin/LayoutAdmin'
import LayoutSiswa from '../container/siswa/LayoutSiswa'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    redirect: '/daftar-soal',
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
        path: '/update-admin/:id',
        name: 'Update Admin',
        component: UpdateAdmin,
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
        path: '/daftar-siswa',
        name: 'Daftar Siswa',
        component: DaftarSiswa,
        meta: {
          adminAuthenticated: true
        }
      },
      {
        path: '/admin/profile/:id',
        name: 'Profile Admin',
        component: ProfileAdmin,
        meta: {
          adminAuthenticated: true
        }
      },
      {
        path: '/admin/update-username/:id',
        name: 'Update Username Admin',
        component: UpdateUsernameAdmin,
        meta: {
          adminAuthenticated: true
        }
      },
      {
        path: '/admin/update-password/:id',
        name: 'Update Password Admin',
        component: UpdatePasswordAdmin,
        meta: {
          adminAuthenticated: true
        }
      },
      {
        path: '/tambah-materi',
        name: 'Tambah Materi',
        component: TambahMateri,
        meta: {
          adminAuthenticated: true
        }
      },
      {
        path: '/buat-soal',
        name: 'Buat Soal',
        component: BuatSoal,
        meta: {
          adminAuthenticated: true
        }
      },
      {
        path: '/daftar-soal',
        name: 'Daftar Soal',
        component: DaftarSoal,
        meta: {
          adminAuthenticated: true
        }
      },
      {
        path: '/soal/:kelas/:mapel/:materi',
        name: 'Detail Soal',
        component: DetailSoal,
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
      },
      {
        path: '/update-siswa/:id',
        name: 'Update Siswa',
        component: UpdateSiswa,
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
        path: '/siswa/profile/:id',
        name: 'Profile Siswa',
        component: ProfileSiswa,
        meta: {
          siswaAuthenticated: true
        }
      },
      {
        path: '/siswa/update-username/:id',
        name: 'Update Username Siswa',
        component: UpdateUsernameSiswa,
        meta: {
          siswaAuthenticated: true
        }
      },
      {
        path: '/siswa/update-password/:id',
        name: 'Update Password Siswa',
        component: UpdatePasswordSiswa,
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
      },
      {
        path: '/siswa/daftar-soal/:kelas',
        name: 'Soal',
        component: Soal,
        meta: {
          siswaAuthenticated: true
        }
      },
      {
        path: '/siswa/jawab-soal/:kelas/:mapel/:materi',
        name: 'Jawab Soal',
        component: JawabSoal,
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
