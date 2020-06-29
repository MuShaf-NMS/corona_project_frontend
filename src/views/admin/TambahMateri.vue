<template>
  <div>
    <b-row class="card-dest">
      <b-col md="3" sm="12"></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card header="Tambah Materi">
            <b-card-text>
              <b-form>
                <b-col md="4" sm="12">
                  <b-form-group label="Guru">
                    <b-form-input type="text" placeholder="Guru" required v-model="form.guru"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                  <b-form-group label="Mata Pelajaran">
                    <b-form-input type="text" placeholder="Mata Pelajaran" required v-model="form.mapel"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                  <b-form-group label="Materi">
                    <b-form-input type="text" placeholder="Materi" required v-model="form.materi"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                  <b-form-group label="Submateri">
                    <b-form-input type="text" placeholder="Submateri" required v-model="form.submateri"></b-form-input>
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
      <b-col md="3" sm="12"></b-col>
    </b-row>
  </div>
</template>
<script>
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
    async tambahMateri() {
      let data = await user.addMateri(this.form);
      console.log(data.status);
    }
  }
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>