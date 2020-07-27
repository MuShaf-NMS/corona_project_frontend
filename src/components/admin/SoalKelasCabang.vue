<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="title">
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
  name: "SoalKelasCabang",
  props: { kelas: String, label: String, mapel: String },
  data() {
    return {
      title: `${this.mapel}`
    };
  },
  methods: {
    detail(){
      this.$router.push(`/daftar-soal/${this.kelas}/${this.label}/${this.mapel}`)
    }
  }
};
</script>