<template>
  <div>
    <Header />
    <b-row>
      <b-col></b-col>
      <b-col md="8" sm="12"><router-view /></b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  name: "LayoutSiswa",
  components: { Header }
};
</script>