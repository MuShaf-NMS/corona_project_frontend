<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card header="Update admin">
          <b-card-text>
            <b-form>
              <b-col md="6" sm="12">
                <b-form-group label="Nama">
                  <b-form-input type="text" placeholder="Nama" required v-model="form.nama"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Jenis kelamin">
                  <b-form-radio value="L" v-model="form.jk">Laki-laki</b-form-radio>
                  <b-form-radio value="P" v-model="form.jk">Perempuan</b-form-radio>
                </b-form-group>
              </b-col>
              <b-col md="10" sm="12">
                <b-form-group label="Alamat">
                  <b-form-input type="text" placeholder="Alamat" required v-model="form.alamat"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="10" sm="12">
                <b-form-group label="Tempat lahir">
                  <b-form-input
                    type="text"
                    placeholder="Tempat lahir"
                    required
                    v-model="form.tempat_lahir"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Tanggal lahir">
                  <b-form-input type="date" required v-model="form.tanggal_lahir"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Nomor Hp">
                  <b-form-input type="text" placeholder="Nomor Hp" required v-model="form.hp"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="10" sm="12">
                <b-form-group label="Email">
                  <b-form-input type="email" placeholder="Email" required v-model="form.email"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Super admin">
                  <b-form-radio-group :options="options" required v-model="form.superadmin"></b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Bidang studi / Kelas yang diampu">
                  <b-input-group v-for="(i,index) in form.ampu" :key="index">
                    <b-form-input
                      type="text"
                      placeholder="Bidang studi"
                      required
                      v-model="i.bidang_studi"
                    ></b-form-input>
                    <b-form-input
                      type="text"
                      placeholder="Kelas yang diampu"
                      required
                      v-model="i.kelas_ampu"
                    ></b-form-input>
                    <b-btn size="sm" @click="hapusAmpu(index)">-</b-btn>
                  </b-input-group>
                  <b-btn size="sm" @click="tambahAmpu">+</b-btn>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn size="sm" class="btn-info" @click="update">Simpan</b-btn>
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
import { user } from "../../api";
export default {
  name: "UpdateSiswa",
  data() {
    return {
      form: {},
      options: [
        { text: "Ya", value: 1 },
        { text: "Tidak", value: 0 }
      ]
    };
  },
  methods: {
    async loadData() {
      let data = await user.getOneUser(this.$route.params.id);
      this.form = data.data;
    },
    async update() {
      let data = await user.updateUser(this.$route.params.id,this.form);
      if (data.status == 200) {
        this.showMessage();
      }
    },
    showMessage() {
      this.$bvModal.msgBoxOk("Berhasil mengupdate admin", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    tambahAmpu() {
      this.form.ampu.push({ bidang_studi: "", kelas_ampu: "" });
    },
    hapusAmpu(index) {
      if (this.form.ampu.length) {
        this.form.ampu.splice(index, 1);
      }
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