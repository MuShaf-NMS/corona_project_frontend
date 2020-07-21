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
                  size="sm"
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
    async toJawabSoal(kelas, mapel, materi) {
      let cek = await siswa.cekSiswa(kelas, mapel, materi);
      if (cek.data == null) {
        this.$router.push(`/siswa/jawab-soal/${kelas}/${mapel}/${materi}`);
      } else {
        this.showMessageMaaf();
      }
    },
    showMessageMaaf() {
      this.$bvModal.msgBoxOk("Anda sudah menjawab soal ini", {
        title: "Maaf",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
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