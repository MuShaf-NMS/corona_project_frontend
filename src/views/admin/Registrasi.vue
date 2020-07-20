<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card header="Registrasi admin">
          <b-card-text>
            <b-form>
              <b-col md="6" sm="12">
                <b-form-group label="Nama">
                  <b-form-input type="text" placeholder="Nama" required v-model="form.nama"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Username">
                  <b-form-input type="text" placeholder="Username" requierd v-model="form.username"></b-form-input>
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
                    <b-btn @click="hapusAmpu(index)">-</b-btn>
                  </b-input-group>
                  <b-btn @click="tambahAmpu">+</b-btn>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Password">
                  <b-form-input
                    type="password"
                    placeholder="Password"
                    required
                    v-model="form.password"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Confirm password">
                  <b-form-input
                    type="password"
                    placeholder="Confirm password"
                    required
                    v-model="confirm_password"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn class="btn-info" @click="registration">Registrasi</b-btn>
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
  name: "Registrasi",
  data() {
    return {
      form: {
        nama: "",
        username: "",
        jk: "",
        alamat: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        hp: "",
        email: "",
        password: "",
        superadmin: false,
        ampu: [{ bidang_studi: "", kelas_ampu: "" }]
      },
      confirm_password: "",
      options: [
        { text: "Ya", value: true },
        { text: "Tidak", value: false }
      ]
    };
  },
  methods: {
    isConfirmed() {
      if (this.form.password == this.confirm_password) {
        return true;
      }
      return false;
    },
    clearForm() {
      this.form.nama = "";
      this.form.username = "";
      this.form.jk = "";
      this.form.alamat = "";
      this.form.tempat_lahir = "";
      this.form.tanggal_lahir = "";
      this.form.hp = "";
      this.form.email = "";
      this.form.password = "";
      this.form.superadmin = false;
      this.confirm_password = "";
      this.bidang_studi = "";
      this.kelas_ampu = "";
    },
    showMessageSukses() {
      this.$bvModal.msgBoxOk("Berhasil menambahkan admin baru", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    showMessageKonfir() {
      this.$bvModal.msgBoxOk("Tolong konfirmasi password anda", {
        title: "Maaf",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    async registration() {
      if (this.isConfirmed()) {
        try {
          let data = await user.addUser(this.form);
          if (data.status == 200) {
            this.showMessageSukses();
            this.clearForm();
          }
        } catch (err) {
          logout.clear();
        }
      } else {
        this.showMessageKonfir();
      }
    },
    tambahAmpu() {
      this.form.ampu.push({ bidang_studi: "", kelas_ampu: "" });
    },
    hapusAmpu(index) {
      if (this.form.ampu.length) {
        this.form.ampu.splice(index, 1);
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