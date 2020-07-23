<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row>
              <b-col md="8">Cabang: {{cabang}}</b-col>
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
      cabang: null,
    };
  },
  methods: {
    async loadKelas() {
      let data = await user.getDaftarKelasLabel(this.kelas);
      this.cabang = data.data.length;
    },
    detail(kelas) {
      this.$router.push(`/kelas/${kelas}`);
    },
  },
  mounted() {
    this.loadKelas();
  },
};
</script>