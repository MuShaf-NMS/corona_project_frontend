<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="materi">
          <b-card-text>
            <b-row>
              <b-col md="8">
                <b-form-checkbox v-model="tampil" switch size="sm" @input="updateTampil">
                    <span v-if="tampil">Tampil</span>
                    <span v-if="!tampil">Tersembunyi</span>
                </b-form-checkbox>
                Jumlah soal: {{jml_soal}}
              </b-col>
              <b-col md="4">
                <b-btn-group vertical>
                  <b-btn size="sm" @click="detail">Detail</b-btn>
                  <b-btn size="sm" @click="toSkor">Skor</b-btn>
                </b-btn-group>
                
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../../api";
export default {
  name: "SoalMapel",
  props: { uuid: String, materi: String },
  data() {
    return {
      tampil: null,
      jml_soal: 0
    };
  },
  methods: {
    async loadTampil() {
      let data = await user.getTampilSoal(this.uuid);
      this.tampil = data.data.tampil;
    },
    async loadJmlSoal(){
        let data = await user.getJmlSoal(this.uuid)
        this.jml_soal = data.data.jml_soal
    },
    async updateTampil(){
        await user.updateTampilSoal(this.uuid,{tampil: this.tampil})
    },
    detail() {
      this.$router.push(`/detail-soal/${this.uuid}`);
    },
    toSkor() {
      this.$router.push(`/skor/${this.uuid}`)
    }
  },
  created() {
    this.loadTampil();
    this.loadJmlSoal()
  },
};
</script>