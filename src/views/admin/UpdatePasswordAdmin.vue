<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card header="Update password">
          <b-card-text>
            <b-col>
              <b-form-group label="Password lama">
                <b-form-input
                  type="password"
                  v-model="form.password_lama"
                  placeholder="password lama"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Password baru">
                <b-form-input
                  type="password"
                  v-model="form.password_baru"
                  placeholder="password baru"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Konfirmasi Password">
                <b-form-input
                  type="password"
                  v-model="confirm_password"
                  placeholder="Konfirmasi password"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-btn @click="updatePassword">Update</b-btn>
            </b-col>
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
  name: "UpdatePasswordAdmin",
  data() {
    return {
      form: {
        password_lama: "",
        password_baru: ""
      },
      confirm_password: ""
    };
  },
  methods: {
    isConfirmed() {
      if (this.form.password_baru == this.confirm_password) {
        return true;
      }
      return false;
    },
    async updatePassword() {
      if (this.isConfirmed()) {
        let data = await user.updatePassword(this.$route.params.id, this.form);
        if (data.status == 200) {
          this.showMessageSukses();
        }
      } else {
        this.showMessageMaaf()
      }
    },
    showMessageSukses() {
      this.$bvModal.msgBoxOk("Berhasil mengganti password", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    showMessageMaaf() {
      this.$bvModal.msgBoxOk("Tolong konfirmasi password anda", {
        title: "Maaf",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    }
  }
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>