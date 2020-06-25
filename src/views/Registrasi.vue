<template>
  <div>
    <b-row>
      <b-col md="3" sm="12"></b-col>  
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card header="Registrasi">
            <b-card-text>
              <b-form>
                <b-col md="12" sm="12">
                  <b-form-group label="Nama">
                    <b-form-input type="text" placeholder="Nama" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Username">
                    <b-form-input type="text" placeholder="Username" requierd></b-form-input>
                  </b-form-group>
                  <b-form-group label="Alamat">
                    <b-form-input type="text" placeholder="Alamat" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Tempat lahir">
                    <b-form-input type="text" placeholder="Tempat lahir" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Tanggal lahir">
                    <b-form-input type="date" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Nomor Hp">
                    <b-form-input type="text" placeholder="Nomor Hp" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Email">
                    <b-form-input type="email" placeholder="Email" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password">
                    <b-form-input type="password" placeholder="Password" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Confirm password">
                      <b-form-input type="password" placeholder="Confirm password" required></b-form-input>
                  </b-form-group>
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
import { user } from "../api";
export default {
  name: "Registrasi",
  data() {
    return {
      form: {
        nama: "",
        username: "",
        alamat: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        hp: "",
        email: "",
        password: "",
        superadmin: false
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
        let data = await user.addUser(this.form);
        console.log(data.status);
      } else {
        console.log("please confirm your password");
      }
    }
  }
};
</script>