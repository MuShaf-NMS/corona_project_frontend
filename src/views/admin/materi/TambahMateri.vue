<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Tambah Materi">
          <b-card-text>
            <b-form>
              <b-col md="6" sm="12">
                <b-form-group label="Kelas">
                  <b-form-select v-model="form.uuid_kelas" :options="kelas">
                    <template v-slot:first>
                      <b-form-select-option value disabled>-- Kelas --</b-form-select-option>
                    </template>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Mata Pelajaran">
                  <b-form-select v-model="form.uuid_mapel" :options="studi">
                    <template v-slot:first>
                      <b-form-select-option value disabled>-- Mata Pelajaran --</b-form-select-option>
                    </template>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Materi">
                  <b-form-input type="text" placeholder="Materi" required v-model="form.materi"></b-form-input>
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
    </b-row>
  </div>
</template>
<script>
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "TambahMateri",
  data() {
    return {
      form: {
        uuid_kelas: "",
        uuid_mapel: "",
        materi: "",
        isi: "",
        link: "",
      },
      kelas: [],
      studi: [],
    };
  },
  methods: {
    async loadKelas() {
      let data = await user.getKelas();
      this.kelas = data.data;
    },
    async loadMapel() {
      let data = await user.getMapel();
      this.studi = data.data;
    },
    showMessageCek(form) {
      this.$bvModal.msgBoxOk(`Form ${form} tidak boleh kosong`, {
        title: "Maaf",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true,
      });
    },
    showMessage() {
      this.$bvModal.msgBoxOk("Berhasil menambahkan materi baru", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true,
      });
    },
    clearForm() {
      this.form.mapel = "";
      this.form.guru = "";
      this.form.kelas = "";
      this.form.materi = "";
      this.form.isi = "";
      this.form.link = "";
    },
    async tambahMateri() {
      if (this.form.uuid_kelas == "") {
        this.showMessageCek("Kelas");
      } else if (this.form.uuid_mapel == "") {
        this.showMessageCek("Mata Pelajaran");
      } else if (this.form.materi == "") {
        this.showMessageCek("Materi");
      } else if (this.form.isi == "") {
        this.showMessageCek("Isi");
      } else {
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
    },
  },
  mounted() {
    this.loadKelas();
    this.loadMapel();
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>