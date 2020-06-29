<template>
  <div>
      <b-row class="justify-content-center align-items-center">
          <b-col md="6" sm="12">
              <b-card>
                  <b-form>
                      <h3>Login</h3>
                      <div class="form-group">
                          <b-form-input type="text" v-model="form.username" placeholder="Username"></b-form-input>
                      </div>
                      <div class="form-group">
                          <b-form-input type="password" v-model="form.password" placeholder="Password"></b-form-input>
                      </div>
                      <div class="form-group">
                          <b-form-checkbox v-model="form.rememberMe">Ingat saya</b-form-checkbox>
                      </div>
                      <div class="form-group">
                          <b-btn class="btn-info btn-md" @click="login">Login</b-btn>
                      </div>
                  </b-form>
              </b-card>
          </b-col>
      </b-row>
  </div>
</template>
<script>
import {user} from "../api";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        rememberMe: false
      }
    };
  },
  methods: {
    async login() {
      let data = await user.login(this.form);
      this.$store.dispatch("saveUser",data.data)
      console.log(this.$store.getters.getUser)
      this.$router.push('/register-admin')
    }
  }
};
</script>