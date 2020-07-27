<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item-dropdown text="Admin" v-if="this.$store.getters.getUser.superadmin">
          <b-dropdown-item to="/daftar-admin">Daftar Admin</b-dropdown-item>
          <b-dropdown-item to="/register-admin">Tambah Admin</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Siswa" v-if="this.$store.getters.getUser.superadmin">
          <b-dropdown-item to="/daftar-siswa">Daftar Siswa</b-dropdown-item>
          <b-dropdown-item to="/register-siswa">Tambah Siswa</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Kelas" v-if="this.$store.getters.getUser.superadmin">
          <b-dropdown-item to="/kelas">Daftar Kelas</b-dropdown-item>
          <b-dropdown-item to="/tambah-kelas">Tambah Kelas</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Mata Pelajaran" v-if="this.$store.getters.getUser.superadmin">
          <b-dropdown-item to="/mapel">Daftar Mata Pelajaran</b-dropdown-item>
          <b-dropdown-item to="/tambah-mapel">Tambah Mata Pelajaran</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Materi">
          <b-dropdown-item to="/tambah-materi">Tambah Materi</b-dropdown-item>
          <b-dropdown-item to="/daftar-materi">Daftar Materi</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Soal">
          <b-dropdown-item to="/buat-soal">Tambah Soal</b-dropdown-item>
          <b-dropdown-item to="/daftar-soal">Daftar Soal</b-dropdown-item>
          <b-dropdown-item to="/skor">Skor</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            {{$store.getters.getUser.username}}
            <b-icon icon="person-circle"></b-icon>
          </template>
          <b-dropdown-item @click="toProfile">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import { user } from "../../api";
export default {
  name: "Header",
  methods: {
    async logout() {
      let data = await user.logout();
      data.status == 200;
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    toProfile() {
      this.$router.push(`/admin/profile/${this.$store.getters.getUser.uuid}`);
    }
  }
};
</script>