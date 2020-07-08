import axios from 'axios'
import store from '../../store'
import {url} from '../index'

const siswa = {
    getProfile: (uuid) => {
        return axios.get(`${url}/profile-siswa/${uuid}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getMateri: () => {
        return axios.get(`${url}/materi`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getDetailMateri: (uuid) => {
        return axios.get(`${url}/materi/${uuid}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getSoal: () => {
        return axios.get(`${url}/daftar-soal`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getOneSoal: (uuid) => {
        return axios.get(`${url}/jawab-soal/${uuid}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    postJawaban: (uuid,data) => {
        return axios.post(`${url}/jawab-soal/${uuid}`,data,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    }
}

export default siswa