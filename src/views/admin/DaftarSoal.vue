<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card title="Daftar Soal">
            <b-card-text>
              <b-table striped hover :items="items" :fields="fields">
                <template v-slot:cell(actions)="row">
                  <b-btn @click="toSoal(row.item.kelas,row.item.mapel,row.item.materi)">Detail</b-btn>
                </template>
              </b-table>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../logout";
import { user } from "../../api";
export default {
  name: "DaftarSoal",
  data() {
    return {
      items: [],
      fields: ["kelas",{ key: "mapel", label: "Mata Pelajaran" },"materi","jumlah_soal","actions"]
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSoal();
        this.items = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    toSoal(kelas,mapel,materi){
      this.$router.push(`/soal/${kelas}/${mapel}/${materi}`)
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
<style scoped>
.card-dest{
  margin-top: 30px;
}
</style>