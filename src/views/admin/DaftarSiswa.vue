<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card title="Daftar Siswa">
          <b-card-text>
            <b-table striped hover :items="items" :fields="fields">
              <template v-slot:cell(actions)="row">
                <b-btn @click="update(row.item.uuid)">Update</b-btn>
              </template>
            </b-table>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../logout";
import { user } from "../../api";
export default {
  name: "DaftarSiswa",
  data() {
    return {
      items: [],
      fields: [
        "nama",
        { key: "created_at", label: "Dibuat" },
        { key: "updated_at", label: "Update terakhir" },
        "actions"
      ]
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSiswa();
        this.items = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    update(uuid){
      this.$router.push(`/update-siswa/${uuid}`)
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