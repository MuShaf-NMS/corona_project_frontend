<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row v-for="(i,index) in kelas" :key="index" class="card-dest">
              <b-col v-for="(j,index) in i" :key="index" md="4">
                <siswa-kelas-cabang :cabang="j.label" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import SiswaKelasCabang from "../../../components/admin/SiswaKelasCabang"
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "DaftarSiswa",
  components: { SiswaKelasCabang },
  data() {
    return {
      kelas: [],
      title: `Daftar Siswa Kelas ${this.$route.params.kelas}`
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getDaftarKelasCabang(this.$route.params.kelas);
        this.kelas = this.triple(data.data);
      } catch (err) {
        logout.clear();
      }
    },
    Detail(kelas) {
      this.$router.push(`/daftar-siswa/${kelas}`);
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