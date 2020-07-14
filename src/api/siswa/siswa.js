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
    getDaftarSoal: (kelas) => {
        return axios.get(`${url}/soal/${kelas}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getSoal: (kelas,mapel,materi) => {
        return axios.get(`${url}/jawab-soal/${kelas}/${mapel}/${materi}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    postJawaban: (uuid,data) => {
        return axios.post(`${url}/jawab-soal/${uuid}`,data,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    }
}

export default siswa