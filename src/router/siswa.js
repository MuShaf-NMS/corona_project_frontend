import ProfileSiswa from '../views/siswa/ProfileSiswa'
import UpdateUsernameSiswa from '../views/siswa/UpdateUsernameSiswa'
import UpdatePasswordSiswa from '../views/siswa/UpdatePasswordSiswa'
import Materi from '../views/siswa/Materi'
import Soal from '../views/siswa/Soal'
import JawabSoal from '../views/siswa/JawabSoal'
import DetailMateri from '../views/siswa/DetailMateri'
import LayoutSiswa from '../container/siswa/LayoutSiswa'

const siswa = {
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
}

export default siswa