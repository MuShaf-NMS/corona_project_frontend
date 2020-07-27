<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row v-for="(i,index) in items" :key="index" class="card-dest">
              <b-col v-for="(j,index) in i" :key="index" md="4">
                <soal-kelas :kelas="$route.params.kelas" :label="j.label" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import SoalKelas from "../../../components/admin/SoalKelas";
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "DaftarSoalKelas",
  components: { SoalKelas },
  data() {
    return {
      items: [],
      title: `Daftar Soal Kelas ${this.$route.params.kelas}`
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSoalKelas(this.$route.params.kelas);
        this.items = this.triple(data.data);
      } catch (err) {
        logout.clear();
      }
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
  }
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>