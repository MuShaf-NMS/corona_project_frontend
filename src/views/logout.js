import store from '../store'
import router from '../router'

const logout = {
    clear: () => {
        store.dispatch('logout')
        router.push('/login')
    }
}
export default logout