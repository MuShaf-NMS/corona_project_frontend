import store from '../store'
import router from '../router'

const logout = {
    clear: () => {
        store.dispatch('logout')
        store.dispatch('clearJawaban')
        store.dispatch('clearSoal')
        store.dispatch('clearUuidSoal')
        router.push('/login')
    }
}
export default logout