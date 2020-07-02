<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card title="Daftar Admin">
            <b-card-text>
              <b-table striped hover :items="items" :fields="fields"></b-table>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../../api";
export default {
  name: "DaftarAdmin",
  data() {
    return {
      items: [],
      fields: [
        "username",
        "superadmin",
        { key: "created_at", label: "Dibuat" },
        { key: "updated_at", label: "Update Terakhir" }
      ]
    };
  },
  methods: {
    async loadData() {
      let data = await user.getUser();
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