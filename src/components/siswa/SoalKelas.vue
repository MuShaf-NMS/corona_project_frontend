<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="mapel">
          <b-card-text>
            <b-row>
              <b-col>
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
export default {
  name: "SoalSiswaKelas",
  props: { uuid: String, mapel: String },
  methods: {
    detail() {
      this.$router.push(
        `/siswa/daftar-soal/${this.uuid}`
      );
    },
  },
};
</script>