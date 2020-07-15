import axios from 'axios'
import { url } from '../index'
import store from '../../store'

const user = {
    getUser: () => {
        return axios.get(`${url}/daftar-admin`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSiswa: () => {
        return axios.get(`${url}/daftar-siswa`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
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
    updateUser: (uuid,data) => {
        return axios.put(`${url}/update-admin/${uuid}`,data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    addSiswa: (data) => {
        return axios.post(`${url}/tambahsiswa`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getOneSiswa: (uuid) => {
        return axios.get(`${url}/update-siswa/${uuid}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateSiswa: (uuid,data) => {
        return axios.put(`${url}/update-siswa/${uuid}`,data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    addMateri: (data) => {
        return axios.post(`${url}/tambahmateri`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    addSoal: (data) => {
        return axios.post(`${url}/tambah-soal`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getSoal: () => {
        return axios.get(`${url}/admin/daftar-soal`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    getCekSoal: (kelas, mapel, materi) => {
        return axios.get(`${url}/ceksoal/${kelas}/${mapel}/${materi}`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    updateSoal: (kelas, mapel, materi, data) => {
        return axios.put(`${url}/ceksoal/${kelas}/${mapel}/${materi}`, data, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    },
    login: (data) => {
        return axios.post(`${url}/login`, data)
    },
    logout: () => {
        return axios.get(`${url}/logout-access-token`, { headers: { Authorization: `Bearer ${store.getters.getUser.accessToken}` } })
    }
}

export default user