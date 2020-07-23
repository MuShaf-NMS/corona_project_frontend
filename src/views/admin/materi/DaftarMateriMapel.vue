<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Daftar Materi">
          <b-card-text>
            <b-row>
              <b-col v-for="(i,index) in items" :key="index">
                <materi-kelas :mapel="i.mapel" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import MateriKelas from "../../../components/admin/MateriKelas";
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "DaftarMateri",
  components: { MateriKelas },
  data() {
    return {
      items: []
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getMateribyKelas(this.$route.params.kelas);
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