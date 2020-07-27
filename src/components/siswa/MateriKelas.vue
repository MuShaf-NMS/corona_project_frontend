<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="mapel">
          <b-card-text>
            <b-row>
              <b-col md="8" sm="12">Jumlah materi: {{jml_materi}}</b-col>
              <b-col md="4" sm="12">
                <b-btn size="sm" @click="detail">Detail</b-btn>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { siswa } from "../../api";
export default {
  name: "MateriSiswaKelas",
  props: { uuid: String, mapel: String },
  data() {
    return {
      jml_materi: 0,
    };
  },
  methods: {
    async loadJmlMateri() {
      let data = await siswa.getMateriMapel(this.uuid);
      this.jml_materi = data.data.materi.length;
    },
    detail() {
      this.$router.push(
        `/siswa/daftar-materi/${this.uuid}`
      );
    },
  },
  mounted() {
    this.loadJmlMateri();
  },
};
</script>