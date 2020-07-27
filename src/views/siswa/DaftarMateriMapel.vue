<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row v-for="(i,index) in items" :key="index" class="card-dest">
              <b-col v-for="(j,index) in i" :key="index" md="4">
                <materi-mapel :uuid="j.uuid" :materi="j.materi" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import MateriMapel from "../../components/siswa/MateriMapel";
import logout from "../logout";
import { siswa } from "../../api";
export default {
  name: "DaftarMateriKelas",
  components: { MateriMapel },
  data() {
    return {
      items: [],
      title: ""
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await siswa.getMateriMapel(this.$route.params.uuid_mapel);
        this.items = this.triple(data.data.materi);
        this.title = `Daftar Materi ${data.data.mapel.mapel} Kelas ${data.data.kelas.kelas}`
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
  created() {
    this.loadData();
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>