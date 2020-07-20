<template>
  <div class="card-dest">
    <b-row class="justify-content-center align-items-center">
      <b-col md="4" sm="12">
        <b-card title="Login">
          <b-card-text>
            <b-form>
              <b-col>
                <b-form-group>
                  <b-form-input type="text" v-model="form.username" placeholder="Username"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group>
                  <b-form-input type="password" v-model="form.password" placeholder="Password"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn class="btn-info" @click="login">Login</b-btn>
              </b-col>
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../api";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""      }
    };
  },
  methods: {
    showMessage() {
      this.$bvModal.msgBoxOk("Username atau Password salah", {
        title: "Sorry",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    async login() {
      try {
        let data = await user.login(this.form);
        this.$store.dispatch("saveUser", data.data);
        console.log(data.data)
        if (this.$store.getters.getUser.status == "admin") {
          this.$router.push("/admin");
        } else {
          this.$router.push("/siswa");
        }
      } catch {
        this.showMessage();
      }
    }
  }
};
</script>
<style scoped>
.card-dest {
  padding-top: 150px;
}
</style>