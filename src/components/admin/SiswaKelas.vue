<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row>
              <b-col md="8">
                  <b-row>
                      <b-col>Jumlah siswa: {{jml_siswa}}</b-col>
                  </b-row>
                  <b-row>
                      <b-col>Cabang kelas: {{cabang}}</b-col>
                  </b-row>
              </b-col>
              <b-col md="4">
                <b-btn @click="detail(kelas)" size="sm">Detail</b-btn>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../../api";
export default {
  name: "Kelas",
  props: { kelas: Number },
  data() {
    return {
      title: `Kelas ${this.kelas}`,
      jml_siswa: 0,
      cabang: 0
    };
  },
  methods: {
    async loadKelas() {
      let data = await user.getSiswaKelas(this.kelas);
      this.cabang = data.data.cabang;
      this.jml_siswa = data.data.jml_siswa
    },
    detail(kelas) {
      this.$router.push(`/daftar-siswa/${kelas}`);
    },
  },
  mounted() {
    this.loadKelas();
  },
};
</script>