<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Daftar Mata Pelajaran">
          <b-card-text>
            <b-table striped hover :items="mapel" :fields="fields">
              <template v-slot:cell(update)="row">
                <b-btn size="sm" @click="update(row.item.uuid)">
                  <b-icon icon="pencil-square"></b-icon>
                </b-btn>
              </template>
              <template v-slot:cell(hapus)="row">
                <b-btn size="sm" @click="hapus(row.item.uuid)">
                  <b-icon icon="trash"></b-icon>
                </b-btn>
              </template>
            </b-table>

            <!--
            <b-row v-for="(i,index) in mapel" :key="index" class="card-dest">
              <b-col v-for="(j,index) in i" :key="index" md="4">
                <mapel :mapel="j.mapel" :uuid="j.uuid" />
              </b-col>
            </b-row>
            -->
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
//import Mapel from "../../../components/admin/Mapel"
import { user } from "../../../api";
import logout from "../../logout";
export default {
  name: "DaftarMapel",
  //components: { Mapel },
  data() {
    return {
      mapel: [],
      fields: ["mapel", "update", "hapus"],
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getDaftarMapel();
        //this.mapel = this.triple(data.data);
        this.mapel = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    triple(list) {
      let hasil = [];
      let lis = [];
      for (let i = 0; i < list.length; i++) {
        lis.push(list[i]);
        if (lis.length == 3) {
          hasil.push(lis);
          lis = [];
        } else if (lis.length < 3 && i == list.length - 1) {
          hasil.push(lis);
        }
      }
      return hasil;
    },
    async hapus(uuid) {
      try {
        await user.deleteMapel(uuid);
      } catch (err) {
        logout.clear();
      }
    },
    update(uuid) {
      this.$router.push(`/update-mapel/${uuid}`);
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>