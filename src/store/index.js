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
    uuidSoal: null,
    jawaban: []
  },
  getters: {
    getUser: state => state.user,
    getSoal: state => state.soal,
    getUuidSoal: state => state.uuidSoal,
    getJawaban: state => state.jawaban
  },
  mutations: {
    updateUser: (state, data) => {
      state.user = data
    },
    updateUsername: (state, data) => {
      state.user.username = data
    },
    deleteUser: (state) => {
      state.user = null
    },
    updateSoal: (state, data) => {
      state.soal = data
      state.jawaban = data.map((e) => {
        return {uuid: e.uuid, jawaban: ""}
      })
    },
    deleteSoal: (state) => {
      state.soal = null
    },
    updateJawaban: (state, data) => {
      state.jawaban[data.idx].jawaban = data.jawaban
    },
    deleteJawaban: (state) => {
      state.jawaban = []
    },
    updateUuidSoal: (state, data) => {
      state.uuidSoal = data
    },
    deleteUuidSoal: (state) => [
      state.uuidSoal = null
    ]
  },
  actions: {
    saveUser: (contex, data) => {
      contex.commit("updateUser", data)
    },
    saveUsername: (contex, data) => {
      contex.commit("updateUsername", data)
    },
    logout: (contex) => {
      contex.commit('deleteUser')
    },
    saveSoal: (contex, data) => {
      contex.commit("updateSoal", data)
    },
    clearSoal: (contex) => {
      contex.commit("deleteSoal")
    },
    jawab: (contex, data) => {
      contex.commit("updateJawaban", data)
    },
    clearJawaban: (contex) => {
      contex.commit("deleteJawaban")
    },
    saveUuidSoal: (contex,data) => {
      contex.commit("updateUuidSoal", data)
    },
    clearUuidSoal: (contex) => {
      contex.commit("deleteUuidSoal")
    }
  }
})
