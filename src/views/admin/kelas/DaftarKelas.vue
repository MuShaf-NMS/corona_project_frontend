<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Daftar Kelas">
          <b-card-text>
            <b-row>
              <b-col v-for="(i,index) in kelas" :key="index">
                <kelas :kelas="i.kelas" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Kelas from "../../../components/admin/Kelas"
import { user } from "../../../api";
export default {
  name: "DaftarKelas",
  components: { Kelas },
  data() {
    return {
      kelas: [],
    };
  },
  methods: {
    async loadData() {
      let data = await user.getDaftarKelas();
      this.kelas = data.data;
      console.log(this.kelas)
    }
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>