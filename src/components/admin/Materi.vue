<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row>
              <b-col>
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
export default {
  name: "Materi",
  props: { kelas: String },
  data() {
    return {
      title: `Kelas ${this.kelas}`
    };
  },
  methods: {
    detail(kelas){
        this.$router.push(`/daftar-materi/${kelas}`)
    }
  }
};
</script>