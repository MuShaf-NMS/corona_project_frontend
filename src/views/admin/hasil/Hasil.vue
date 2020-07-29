<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Skor">
          <b-card-text>
            <b-table striped hover :items="items">
              <template v-slot:cell(skor)="row">
                {{isZero(row.item.skor)}}
              </template>
            </b-table>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "Hasil",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSkor(this.$route.params.uuid_materi);
        this.items = data.data;
        console.log(this.items);
      } catch (err) {
        logout.clear();
      }
    },
    isZero(skor) {
      if (skor == null) {
        return 0;
      } else {
        return skor;
      }
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