import axios from 'axios'
import { url } from '../index'
import store from '../../store'

const user = {
    deleteAdmin: (uuid) => {
        return axios.delete(`${url}/delete-admin/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    deleteSiswa: (uuid) => {
        return axios.delete(`${url}/delete-siswa/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    deleteSoal: (uuid) => {
        return axios.delete(`${url}/delete-soal/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    deleteMateri: (uuid) => {
        return axios.delete(`${url}/delete-materi/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getUser: () => {
        return axios.get(`${url}/daftar-admin`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    materi: (uuid_kelas,uuid_mapel) => {
        return axios.get(`${url}/materi/${uuid_kelas}/${uuid_mapel}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getMateri: () => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/daftar-materi/admin`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/daftar-materi/${store.getters.getUser.uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getMateriKelas: (kelas) => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/daftar-materi/admin/${kelas}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/daftar-materi/${store.getters.getUser.uuid}/${kelas}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getMateriKelasCabang: (kelas,cabang) => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/daftar-materi/admin/${kelas}/${cabang}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/daftar-materi/${store.getters.getUser.uuid}/${kelas}/${cabang}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getMateriMapel(kelas,cabang,mapel){
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/daftar-materi/admin/${kelas}/${cabang}/${mapel}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/daftar-materi/${store.getters.getUser.uuid}/${kelas}/${cabang}/${mapel}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getDaftarSkor: () => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/skor/admin`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/skor/${store.getters.getUser.uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSkor: (uuid_materi) => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/skor/admin/${uuid_materi}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/skor/${store.getters.getUser.uuid}/${uuid_materi}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSiswa: (kelas,cabang) => {
        return axios.get(`${url}/daftar-siswa/${kelas}/${cabang}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSiswaKelas: (kelas) => {
        return axios.get(`${url}/siswa/${kelas}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSiswaKelasCabang: (kelas,cabang) => {
        return axios.get(`${url}/siswa/${kelas}/${cabang}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getProfile: (uuid) => {
        return axios.get(`${url}/profile-admin/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getUsername: (uuid) => {
        return axios.get(`${url}/update-username-admin/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateUsername: (uuid, data) => {
        return axios.put(`${url}/update-username-admin/${uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updatePassword: (uuid, data) => {
        return axios.put(`${url}/update-password-admin/${uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    addUser: (data) => {
        return axios.post(`${url}/tambahadmin`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getOneUser: (uuid) => {
        return axios.get(`${url}/update-admin/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateUser: (uuid, data) => {
        return axios.put(`${url}/update-admin/${uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    addSiswa: (data) => {
        return axios.post(`${url}/tambahsiswa`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getOneSiswa: (uuid) => {
        return axios.get(`${url}/update-siswa/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateSiswa: (uuid, data) => {
        return axios.put(`${url}/update-siswa/${uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    addMateri: (data) => {
        return axios.post(`${url}/tambahmateri/${store.getters.getUser.uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getDetailMateri: (uuid) => {
        return axios.get(`${url}/materi/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateMateri: (uuid, data) => {
        return axios.put(`${url}/update-materi/${uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    addSoal: (data) => {
        return axios.post(`${url}/tambah-soal/${store.getters.getUser.uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSoal: () => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/daftar-soal/admin`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/daftar-soal/${store.getters.getUser.uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSoalKelas: (kelas) => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/daftar-soal/admin/${kelas}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/daftar-soal/${store.getters.getUser.uuid}/${kelas}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSoalKelasCabang: (kelas,cabang) => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/daftar-soal/admin/${kelas}/${cabang}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/daftar-soal/${store.getters.getUser.uuid}/${kelas}/${cabang}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSoalMapel: (kelas,cabang,mapel) => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/daftar-soal/admin/${kelas}/${cabang}/${mapel}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/daftar-soal/${store.getters.getUser.uuid}/${kelas}/${cabang}/${mapel}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getTampilSoal: (uuid_materi) => {
        return axios.get(`${url}/tampil-soal/${uuid_materi}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getJmlSoal: (uuid_materi) => {
        return axios.get(`${url}/jumlah-soal/${uuid_materi}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateTampilSoal: (uuid_materi,data) => {
        return axios.put(`${url}/tampil-soal/${uuid_materi}`,data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getCekSoal: (uuid_materi) => {
        return axios.get(`${url}/ceksoal/${uuid_materi}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateSoal: (uuid_materi, data) => {
        return axios.put(`${url}/ceksoal/${uuid_materi}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getKelas: () => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/kelas/admin`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/kelas/${store.getters.getUser.uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getAmpu: () => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/ampu/admin`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/ampu/${store.getters.getUser.uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getDaftarKelas: () => {
        return axios.get(`${url}/daftar-kelas`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getDaftarKelasCabang: (kelas) => {
        return axios.get(`${url}/daftar-kelas/${kelas}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    addKelas: (data) => {
        return axios.post(`${url}/tambah-kelas`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getOneKelas: (uuid) => {
        return axios.get(`${url}/update-kelas/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateKelas: (uuid,data) => {
        return axios.put(`${url}/update-kelas/${uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    deleteKelas: (uuid) => {
        return axios.delete(`${url}/delete-kelas/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    addMapel: (data) => {
        return axios.post(`${url}/tambah-mapel`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getMapel: () => {
        if (store.getters.getUser.superadmin) {
            return axios.get(`${url}/mapel/admin`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
        }
        return axios.get(`${url}/mapel/${store.getters.getUser.uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getDaftarMapel: () => {
        return axios.get(`${url}/daftar-mapel`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getOneMapel: (uuid) => {
        return axios.get(`${url}/update-mapel/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateMapel: (uuid,data) => {
        return axios.put(`${url}/update-mapel/${uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    deleteMapel: (uuid) => {
        return axios.delete(`${url}/delete-mapel/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    login: (data) => {
        return axios.post(`${url}/login`, data)
    },
    logout: () => {
        return axios.get(`${url}/logout-access-token`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    }
}

export default user