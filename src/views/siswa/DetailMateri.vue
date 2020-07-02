<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card :header="materi.mapel" :title="materi.materi" :sub-title="materi.submateri">
            <b-card-text>{{materi.isi}}</b-card-text>
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
  name: "DetailMateri",
  data() {
    return {
      materi: {}
    };
  },
  methods: {
    async loadData() {
      let data = await siswa.getDetailMateri(this.$route.params.id);
      this.materi = data.data;
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