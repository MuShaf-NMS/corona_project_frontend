import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)
const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    user: null
  },
  getters: {
    getUser: state => state.user
  },
  mutations: {
    updateUser: (state,data) => {
      state.user = data
    },
    deleteUser: (state) => {
      state.user = null
    }
  },
  actions: {
    saveUser: (contex,data) => {
      contex.commit("updateUser",data)
    },
    logout: (contex) => {
      contex.commit('deleteUser')
    }
  }
})
