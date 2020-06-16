import axios from 'axios'
import {url} from '../index'

const user = {
    post: (data) => {
        return axios.post(`${url}/tambahadmin`,data)
    }
}

export default user