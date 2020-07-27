//admin
import Registrasi from '../views/admin/admin/Registrasi'
import UpdateAdmin from '../views/admin/admin/UpdateAdmin'
import DaftarAdmin from '../views/admin/admin/DaftarAdmin'
import ProfileAdmin from '../views/admin/admin/ProfileAdmin'
import UpdateUsernameAdmin from '../views/admin/admin/UpdateUsernameAdmin'
import UpdatePasswordAdmin from '../views/admin/admin/UpdatePasswordAdmin'
//siswa
import DaftarSiswa from '../views/admin/siswa/DaftarSiswa'
import DaftarSiswaKelas from '../views/admin/siswa/DaftarSiswaKelas'
import DaftarSiswaKelasCabang from '../views/admin/siswa/DaftarSiswaKelasCabang'
import RegistrasiSiswa from '../views/admin/siswa/RegistrasiSiswa'
import UpdateSiswa from '../views/admin/siswa/UpdateSiswa'
//kelas
import DaftarKelas from '../views/admin/kelas/DaftarKelas'
import DaftarKelasCabang from '../views/admin/kelas/DaftarKelasCabang'
import TambahKelas from '../views/admin/kelas/TambahKelas'
import UpdateKelas from '../views/admin/kelas/UpdateKelas'
//mapel
import DaftarMapel from '../views/admin/mapel/DaftarMapel'
import TambahMapel from '../views/admin/mapel/TambahMapel'
import UpdateMapel from '../views/admin/mapel/UpdateMapel'
//materi
import TambahMateri from '../views/admin/materi/TambahMateri'
import DaftarMateri from '../views/admin/materi/DaftarMateri'
import DaftarMateriKelas from '../views/admin/materi/DaftarMateriKelas'
import DaftarMateriKelasCabang from '../views/admin/materi/DaftarMateriKelasCabang'
import DaftarMateriMapel from '../views/admin/materi/DaftarMateriMapel'
import UpdateMateri from '../views/admin/materi/UpdateMateri'
//soal
import BuatSoal from '../views/admin/soal/BuatSoal'
import DetailSoal from '../views/admin/soal/DetailSoal'
import DaftarSoal from '../views/admin/soal/DaftarSoal'
import DaftarSoalKelas from '../views/admin/soal/DaftarSoalKelas'
import DaftarSoalKelasCabang from '../views/admin/soal/DaftarSoalKelasCabang'
import DaftarSoalMapel from '../views/admin/soal/DaftarSoalMapel'
//hasil
import DaftarHasil from '../views/admin/hasil/DaftarHasil'
import Hasil from '../views/admin/hasil/Hasil'
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
            path: '/daftar-siswa/:kelas/:cabang',
            name: 'Daftar Siswa Kelas Cabang',
            component: DaftarSiswaKelasCabang,
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
            path: '/daftar-materi/:kelas',
            name: 'Daftar Materi Kelas',
            component: DaftarMateriKelas,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/daftar-materi/:kelas/:cabang',
            name: 'Daftar Materi Kelas Cabang',
            component: DaftarMateriKelasCabang,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/daftar-materi/:kelas/:cabang/:mapel',
            name: 'Daftar Materi Mapel',
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
            path: '/daftar-soal/:kelas',
            name: 'Daftar Soal Kelas',
            component: DaftarSoalKelas,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/daftar-soal/:kelas/:cabang',
            name: 'Daftar Soal Kelas Cabang',
            component: DaftarSoalKelasCabang,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/daftar-soal/:kelas/:cabang/:mapel',
            name: 'Daftar Soal Mapel',
            component: DaftarSoalMapel,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/detail-soal/:uuid_materi',
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
            path: '/skor/:uuid_materi',
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
        },
        {
            path: '/mapel',
            name: 'Daftar Mapel',
            component: DaftarMapel,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/tambah-mapel',
            name: 'Tambah Mapel',
            component: TambahMapel,
            meta: {
                adminAuthenticated: true
            }
        },
        {
            path: '/update-mapel/:uuid',
            name: 'Update Mapel',
            component: UpdateMapel,
            meta: {
                adminAuthenticated: true
            }
        }
    ]
}

export default admin