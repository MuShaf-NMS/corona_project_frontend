<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item-dropdown text="Menu admin" right>
          <b-dropdown-item to="/register-admin">Tambah Admin</b-dropdown-item>
          <b-dropdown-item to="/tambahmateri">Tambah Materi</b-dropdown-item>
          <b-dropdown-item to="/register-siswa">Tambah Siswa</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>User</template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
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
      try {
        let data = await user.logout();
        if (data.status == 200) {
          this.$store.dispatch("logout")
          this.$router.push('/login')
        }
      } catch (error) {
          console.log(error)        
      }
    }
  }
};
</script>