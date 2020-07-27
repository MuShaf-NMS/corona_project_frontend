<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card :title="title">
          <b-card-text @deleted="loadData">
            <b-row v-for="(i,index) in kelascabang" :key="index">
              <b-col v-for="(j,index) in i" :key="index" md="4">
                <kelas-cabang :uuid="j.uuid" :label="j.label" />
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
      title: `Daftar Kelas ${this.$route.params.kelas}`
    };
  },
  methods: {
    async loadData() {
      let data = await user.getDaftarKelasCabang(this.$route.params.kelas);
      this.kelascabang = this.triple(data.data);
    },
    triple(list){
      let hasil = []
      let lis = []
      for(let i = 0; i < list.length; i++){
        lis.push(list[i])
        if(lis.length == 3) {
          hasil.push(lis)
          lis = []
        } else if (lis.length < 3 && i == list.length-1){
          hasil.push(lis)
        }
      }
      return hasil
    },
    update(uuid){
        this.$router.push(`/update-kelas/${uuid}`)
    },
    async hapus(uuid){
        await user.deleteKelas(uuid)
    }
  },
  created() {
    this.loadData();
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>