import Registrasi from '../views/admin/Registrasi'
import UpdateAdmin from '../views/admin/UpdateAdmin'
import DaftarAdmin from '../views/admin/DaftarAdmin'
import DaftarSiswa from '../views/admin/DaftarSiswa'
import DaftarSiswaKelas from '../views/admin/DaftarSiswaKelas'
import ProfileAdmin from '../views/admin/ProfileAdmin'
import UpdateUsernameAdmin from '../views/admin/UpdateUsernameAdmin'
import UpdatePasswordAdmin from '../views/admin/UpdatePasswordAdmin'
import TambahMateri from '../views/admin/TambahMateri'
import DaftarMateri from '../views/admin/DaftarMateri'
import UpdateMateri from '../views/admin/UpdateMateri'
import RegistrasiSiswa from '../views/admin/RegistrasiSiswa'
import UpdateSiswa from '../views/admin/UpdateSiswa'
import BuatSoal from '../views/admin/BuatSoal'
import DetailSoal from '../views/admin/DetailSoal'
import DaftarSoal from '../views/admin/DaftarSoal'
import DaftarHasil from '../views/admin/DaftarHasil'
import Hasil from '../views/admin/Hasil'
import LayoutAdmin from '../container/admin/LayoutAdmin'

const admin = {
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
            path: '/daftar-siswa/:kelas',
            name: 'Daftar Siswa Kelas',
            component: DaftarSiswaKelas,
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
            path: '/daftar-materi',
            name: 'Daftar Materi',
            component: DaftarMateri,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/detail-materi/:id',
            name: 'Update Materi',
            component: UpdateMateri,
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
        },
        {
            path: '/skor',
            name: 'Daftar Skor',
            component: DaftarHasil,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/skor/:materi',
            name: 'Skor',
            component: Hasil,
            meta: {
                adminAuthenticated: true
            }
        }
    ]
}

export default admin