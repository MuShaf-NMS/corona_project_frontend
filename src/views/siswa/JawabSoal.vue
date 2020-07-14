<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card>
          <b-row>
            <b-col md="3" sm="12">Kelas</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{$route.params.kelas}}</b-col>
          </b-row>
          <b-row>
            <b-col md="3" sm="12">Mata Pelajaran</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{$route.params.mapel}}</b-col>
          </b-row>
          <b-row>
            <b-col md="3" sm="12">Materi</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{$route.params.materi}}</b-col>
          </b-row>
          <b-row>
            <b-col md="3" sm="12">Siswa</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{$store.getters.getUser.username}}</b-col>
          </b-row>
        </b-card>
        <b-card>
          <b-row>
            <b-col>
              <b-card-text v-for="(i,index) in soal" :key="index">
                <b-row>{{soal[idx].soal}}</b-row>
                <b-row>
                  <b-form-group>
                    <b-form-radio-group v-model="jawaban" :options="soal[idx].pilihan" stacked></b-form-radio-group>
                  </b-form-group>
                </b-row>
                <b-row>
                  <b-btn @click="mundur" :disabled="idx == 0">mundur</b-btn>
                  <b-btn @click="lanjut" :disabled="idx == soal.length - 1">lanjut</b-btn>
                  <b-btn @click="jawab()">Simpan jawaban</b-btn>
                </b-row>
              </b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../logout";
import { siswa } from "../../api";
export default {
  name: "jawabSoal",
  data() {
    return {
      soal: [],
      idx: 0,
      form: {
        uuid_siswa: this.$store.getters.getUser.uuid,
        hasil: []
      }
    };
  },
  computed: {
    jawaban: {
      get() {
        return this.$store.getters.getJawaban[this.idx].jawaban;
      },
      set(value) {
        console.log(value);
        this.$store.dispatch("jawab", this.idx, value);
      }
    }
  },
  methods: {
    jawab() {
      this.$store.dispatch("jawab", this.idx, this.jwb[this.idx]);
      console.log(this.$store.getters.getJawaban);
    },
    async loadData() {
      try {
        let data = await siswa.getSoal(
          this.$route.params.kelas,
          this.$route.params.mapel,
          this.$route.params.materi
        );
        this.$store.dispatch("saveSoal", data.data);
        this.soal = this.$store.getters.getSoal(5);
      } catch (err) {
        logout.clear();
      }
    },
    lanjut() {
      this.idx += 1;
    },
    mundur() {
      this.idx -= 1;
    },
    submit() {},
    disable() {
      if (this.soal.uuid_siswa == this.$store.getters.getUser.uuid) {
        return true;
      } else if (this.soal.uuid_siswa != null) {
        return false;
      }
      return false;
    }
  },
  created() {
    this.loadData();
  }
};
</script>