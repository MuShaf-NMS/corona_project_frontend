<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card title="Daftar Soal">
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
import logout from "../logout";
import { user } from "../../api";
export default {
  name: "DaftarSoal",
  data() {
    return {
      items: [],
      fields: [{ key: "mapel", label: "Mata Pelajaran" }, "soal"]
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSoal();
        this.items = data.data;
      } catch (err) {
        logout.clear();
      }
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>