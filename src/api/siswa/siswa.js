import axios from 'axios'
import store from '../../store'
import { url } from '../index'

const siswa = {
    getProfile: (uuid) => {
        return axios.get(`${url}/profile-siswa/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getUsername: (uuid) => {
        return axios.get(`${url}/update-username-siswa/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateUsername: (uuid, data) => {
        return axios.put(`${url}/update-username-siswa/${uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updatePassword: (uuid, data) => {
        return axios.put(`${url}/update-password-siswa/${uuid}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getMateriKelas: () => {
        return axios.get(`${url}/daftar-materi-siswa/${store.getters.getUser.uuid_kelas}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getMateriMapel: (uuid_mapel) => {
        return axios.get(`${url}/daftar-materi-siswa/${store.getters.getUser.uuid_kelas}/${uuid_mapel}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getDetailMateri: (uuid) => {
        return axios.get(`${url}/materi/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSoalKelas: () => {
        return axios.get(`${url}/daftar-soal-siswa/${store.getters.getUser.uuid_kelas}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSoalMapel: (uuid_mapel) => {
        return axios.get(`${url}/daftar-soal-siswa/${store.getters.getUser.uuid_kelas}/${uuid_mapel}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getJmlSoal: (uuid_materi) => {
        return axios.get(`${url}/jumlah-soal/${uuid_materi}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getDaftarSoal: (kelas) => {
        return axios.get(`${url}/soal/${kelas}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSoal: (uuid_materi) => {
        return axios.get(`${url}/jawab-soal/${uuid_materi}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getOneSoal: (uuid) => {
        return axios.get(`${url}/get-soal/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    postJawaban: (uuid_materi, data) => {
        return axios.post(`${url}/jawab-soal/${uuid_materi}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    cekSiswa: (uuid_materi) => {
        return axios.get(`${url}/cek-siswa/${uuid_materi}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    }
}

export default siswa