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
  name: "SoalKelas",
  props: { kelas: String, label: String },
  data() {
    return {
      title: `Kelas ${this.kelas} ${this.label}`
    };
  },
  methods: {
    detail(){
      this.$router.push(`/daftar-soal/${this.kelas}/${this.label}`)
    }
  }
};
</script>