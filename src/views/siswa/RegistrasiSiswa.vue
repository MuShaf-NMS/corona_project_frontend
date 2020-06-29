<template>
  <div>
    <b-row class="card-dest">
      <b-col md="3" sm="12"></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card header="Registrasi">
            <b-card-text>
              <b-form>
                <b-col md="4" sm="12">
                  <b-form-group label="Nama">
                    <b-form-input type="text" placeholder="Nama" required v-model="form.nama"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                  <b-form-group label="Username">
                    <b-form-input
                      type="text"
                      placeholder="Username"
                      requierd
                      v-model="form.username"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Jenis kelamin">
                    <b-form-radio value="L" v-model="form.jk">Laki-laki</b-form-radio>
                    <b-form-radio value="P" v-model="form.jk">Perempuan</b-form-radio>
                  </b-form-group>
                </b-col>
                <b-col md="8" sm="12">
                  <b-form-group label="Alamat">
                    <b-form-input type="text" placeholder="Alamat" required v-model="form.alamat"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="8" sm="12">
                  <b-form-group label="Tempat lahir">
                    <b-form-input
                      type="text"
                      placeholder="Tempat lahir"
                      required
                      v-model="form.tempat_lahir"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                  <b-form-group label="Tanggal lahir">
                    <b-form-input type="date" required v-model="form.tanggal_lahir"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                  <b-form-group label="Nomor Hp">
                    <b-form-input type="text" placeholder="Nomor Hp" required v-model="form.hp"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="8" sm="12">
                  <b-form-group label="Email">
                    <b-form-input type="email" placeholder="Email" required v-model="form.email"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                  <b-form-group label="Password">
                    <b-form-input
                      type="password"
                      placeholder="Password"
                      required
                      v-model="form.password"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
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
        </b-card-group>
      </b-col>
      <b-col md="6" sm="12"></b-col>
    </b-row>
  </div>
</template>
<script>
import { siswa } from "../../api";
export default {
  name: "RegistrasiSiswa",
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
        password: ""
      },
      confirm_password: ""
    };
  },
  methods: {
    isConfirmed() {
      if (this.form.password == this.confirm_password) {
        return true;
      }
      return false;
    },
    async registration() {
      if (this.isConfirmed()) {
        let data = await siswa.addSiswa(this.form);
        console.log(data.status);
      } else {
        console.log("please confirm your password");
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