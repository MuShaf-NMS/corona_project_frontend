import ProfileSiswa from '../views/siswa/ProfileSiswa'
import UpdateUsernameSiswa from '../views/siswa/UpdateUsernameSiswa'
import UpdatePasswordSiswa from '../views/siswa/UpdatePasswordSiswa'
import DaftarMateriKelas from '../views/siswa/DaftarMateriKelas'
import DaftarMateriMapel from '../views/siswa/DaftarMateriMapel'
import DaftarSoalKelas from '../views/siswa/DaftarSoalKelas'
import DaftarSoalMapel from '../views/siswa/DaftarSoalMapel'
import JawabSoal from '../views/siswa/JawabSoal'
import DetailMateri from '../views/siswa/DetailMateri'
import LayoutSiswa from '../container/siswa/LayoutSiswa'

const siswa = {
    path: '/siswa',
    redirect: '/siswa/daftar-materi',
    name: 'Siswa',
    component: LayoutSiswa,
    children: [
        {
            path: '/siswa/daftar-materi',
            name: 'Materi Kelas',
            component: DaftarMateriKelas,
            meta: {
                siswaAuthenticated: true
            }
        },
        {
            path: '/siswa/daftar-materi/:uuid_mapel',
            name: 'Materi Mapel',
            component: DaftarMateriMapel,
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
            path: '/siswa/daftar-soal',
            name: 'Soal Kelas',
            component: DaftarSoalKelas,
            meta: {
                siswaAuthenticated: true
            }
        },
        {
            path: '/siswa/daftar-soal/:uuid_mapel',
            name: 'Soal Mapel',
            component: DaftarSoalMapel,
            meta: {
                siswaAuthenticated: true
            }
        },
        {
            path: '/siswa/jawab-soal/:uuid_materi',
            name: 'Jawab Soal',
            component: JawabSoal,
            meta: {
                siswaAuthenticated: true
            }
        }
    ]
}

export default siswa