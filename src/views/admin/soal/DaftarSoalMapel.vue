<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row v-for="(i,index) in items" :key="index" class="card-dest">
              <b-col v-for="(j,index) in i" :key="index" md="4">
                <soal-mapel :uuid="j.uuid" :materi="j.materi" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import SoalMapel from "../../../components/admin/SoalMapel";
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "DaftarMateriMapel",
  components: { SoalMapel },
  data() {
    return {
      items: [],
      title: `Daftar Soal ${this.$route.params.mapel} Kelas ${this.$route.params.kelas} ${this.$route.params.cabang}`
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSoalMapel(this.$route.params.kelas,this.$route.params.cabang,this.$route.params.mapel);
        this.items = this.triple(data.data);
      } catch (err) {
        logout.clear();
      }
    },
    toDetail(uuid) {
      this.$router.push(`/detail-materi/${uuid}`);
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