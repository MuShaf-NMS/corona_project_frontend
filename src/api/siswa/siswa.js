import axios from 'axios'
import store from '../../store'
import {url} from '../index'

const siswa = {
    addSiswa: (data) => {
        return axios.post(`${url}/tambahsiswa`,data)
    },
    getProfile: (uuid) => {
        return axios.get(`${url}/profile-siswa/${uuid}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getMateri: () => {
        return axios.get(`${url}/materi`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getDetailMateri: (uuid) => {
        return axios.get(`${url}/materi/${uuid}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    }
}

export default siswa