import axios from 'axios'
import {url} from '../index'

const user = {
    addUser: (data) => {
        return axios.post(`${url}/tambahadmin`,data)
    },
    addMateri: (data)=> {
        return axios.post(`${url}/tambahmateri`,data)
    },
    login: (data) => {
        return axios.post(`${url}/login`,data)
    }
}

export default user