<template>
  <div>
    <b-row class="card-dest">
      <b-col></b-col>
      <b-col md="6" sm="12">
        <b-card :title="title">
          <b-card-text>
            <b-table striped hover :items="items" :fields="fields">
              <template v-slot:cell(actions)="row">
                <b-btn size="sm" @click="update(row.item.uuid)">Update</b-btn>
              </template>
              <template v-slot:cell(#)="row">
                <b-btn size="sm" @click="deleteSiswa(row.item.uuid,row.item.nama)">Hapus</b-btn>
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
  name: "DaftarSiswaKelas",
  data() {
    return {
      title: "Daftar Siswa Kelas "+this.$route.params.kelas,
      items: [],
      fields: [
        "nama",
        { key: "created_at", label: "Dibuat" },
        { key: "updated_at", label: "Update terakhir" },
        "actions",
        "#"
      ],
      kelas: this.$route.params.kelas
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSiswaKelas(this.kelas);
        this.items = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    update(uuid){
      this.$router.push(`/update-siswa/${uuid}`)
    },
    showMessageWarning(uuid,nama) {
      this.$bvModal.msgBoxConfirm(`Apakah anda yakin untuk menghapus siswa dengan nama ${nama}?`, {
        title: "Perhatian!!!",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        cancelVariant: "danger",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      })
      .then((value) => {
        if (value) {
          user.deleteSiswa(uuid)
          this.loadData()
        }
      })
      .catch(err => console.log(err));
    },
    async deleteSiswa(uuid,nama){
      this.showMessageWarning(uuid,nama)
    }
  },
  created() {
    this.loadData();
  }
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>