<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Skor">
          <b-card-text>
            <b-table striped hover :items="items" :fields="fields">
              <template v-slot:cell(detail)="row">
                <b-btn size="sm" @click="toDetail(row.item.materi)">Detail</b-btn>
              </template>
            </b-table>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../../../api";
export default {
  name: "DaftarHasil",
  data() {
    return {
      items: [],
      fields: ["kelas", "mapel", "materi", "siswa", "detail"]
    };
  },
  methods: {
    async loadData() {
      let data = await user.getDaftarSkor();
      this.items = data.data;
    },
    toDetail(materi) {
      this.$router.push(`/skor/${materi}`);
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