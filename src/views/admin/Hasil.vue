<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Skor">
          <b-card-text>
            <b-table striped hover :items="items"></b-table>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../../api";
export default {
  name: "Hasil",
  data() {
    return {
      items: []
    };
  },
  methods: {
    async loadData() {
      let data = await user.getSkor(this.$route.params.materi);
      this.items = data.data;
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