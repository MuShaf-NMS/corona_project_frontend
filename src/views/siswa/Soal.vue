<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card-group deck>
          <b-card title="Daftar Soal">
            <b-card-text>
              <b-table striped hover :items="items" :fields="fields">
                <template v-slot:cell(actions)="row">
                  <b-btn @click="toJawabSoal(row.item.uuid)">Jawab</b-btn>
                </template>
              </b-table>
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
import { siswa } from "../../api";
export default {
  name: "Soal",
  data() {
    return {
      items: [],
      fields: [{ key: "mapel", label: "Mata Pelajaran" }, "soal", "actions"],
      form: {}
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await siswa.getSoal();
        this.items = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    toJawabSoal(uuid) {
      this.$router.push(`/siswa/jawab-soal/${uuid}`);
    }
  },
  computed: {
    isTerjawab: (key) => {
      if (key){
        return "Terjawab"
      } else {
        return "Belum terjawab"
      }
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>