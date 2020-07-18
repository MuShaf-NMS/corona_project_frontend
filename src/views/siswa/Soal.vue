<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card title="Daftar Soal">
          <b-card-text>
            <b-table striped hover :items="items" :fields="fields">
              <template v-slot:cell(actions)="row">
                <b-btn
                  @click="toJawabSoal($route.params.kelas,row.item.mapel,row.item.materi)"
                >Jawab</b-btn>
              </template>
            </b-table>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../logout";
import { siswa } from "../../api";
export default {
  name: "Soal",
  data() {
    return {
      items: [],
      fields: [
        { key: "mapel", label: "Mata Pelajaran" },
        "materi",
        "jumlah_soal",
        "actions"
      ]
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await siswa.getDaftarSoal(this.$route.params.kelas);
        this.items = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    toJawabSoal(kelas, mapel, materi) {
      this.$router.push(`/siswa/jawab-soal/${kelas}/${mapel}/${materi}`);
    }
  },
  created() {
    this.loadData();
  }
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>