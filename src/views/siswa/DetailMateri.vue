<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card :header="materi.mapel" :title="materi.materi" :sub-title="materi.submateri">
          <b-card-text>
            {{materi.isi}}
            <iframe width="560" height="315" :src="materi.link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  name: "DetailMateri",
  data() {
    return {
      materi: {}
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await siswa.getDetailMateri(this.$route.params.id);
        this.materi = data.data;
      } catch (err) {
        logout.clear();
      }
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