<template>
  <div>
    <b-row class="card-dest">
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
        </b-card>
        <b-card class="card-dest">
          <b-row>
            <b-col md="1" sm="12">{{idx + 1}}.</b-col>
            <b-col>
              <b-card-text v-if="loaded">
                <b-row>{{soalke.soal}}</b-row>
                <b-row v-for="(i,index) in soalke.opsi" :key="index">{{i.nilai}}</b-row>
                <b-row>Kunci jawaban: {{soalke.kunci_jawaban}}</b-row>
                <b-row>Skor: {{soalke.skor}}</b-row>
                <b-row>Tampilkan soal ini?</b-row>
                <b-row>
                  <b-form-radio-group :options="options" v-model="soal[idx].tampil"></b-form-radio-group>
                </b-row>
                <b-row class="card-dest">
                  <b-col>
                    <b-btn-group>
                      <b-btn size="sm" @click="mundur" :disabled="idx == 0">mundur</b-btn>
                      <b-btn size="sm" @click="lanjut" :disabled="idx == soal.length - 1">lanjut</b-btn>
                    </b-btn-group>
                  </b-col>
                  <b-col>
                    <b-btn-group>
                      <b-btn size="sm" @click="toEdit">Edit</b-btn>
                      <b-btn size="sm" @click="updateSoal">Simpan</b-btn>
                      <b-btn size="sm" @click="deleteSoal(soal[idx].uuid)">Hapus</b-btn>
                    </b-btn-group>
                  </b-col>
                </b-row>
              </b-card-text>
              <b-card-text v-if="edit">
                <b-row>
                  <b-form-group label="Soal">
                    <b-form-input type="text" placeholder="Soal" required v-model="soal[idx].soal"></b-form-input>
                  </b-form-group>
                </b-row>
                <b-row>
                  <b-form-group label="Skor">
                    <b-form-input
                      type="number"
                      placeholder="Skor"
                      required
                      v-model="soal[idx].skor"
                    ></b-form-input>
                  </b-form-group>
                </b-row>
                <b-row md="12" sm="12">
                  <b-form-group
                    label="Opsi"
                    description="Opsi pertama yang anda masukkan dianggap sebagai kunci jawaban"
                  >
                    <b-form-input
                      type="text"
                      placeholder="Opsi pertama (Kunci jawaban)"
                      required
                      v-model="soal[idx].opsi[0].nilai"
                    ></b-form-input>
                    <b-input-group>
                      <b-form-input
                        type="text"
                        placeholder="Opsi kedua"
                        required
                        v-model="soal[idx].opsi[1].nilai"
                      ></b-form-input>
                      <b-form-input
                        type="text"
                        placeholder="Opsi ketiga"
                        required
                        v-model="soal[idx].opsi[2].nilai"
                      ></b-form-input>
                    </b-input-group>
                    <b-input-group>
                      <b-form-input
                        type="text"
                        placeholder="Opsi keempat"
                        required
                        v-model="soal[idx].opsi[3].nilai"
                      ></b-form-input>
                      <b-form-input
                        type="text"
                        placeholder="Opsi kelima"
                        required
                        v-model="soal[idx].opsi[4].nilai"
                      ></b-form-input>
                    </b-input-group>
                  </b-form-group>
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
import { user } from "../../api";
export default {
  name: "DetailSoal",
  data() {
    return {
      soal: [],
      soalke: {},
      idx: 0,
      loaded: false,
      edit: false,
      options: [
        { text: "Ya", value: 1 },
        { text: "Tidak", value: 0 }
      ]
    };
  },
  methods: {
    async loadData() {
      let data = await user.getCekSoal(
        this.$route.params.kelas,
        this.$route.params.mapel,
        this.$route.params.materi
      );
      this.loaded = true;
      this.soal = data.data;
      if (this.soal.length == 0) {
        this.$router.push("/daftar-soal")
      }
      this.soalke = this.soal[this.idx];
    },
    async updateSoal() {
      let data = await user.updateSoal(
        this.$route.params.kelas,
        this.$route.params.mapel,
        this.$route.params.materi,
        this.soal
      );
      if (data.status == 200) {
        this.showMessage();
      }
    },
    showMessage() {
      this.$bvModal.msgBoxOk("Berhasil mengupdate soal", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    lanjut() {
      this.idx += 1;
      this.soalke = this.soal[this.idx];
      console.log(this.soalke)
    },
    mundur() {
      this.idx -= 1;
      this.soalke = this.soal[this.idx];
      console.log(this.soalke)
    },
    toEdit() {
      return (this.edit = !this.edit);
    },
    showMessageWarning(uuid) {
      this.$bvModal.msgBoxConfirm(`Apakah anda yakin untuk menghapus soal ini?`, {
        title: "Perhatian!!!",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        cancelVariant: "danger",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      })
      .then((value) => {
        if (value) {
          user.deleteSoal(uuid)
          this.loadData()
        }
      })
      .catch(err => console.log(err));
    },
    async deleteSoal(uuid){
      this.showMessageWarning(uuid)
    }
  },
  created() {
    this.loadData();
  }
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>