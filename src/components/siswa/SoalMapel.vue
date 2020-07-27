<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="materi">
          <b-card-text>
            <b-row>
              <b-col md="8" sm="12">Jumlah soal: {{jml_soal}}</b-col>
              <b-col md="4" sm="12">
                <b-btn size="sm" @click="detail">Jawab</b-btn>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { siswa } from "../../api";
export default {
  name: "SoalSiswaKelas",
  props: { uuid: String, materi: String },
  data() {
    return {
      jml_soal: 0,
    };
  },
  methods: {
    async loadJmlSoal() {
      let data = await siswa.getJmlSoal(this.uuid);
      this.jml_soal = data.data.jml_soal;
    },
    async detail() {
      let data = await siswa.cekSiswa(this.uuid)
      if (data.data == null) {
        this.$router.push(`/siswa/jawab-soal/${this.uuid}`);
      } else {
        this.showMessageMaaf()
      }
      
    },
    showMessageMaaf() {
      this.$bvModal.msgBoxOk(
        "Anda sudah menjawab soal ini",
        {
          title: "Maaf",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true
        }
      );
    }
  },
  mounted(){
      this.loadJmlSoal()
  }
};
</script>