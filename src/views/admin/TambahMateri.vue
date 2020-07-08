<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card header="Tambah Materi">
            <b-card-text>
              <b-form>
                <b-col md="6" sm="12">
                  <b-form-group label="Guru">
                    <b-form-input type="text" placeholder="Guru" required v-model="form.guru"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                  <b-form-group label="Mata Pelajaran">
                    <b-form-input
                      type="text"
                      placeholder="Mata Pelajaran"
                      required
                      v-model="form.mapel"
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
                    <b-form-input type="text" placeholder="Isi" required v-model="form.isi"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group>
                    <b-btn class="btn-info" @click="tambahMateri">Simpan</b-btn>
                  </b-form-group>
                </b-col>
              </b-form>
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
import { user } from "../../api";
export default {
  name: "TambahMateri",
  data() {
    return {
      form: {
        mapel: "",
        guru: "",
        materi: "",
        submateri: "",
        isi: ""
      }
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