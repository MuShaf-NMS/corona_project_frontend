import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: "Saya",
      address: "Lombok"
    }
  },
  getters: {
    getName: state => state.user.name,
    getAddress: state => state.user.address
  },
  mutations: {
    changeName: (state,newName) => {
      state.user.name = newName
    },
    changeAddress: (state,newAddress) => {
      state.user.address = newAddress
    }
  },
  actions: {
    saveNewName: (contex,newName) => {
      contex.commit("changeName",newName)
    },
    saveNewAddress: (contex,newAddress) => {
      contex.commit("changeAddress",newAddress)
    }
  }
})
