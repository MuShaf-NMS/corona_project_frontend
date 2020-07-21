<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card title="Daftar Siswa">
          <b-card-text>
            <b-table striped hover :items="items" :fields="fields">
              <template v-slot:cell(actions)="row">
                <b-btn size="sm" @click="Detail(row.item.kelas)">Detail</b-btn>
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
import { user } from "../../api";
export default {
  name: "DaftarSiswa",
  data() {
    return {
      items: [],
      fields: ["kelas", "jumlah_siswa", "actions"]
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSiswa();
        this.items = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    Detail(kelas) {
      this.$router.push(`/daftar-siswa/${kelas}`);
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