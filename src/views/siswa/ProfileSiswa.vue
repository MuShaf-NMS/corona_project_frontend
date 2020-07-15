<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card header="Profile">
          <b-card-text>
            <b-row>
              <b-col md="3">Nama</b-col>
              <b-col md="1">:</b-col>
              <b-col md="8">{{profile.nama}}</b-col>
            </b-row>
            <b-row>
              <b-col md="3">Username</b-col>
              <b-col md="1">:</b-col>
              <b-col md="8">{{profile.username}}</b-col>
            </b-row>
            <b-row>
              <b-col md="3">Jenis kelamin</b-col>
              <b-col md="1">:</b-col>
              <b-col md="8">{{profile.jk}}</b-col>
            </b-row>
            <b-row>
              <b-col md="3">Alamat</b-col>
              <b-col md="1">:</b-col>
              <b-col md="8">{{profile.alamat}}</b-col>
            </b-row>
            <b-row>
              <b-col md="3">Tempat lahir</b-col>
              <b-col md="1">:</b-col>
              <b-col md="8">{{profile.tempat_lahir}}</b-col>
            </b-row>
            <b-row>
              <b-col md="3">Tanggal lahir</b-col>
              <b-col md="1">:</b-col>
              <b-col md="8">{{profile.tanggal_lahir}}</b-col>
            </b-row>
            <b-row>
              <b-col md="3">Hp</b-col>
              <b-col md="1">:</b-col>
              <b-col md="8">{{profile.hp}}</b-col>
            </b-row>
            <b-row>
              <b-col md="3">Email</b-col>
              <b-col md="1">:</b-col>
              <b-col md="8">{{profile.email}}</b-col>
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
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../logout";
import { siswa } from "../../api";
export default {
  name: "profileSiswa",
  data() {
    return {
      profile: {}
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await siswa.getProfile(this.$route.params.id);
        this.profile = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    updateUsername(){
      this.$router.push(`/siswa/update-username/${this.$store.getters.getUser.uuid}`)
    },
    updatePassword() {
      this.$router.push(
        `/siswa/update-password/${this.$store.getters.getUser.uuid}`
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