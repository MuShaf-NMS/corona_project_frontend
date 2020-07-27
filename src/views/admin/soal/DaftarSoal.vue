<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Daftar Soal">
          <b-card-text>
            <b-row v-for="(i,index) in items" :key="index" class="card-dest">
              <b-col v-for="(j,index) in i" :key="index" md="4">
                <soal :kelas="j.kelas" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Soal from "../../../components/admin/Soal"
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "DaftarSoal",
  components: { Soal },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSoal();
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