<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card title="Daftar Materi">
          <b-card-text>
            <b-table striped hover :items="items" :fields="fields">
              <template v-slot:cell(actions)="row">
                <b-btn @click="toDetail(row.item.uuid)">Detail</b-btn>
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
  name: "DaftarMateri",
  data() {
    return {
      items: [],
      fields: [
        { key: "mapel", label: "Mata Pelajaran" },
        "materi",
        "submateri",
        "actions"
      ]
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getMateri();
        this.items = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    toDetail(uuid) {
      this.$router.push(`/detail-materi/${uuid}`);
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