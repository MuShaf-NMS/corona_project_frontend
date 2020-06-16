<template>
  <div>
    <h3>{{getName}}</h3>
    <h3>{{getAddress}}</h3>
    <label>Nama Baru</label>
    <input type="text" v-model="newName">
    <label>Alamat Baru</label>
    <input type="text" v-model="newAddress">
    <b-btn @click="updateUser">Update</b-btn>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'HelloWorld',
  data(){
    return {
      newName: "",
      newAddress: ""
    }
  },
  computed: {
    ...mapGetters(["getName"]),
    ...mapGetters(["getAddress"]) 
  },
  methods: {
    updateUser(){
      this.$store.dispatch("saveNewName",this.newName)
      this.$store.dispatch("saveNewAddress",this.newAddress)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
