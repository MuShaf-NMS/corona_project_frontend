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
        </b-card>
        <b-card>
          <b-row>
            <b-col md="1" sm="12">{{idx + 1}}.</b-col>
            <b-col>
              <b-card-text>
                <b-row>{{soalke.soal}}</b-row>
                <b-row v-for="(i,index) in soalke.opsi" :key="index">{{i.nilai}}</b-row>
                <b-row>Kunci jawaban: {{soalke.kunci_jawaban}}</b-row>
                <b-row>
                  <b-btn @click="mundur" :disabled="idx == 0">mundur</b-btn>
                  <b-btn @click="lanjut" :disabled="idx == soal.length - 1">lanjut</b-btn>
                  <b-btn @click="toEdit">Edit</b-btn>
                  <b-btn @click="updateSoal">Simpan perubahan</b-btn>
                </b-row>
              </b-card-text>
              <b-card-text v-if="edit">
                <b-row>
                  <b-form-group label="Soal">
                    <b-form-input type="text" placeholder="Soal" required v-model="soal[idx].soal"></b-form-input>
                  </b-form-group>
                </b-row>
                <b-row md="12" sm="12">
                  <b-form-group
                    label="Opsi"
                    description="Opsi pertama yang anda masukkan dianggap sebagai kunci jawaban"
                  >
                    <b-form-input type="text" placeholder="Opsi pertama (Kunci jawaban)" required v-model="soal[idx].opsi[0].nilai"></b-form-input>
                    <b-input-group>
                      <b-form-input type="text" placeholder="Opsi kedua" required v-model="soal[idx].opsi[1].nilai"></b-form-input>
                      <b-form-input type="text" placeholder="Opsi ketiga" required v-model="soal[idx].opsi[2].nilai"></b-form-input>
                    </b-input-group>
                    <b-input-group>
                      <b-form-input type="text" placeholder="Opsi keempat" required v-model="soal[idx].opsi[3].nilai"></b-form-input>
                      <b-form-input type="text" placeholder="Opsi kelima" required v-model="soal[idx].opsi[4].nilai"></b-form-input>
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
      edit: false
    };
  },
  methods: {
    async loadData() {
      let data = await user.getCekSoal(
        this.$route.params.kelas,
        this.$route.params.mapel,
        this.$route.params.materi
      );
      this.soal = data.data;
      this.soalke = this.soal[this.idx];
    },
    async updateSoal(){
      let data = await user.updateSoal(this.$route.params.kelas,
        this.$route.params.mapel,
        this.$route.params.materi,this.soal)
      if (data.status == 200){
        this.showMessage()
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
    },
    mundur() {
      this.idx -= 1;
      this.soalke = this.soal[this.idx];
    },
    toEdit(){
      return this.edit = !this.edit
    }
  },
  created() {
    this.loadData();
  }
};
</script>