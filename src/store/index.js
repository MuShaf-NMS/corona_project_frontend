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
    user: null,
    soal: null,
    jawaban: []
  },
  getters: {
    getUser: state => state.user,
    getSoal: (state,index) => {
      state.soal.filter(e => state.soal.indexOf(e) < index)
    },
    getJawaban: state => state.jawaban
  },
  mutations: {
    updateUser: (state,data) => {
      state.user = data
    },
    deleteUser: (state) => {
      state.user = null
    },
    updateSoal: (state,data) => {
      state.soal = data
      state.jawaban = state.soal.map(() => Object())
    },
    deleteSoal: (state) => {
      state.soal = null
    },
    updateJawaban: (state,idx,data) => {
      state.jawaban[idx].uuid_soal = state.soal[idx].uuid
      state.jawaban[idx].jawaban = data
    },
    deleteJawaban: (state) => {
      state.jawaban = []
    }
  },
  actions: {
    saveUser: (contex,data) => {
      contex.commit("updateUser",data)
    },
    logout: (contex) => {
      contex.commit('deleteUser')
    },
    saveSoal: (contex,data) => {
      contex.commit("updateSoal",data)
    },
    clearSoal: (contex) => {
      contex.commit("deleteSoal")
    },
    jawab: (contex,idx, data) => {
      contex.commit("updateJawaban",idx,data)
    },
    clearJawaban: (contex) => {
      contex.commit("deleteJawaban")
    }
  }
})
