<template>
  <div>
    <Header />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  name: "LayoutAdmin",
  components: { Header },
};
</script>