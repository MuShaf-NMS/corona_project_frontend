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
                <load-soal :uuid="i.uuid" />
              </b-card-text>
            </b-col>
          </b-row>
          <b-row>
            <b-btn @click="lanjut">Selanjutnya</b-btn>
          </b-row>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../logout";
import LoadSoal from "./LoadSoal";
import { siswa } from "../../api";
export default {
  name: "jawabSoal",
  components: {
    LoadSoal
  },
  data() {
    return {
      soal: [],
      form: {
        uuid_siswa: this.$store.getters.getUser.uuid,
        hasil: []
      },
      jawaban: [],
      batas: 5
    };
  },
  methods: {
    async loadData() {
      try {
        if (this.$store.getters.getSoal == null) {
          let data = await siswa.getSoal(
            this.$route.params.kelas,
            this.$route.params.mapel,
            this.$route.params.materi
          );
          this.$store.dispatch("saveSoal", data.data);
        }
        this.soal = this.$store.getters.getSoal.filter(
          e => this.$store.getters.getSoal.indexOf(e) < this.batas && this.$store.getters.getSoal.indexOf(e) >= this.batas - 5
        );
        this.jawaban = this.soal.map(() => Object())
      } catch (err) {
        logout.clear();
      }
    },
    lanjut() {
      this.batas += 5;
      this.soal = this.$store.getters.getSoal.filter(
        e => this.$store.getters.getSoal.indexOf(e) < this.batas && this.$store.getters.getSoal.indexOf(e) >= this.batas - 5
      );
      console.log(this.soal)
    }
  },
  created() {
    this.loadData();
  }
};
</script>