<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card title="Daftar Materi">
            <b-card-text>
              <b-table striped hover :items="items" :fields="fields">
                <template v-slot:cell(actions)="row">
                  <b-btn @click="toDetail(row.item.uuid)">Baca</b-btn>
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
import { siswa } from "../../api";
export default {
  name: "Materi",
  data() {
    return {
      items: [],
      fields: [
        { key: "mapel", label: "Mata Pelajaran" },
        "materi",
        "submateri",
        { key: "guru", label: "Guru Bidang Studi" },
        "actions"
      ]
    };
  },
  methods: {
    async loadData() {
      let data = await siswa.getMateri();
      this.items = data.data;
    },
    toDetail(uuid) {
      this.$router.push(`/siswa/materi/${uuid}`);
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