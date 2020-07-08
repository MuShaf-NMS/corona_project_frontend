<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card header="Jawab Soal">
            <b-card-text>
              <b-col>
                <p>{{soal.soal}}</p>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Jawaban" :description="desc()">
                  <b-form-input type="text" placeholder="Jawaban" required v-model="form.jawaban"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn @click="jawab" :disabled="disable()">Jawab</b-btn>
              </b-col>
            </b-card-text>
          </b-card>
        </b-card-group>
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
      form: {
        jawaban: "",
        uuid_siswa: this.$store.getters.getUser.uuid
      },
      soal: {}
    };
  },
  methods: {
    showMessageSuccess() {
      this.$bvModal.msgBoxOk("Selamat jawaban kamu benar", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    showMessageFailed() {
      this.$bvModal.msgBoxOk("Jawaban kamu salah", {
        title: "Maaf",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    async jawab() {
      try {
        let data = await siswa.postJawaban(this.$route.params.id, this.form);
        if (data.data.msg == "Benar") {
          this.showMessageSuccess();
        } else {
          this.showMessageFailed();
        }
      } catch (err) {
        logout.clear();
      }
    },
    async loadData() {
      try {
        let data = await siswa.getOneSoal(this.$route.params.id);
        this.soal = data.data
      } catch (err) {
        logout.clear();
      }
    },
    desc(){
      if (this.soal.uuid_siswa == this.$store.getters.getUser.uuid){
        return "Anda sudah menjawab soal ini"
      } else if (this.soal.uuid_siswa != null) {
        return ""
      }
      return ""
    },
    disable(){
      if (this.soal.uuid_siswa == this.$store.getters.getUser.uuid){
        return true
      } else if (this.soal.uuid_siswa != null) {
        return false
      }
      return false
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>