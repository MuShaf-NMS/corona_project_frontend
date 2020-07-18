<template>
  <div>
    <b-row>{{soal.soal}}</b-row>
    <b-row>
      <b-form-group>
        <b-form-radio-group @input="jawab" v-model="pil" :options="soal.pilihan" stacked></b-form-radio-group>
      </b-form-group>
    </b-row>
  </div>
</template>
<script>
import { siswa } from "../../api";
export default {
  name: "LoadSoal",
  props: { uuid: String, idx: Number },
  data() {
    return {
      soal: {},
      pil: this.$store.getters.getJawaban[this.idx].jawaban,
    };
  },
  methods: {
    async loadData() {
      let data = await siswa.getOneSoal(this.uuid);
      this.soal = data.data;
    },
    jawab(e) {
      this.$store.dispatch("jawab",{idx: this.idx, jawaban: e});
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>