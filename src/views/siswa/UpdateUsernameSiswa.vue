<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Update username">
          <b-card-text>
            <b-form>
              <b-col md="6" sm="12">
                <b-form-group label="Username baru">
                  <b-form-input type="text" v-model="form.username" placeholder="Username"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Konfirmasi Password">
                  <b-form-input
                    type="password"
                    v-model="form.password"
                    placeholder="Konfirmasi password"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn size="sm" @click="updateUsername">Update</b-btn>
              </b-col>
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { siswa } from "../../api";
import logout from "../logout";
export default {
  name: "UpadetUsernameSiswa",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await siswa.getUsername(this.$store.getters.getUser.uuid);
        this.form.username = data.data.username;
      } catch (err) {
        logout.clear();
      }
    },
    async updateUsername() {
      try {
        let data = await siswa.updateUsername(this.$route.params.id, this.form);
        if (data.data.msg == "Sukses") {
          this.$store.dispatch("saveUsername", this.form.username);
          this.showMessageSukses();
        } else if (data.data.msg == "Salah") {
          this.showMessageSalah();
        } else {
          this.showMessageMaaf();
        }
      } catch (err) {
        logout.clear();
      }
    },
    showMessageSukses() {
      this.$bvModal.msgBoxOk("Berhasil mengganti username", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true,
      });
    },
    showMessageMaaf() {
      this.$bvModal.msgBoxOk(
        "Maaf, username sudah ada. Silahkan masukkan username yang lain",
        {
          title: "Maaf",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        }
      );
    },
    showMessageSalah() {
      this.$bvModal.msgBoxOk("Password yang anda masukkan salah", {
        title: "Maaf",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true,
      });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>