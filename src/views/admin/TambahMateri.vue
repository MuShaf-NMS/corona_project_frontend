<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card header="Tambah Materi">
          <b-card-text>
            <b-form>
              <b-col md="6" sm="12">
                <b-form-group label="Guru">
                  <b-form-input type="text" placeholder="Guru" required v-model="form.guru"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Kelas">
                  <b-form-select v-model="form.kelas" :options="kelas" v-if="kelas.length != 0">
                    <template v-slot:first>
                      <b-form-select-option value="" disabled>-- Kelas --</b-form-select-option>
                    </template>
                  </b-form-select>
                  <b-form-input
                    type="text"
                    placeholder="Kelas"
                    required
                    v-model="form.kelas"
                    v-if="kelas.length == 0"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Mata Pelajaran">
                  <b-form-select v-model="form.mapel" :options="studi" v-if="studi.length != 0">
                    <template v-slot:first>
                      <b-form-select-option value="" disabled>-- Mata Pelajaran --</b-form-select-option>
                    </template>
                  </b-form-select>
                  <b-form-input
                    type="text"
                    placeholder="Mata Pelajaran"
                    required
                    v-model="form.mapel"
                    v-if="studi.length == 0"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Materi">
                  <b-form-input type="text" placeholder="Materi" required v-model="form.materi"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Submateri">
                  <b-form-input
                    type="text"
                    placeholder="Submateri"
                    required
                    v-model="form.submateri"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Isi">
                  <b-form-textarea placeholder="Isi" rows="3" max-rows="5" v-model="form.isi"></b-form-textarea>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Link video youtube">
                  <b-form-input
                    type="text"
                    placeholder="Link video youtube"
                    required
                    v-model="form.link"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group>
                  <b-btn size="sm" class="btn-info" @click="tambahMateri">Simpan</b-btn>
                </b-form-group>
              </b-col>
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../logout";
import { user } from "../../api";
export default {
  name: "TambahMateri",
  data() {
    return {
      form: {
        kelas: "",
        mapel: "",
        materi: "",
        submateri: "",
        isi: "",
        link: ""
      },
      kelas: this.$store.getters.getUser.kelas_ampu,
      studi: this.$store.getters.getUser.bidang_studi
    };
  },
  methods: {
    showMessage() {
      this.$bvModal.msgBoxOk("Berhasil menambahkan materi baru", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    clearForm() {
      this.form.mapel = "";
      this.form.guru = "";
      this.form.materi = "";
      this.form.submateri = "";
      this.form.isi = "";
    },
    async tambahMateri() {
      try {
        let data = await user.addMateri(this.form);
        if (data.status == 200) {
          this.showMessage();
          this.clearForm();
        }
      } catch (err) {
        logout.clear();
      }
    }
  }
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>