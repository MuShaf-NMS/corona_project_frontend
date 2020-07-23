<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Daftar Materi">
          <b-card-text>
            <b-row>
              <b-col v-for="(i,index) in items" :key="index">
                <materi :kelas="i.kelas" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Materi from "../../../components/admin/Materi";
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "DaftarMateri",
  components: { Materi },
  data() {
    return {
      items: []
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getMateri();
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
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>