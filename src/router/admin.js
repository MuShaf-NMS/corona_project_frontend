import Registrasi from '../views/admin/admin/Registrasi'
import UpdateAdmin from '../views/admin/admin/UpdateAdmin'
import DaftarAdmin from '../views/admin/admin/DaftarAdmin'
import DaftarSiswa from '../views/admin/siswa/DaftarSiswa'
import DaftarSiswaKelas from '../views/admin/siswa/DaftarSiswaKelas'
import ProfileAdmin from '../views/admin/admin/ProfileAdmin'
import UpdateUsernameAdmin from '../views/admin/admin/UpdateUsernameAdmin'
import UpdatePasswordAdmin from '../views/admin/admin/UpdatePasswordAdmin'
import TambahMateri from '../views/admin/materi/TambahMateri'
import DaftarMateriKelas from '../views/admin/materi/DaftarMateriKelas'
import DaftarMateriMapel from '../views/admin/materi/DaftarMateriMapel'
import UpdateMateri from '../views/admin/materi/UpdateMateri'
import RegistrasiSiswa from '../views/admin/siswa/RegistrasiSiswa'
import UpdateSiswa from '../views/admin/siswa/UpdateSiswa'
import BuatSoal from '../views/admin/soal/BuatSoal'
import DetailSoal from '../views/admin/soal/DetailSoal'
import DaftarSoal from '../views/admin/soal/DaftarSoal'
import DaftarHasil from '../views/admin/DaftarHasil'
import DaftarKelas from '../views/admin/kelas/DaftarKelas'
import DaftarKelasCabang from '../views/admin/kelas/DaftarKelasCabang'
import TambahKelas from '../views/admin/kelas/TambahKelas'
import UpdateKelas from '../views/admin/kelas/UpdateKelas'
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
            component: DaftarMateriKelas,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/daftar-materi/:kelas',
            name: 'Daftar Materi Kelas',
            component: DaftarMateriMapel,
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
        },
        {
            path: '/kelas',
            name: 'Daftar Kelas',
            component: DaftarKelas,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/kelas/:kelas',
            name: 'Daftar Kelas Cabang',
            component: DaftarKelasCabang,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/tambah-kelas',
            name: 'Tambah Kelas',
            component: TambahKelas,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/update-kelas/:uuid',
            name: 'Update Kelas',
            component: UpdateKelas,
            meta: {
                adminAuthenticated: true
            }
        }
    ]
}

export default admin