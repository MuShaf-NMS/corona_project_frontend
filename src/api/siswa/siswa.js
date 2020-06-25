import axios from 'axios'
import {url} from '../index'

const siswa = {
    addSiswa: (data) => {
        return axios.post(`${url}/tambahsiswa`,data)
    },
    login: (data) => {
        return axios.post(`${url}/login`,data)
    }
}

export default siswa