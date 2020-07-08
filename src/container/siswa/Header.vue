<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item-dropdown text="Materi">
          <b-dropdown-item to="/siswa/materi">Materi</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Soal">
          <b-dropdown-item to="/siswa/daftar-soal">Daftar Soal</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>User</template>
          <b-dropdown-item @click="toProfile">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import {user} from '../../api'
export default {
    name:"Header",
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
    },
    toProfile(){
      this.$router.push(`/siswa/profile/${this.$store.getters.getUser.uuid}`)
    }
  }
}
</script>