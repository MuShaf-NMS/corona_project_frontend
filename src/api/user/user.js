import axios from 'axios'
import {url} from '../index'
import store from '../../store'

const user = {
    getUser: () => {
        return axios.get(`${url}/daftar-admin`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getSiswa: () => {
        return axios.get(`${url}/daftar-siswa`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getProfile: (uuid) => {
        return axios.get(`${url}/profile-admin/${uuid}`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    addUser: (data) => {
        return axios.post(`${url}/tambahadmin`,data,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    addSiswa: (data) => {
        return axios.post(`${url}/tambahsiswa`,data,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    addMateri: (data)=> {
        return axios.post(`${url}/tambahmateri`,data,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    addSoal: (data) => {
        return axios.post(`${url}/tambah-soal`,data,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    getSoal: () => {
        return axios.get(`${url}/daftar-soal`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    },
    login: (data) => {
        return axios.post(`${url}/login`,data)
    },
    logout: () => {
        return axios.get(`${url}/logout-access-token`,{headers: {Authorization: `Bearer ${store.getters.getUser.accessToken}`}})
    }
}

export default user