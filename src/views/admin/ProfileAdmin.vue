<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card header="Profile">
            <b-card-text>
              <b-row>
                <b-col md="3" sm="12">Nama</b-col>
                <b-col md="1" sm="12">:</b-col>
                <b-col md="8" sm="12">{{profile.nama}}</b-col>
              </b-row>
              <b-row>
                <b-col md="3" sm="12">Username</b-col>
                <b-col md="1" sm="12">:</b-col>
                <b-col md="8" sm="12">{{profile.username}}</b-col>
              </b-row>
              <b-row>
                <b-col md="3" sm="12">Jenis kelamin</b-col>
                <b-col md="1" sm="12">:</b-col>
                <b-col md="8" sm="12">{{profile.jk}}</b-col>
              </b-row>
              <b-row>
                <b-col md="3" sm="12">Alamat</b-col>
                <b-col md="1" sm="12">:</b-col>
                <b-col md="8" sm="12">{{profile.alamat}}</b-col>
              </b-row>
              <b-row>
                <b-col md="3" sm="12">Tempat lahir</b-col>
                <b-col md="1" sm="12">:</b-col>
                <b-col md="8" sm="12">{{profile.tempat_lahir}}</b-col>
              </b-row>
              <b-row>
                <b-col md="3" sm="12">Tanggal lahir</b-col>
                <b-col md="1" sm="12">:</b-col>
                <b-col md="8" sm="12">{{profile.tanggal_lahir}}</b-col>
              </b-row>
              <b-row>
                <b-col md="3" sm="12">Hp</b-col>
                <b-col md="1" sm="12">:</b-col>
                <b-col md="8" sm="12">{{profile.hp}}</b-col>
              </b-row>
              <b-row>
                <b-col md="3" sm="12">Email</b-col>
                <b-col md="1" sm="12">:</b-col>
                <b-col md="8" sm="12">{{profile.email}}</b-col>
              </b-row>
              <b-row class="text-center">
                <b-col>
                  <b-btn-group>
                    <b-btn @click="updateUsername">Ganti username</b-btn>
                    <b-btn @click="updatePassword">Ganti password</b-btn>
                  </b-btn-group>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../logout";
import { user } from "../../api";
export default {
  name: "ProfileAdmin",
  data() {
    return {
      profile: {}
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getProfile(this.$route.params.id);
        this.profile = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    updateUsername() {
      this.$router.push(
        `/admin/update-username/${this.$store.getters.getUser.uuid}`
      );
    },
    updatePassword() {
      this.$router.push(
        `/admin/update-password/${this.$store.getters.getUser.uuid}`
      );
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>