<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Daftar Kelas">
          <b-card-text>
            <b-row v-for="(i,index) in kelas" :key="index" class="card-dest">
              <b-col v-for="(j,index) in i" :key="index" md="4">
                <kelas :kelas="j.kelas" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Kelas from "../../../components/admin/Kelas"
import { user } from "../../../api";
export default {
  name: "DaftarKelas",
  components: { Kelas },
  data() {
    return {
      kelas: [],
    };
  },
  methods: {
    async loadData() {
      let data = await user.getDaftarKelas();
      this.kelas = this.triple(data.data);
    },
    triple(list){
      let hasil = []
      let lis = []
      for(let i = 0; i < list.length; i++){
        lis.push(list[i])
        if(lis.length == 3) {
          hasil.push(lis)
          lis = []
        } else if (lis.length < 3 && i == list.length-1){
          hasil.push(lis)
        }
      }
      return hasil
    }
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>