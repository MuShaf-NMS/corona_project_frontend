<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Daftar Kelas">
          <b-card-text>
            <b-row>
              <b-col v-for="(i,index) in kelascabang" :key="index">
                <kelas-cabang :uuid="i.uuid" :label="i.label" />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import KelasCabang from "../../../components/admin/KelasCabang"
import { user } from "../../../api";
export default {
  name: "DaftarKelasCabang",
  components: { KelasCabang },
  data() {
    return {
      kelascabang: [],
    };
  },
  methods: {
    async loadData() {
      let data = await user.getDaftarKelasLabel(this.$route.params.kelas);
      this.kelascabang = data.data;
    },
    update(uuid){
        this.$router.push(`/update-kelas/${uuid}`)
    },
    async hapus(uuid){
        await user.deleteKelas(uuid)
    }
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