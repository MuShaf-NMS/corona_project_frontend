<template>
  <div>
    <b-row class="justify-content-center align-items-center card-dest">
      <b-col md="4" sm="12">
        <b-card title="Login" class="bg-transparent">
          <b-card-text>
            <b-form>
              <b-col>
                <b-form-group>
                  <b-input-group>
                    <template v-slot:prepend>
                      <b-input-group-text>
                        <b-icon icon="person-fill" shift-v scale="1"></b-icon>
                      </b-input-group-text>
                    </template>
                    <b-form-input type="text" v-model="form.username" placeholder="Username"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group>
                  <b-input-group>
                    <template v-slot:prepend>
                      <b-input-group-text>
                        <b-icon icon="lock-fill" shift-v scale="1"></b-icon>
                      </b-input-group-text>
                    </template>
                    <b-form-input type="password" v-model="form.password" placeholder="Password"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn size="sm" class="btn-info" @click="login">Login</b-btn>
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
        password: "",
      },
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
        centered: true,
      });
    },
    async login() {
      try {
        let data = await user.login(this.form);
        this.$store.dispatch("saveUser", data.data);
        if (this.$store.getters.getUser.status == "admin") {
          this.$router.push("/");
        } else {
          this.$router.push("/siswa");
        }
      } catch {
        this.showMessage();
      }
    },
  },
};
</script>
<style scoped>
.card-dest {
  padding-top: 200px;
}
</style>