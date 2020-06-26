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
    </b-navbar>
  </div>
</template>
<script>
export default {
    name:"Header"
}
</script>