<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card>
          <b-row>
            <b-col md="3" sm="12">Kelas</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{kelas}}</b-col>
          </b-row>
          <b-row>
            <b-col md="3" sm="12">Mata Pelajaran</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{mapel}}</b-col>
          </b-row>
          <b-row>
            <b-col md="3" sm="12">Materi</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{materi}}</b-col>
          </b-row>
          <b-row>
            <b-col md="3" sm="12">Siswa</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{$store.getters.getUser.username}}</b-col>
          </b-row>
        </b-card>
        <b-card class="card-dest">
          <b-row>
            <b-col>
              <b-card-text v-for="(i,index) in soal" :key="index">
                <b-row v-if="index < batas && index >= batas-5">
                  <b-col md="1" sm="12">{{index+1+"."}}</b-col>
                  <b-col md="11" sm="12">
                    <load-soal :uuid="i.uuid" :idx="index" />
                  </b-col>
                </b-row>
              </b-card-text>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-btn-group>
                <b-btn size="sm" @click="mundur" :disabled="batas == 5">Sebelumnya</b-btn>
                <b-btn size="sm" @click="lanjut" :disabled="batas >=soal.length">Selanjutnya</b-btn>
              </b-btn-group>
            </b-col>
            <b-col>
              <b-btn
                size="sm"
                @click="showMessageWarning"
                v-if="batas >=soal.length"
                class="kiri"
              >Kumpulkan</b-btn>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../logout";
import LoadSoal from "../../components/siswa/LoadSoal";
import { siswa } from "../../api";
export default {
  name: "jawabSoal",
  components: {
    LoadSoal,
  },
  data() {
    return {
      soal: [],
      batas: 5,
      kelas: "",
      mapel: "",
      materi: "",
    };
  },
  methods: {
    async loadData() {
      try {
        let cek = await siswa.cekSiswa(this.$route.params.uuid_materi);
        if (cek.data != null) {
          this.$router.push(`/siswa/daftar-soal`);
        } else {
          let data = await siswa.getSoal(this.$route.params.uuid_materi);
          this.kelas = data.data.kelas;
          this.mapel = data.data.mapel;
          this.materi = data.data.materi;
          if (
            this.$store.getters.getSoal == null ||
            this.$store.getters.getUuidSoal != this.$route.params.uuid_materi
          ) {
            this.$store.dispatch("saveSoal", data.data.soal);
            this.$store.dispatch(
              "saveUuidSoal",
              this.$route.params.uuid_materi
            );
          }
          this.soal = this.$store.getters.getSoal;
        }
      } catch (err) {
        logout.clear();
      }
    },
    lanjut() {
      this.batas += 5;
    },
    mundur() {
      this.batas -= 5;
    },
    showMessageWarning() {
      this.$bvModal
        .msgBoxConfirm("Apakah anda yakin untuk mungumpulkan jawaban anda?", {
          title: "Perhatian!!!",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          cancelVariant: "danger",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.submit();
          }
        });
    },
    async submit() {
      try {
        await siswa.postJawaban(this.$route.params.uuid_materi, {
          uuid_siswa: this.$store.getters.getUser.uuid,
          hasil: this.$store.getters.getJawaban,
        });
        this.$store.dispatch("clearSoal");
        this.$store.dispatch("clearJawaban");
        this.$store.dispatch("clearUuidSoal");
        this.$router.push(`/siswa/daftar-soal`);
      } catch (err) {
        logout.clear();
      }
    },
  },
  created() {
    this.loadData();
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
.kiri {
  float: right;
}
</style>