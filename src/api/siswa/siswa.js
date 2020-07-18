import axios from 'axios'
import store from '../../store'
import {url} from '../index'

const siswa = {
    getProfile: (uuid) => {
        return axios.get(`${url}/profile-siswa/${uuid}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
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
    getMateri: () => {
        return axios.get(`${url}/daftar-materi/${store.getters.getUser.kelas}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getDetailMateri: (uuid) => {
        return axios.get(`${url}/materi/${uuid}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getDaftarSoal: (kelas) => {
        return axios.get(`${url}/soal/${kelas}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getSoal: (kelas,mapel,materi) => {
        return axios.get(`${url}/jawab-soal/${kelas}/${mapel}/${materi}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getOneSoal: (uuid) => {
        return axios.get(`${url}/get-soal/${uuid}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    postJawaban: (kelas,mapel,materi,data) => {
        return axios.post(`${url}/jawab-soal/${kelas}/${mapel}/${materi}`,data,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    }
}

export default siswa