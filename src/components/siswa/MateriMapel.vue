<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="materi">
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
  name: "MateriSiswaKelas",
  props: { uuid: String, materi: String },
  methods: {
    detail() {
      this.$router.push(`/siswa/materi/${this.uuid}`);
    },
  },
};
</script>