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
              </b-col>
              <b-col md="4">
                <b-btn @click="detail(cabang)" size="sm">Detail</b-btn>
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
  props: { cabang: String },
  data() {
    return {
      title: `Kelas ${this.$route.params.kelas} ${this.cabang}`,
      jml_siswa: 0,
    };
  },
  methods: {
    async loadKelas() {
      let data = await user.getSiswaKelasCabang(this.$route.params.kelas,this.cabang);
      this.jml_siswa = data.data.jml_siswa
    },
    detail(cabang) {
      this.$router.push(`/daftar-siswa/${this.$route.params.kelas}/${cabang}`);
    },
  },
  mounted() {
    this.loadKelas();
  },
};
</script>