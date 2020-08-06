<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-table striped hover :items="siswa" :fields="fields">
              <template v-slot:cell(created_at)="row">{{dateIna(row.item.created_at)}}</template>
              <template v-slot:cell(updated_at)="row">{{dateIna(row.item.updated_at)}}</template>
              <template v-slot:cell(update)="row">
                <b-btn size="sm" @click="update(row.item.uuid)">
                  <b-icon icon="pencil-square"></b-icon>
                </b-btn>
              </template>
              <template v-slot:cell(hapus)="row">
                <b-btn size="sm" @click="hapus(row.item.uuid,row.item.nama)">
                  <b-icon icon="trash"></b-icon>
                </b-btn>
              </template>
            </b-table>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import moment from "moment";
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "DaftarSiswa",
  data() {
    return {
      siswa: [],
      fields: [
        "nama",
        { key: "jk", label: "Jenis kelamin" },
        { key: "created_at", label: "Dibuat" },
        { key: "updated_at", label: "Update terakhir" },
        "update",
        "hapus",
      ],
      title: `Daftar Siswa Kelas ${this.$route.params.kelas} ${this.$route.params.cabang}`,
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getSiswa(
          this.$route.params.kelas,
          this.$route.params.cabang
        );
        this.siswa = data.data;
        console.log(this.siswa)
      } catch (err) {
        logout.clear();
      }
    },
    dateIna(value) {
      return moment(value).format("DD-MM-Y hh:mm:ss");
    },
    showMessageWarning(uuid, nama) {
      this.$bvModal
        .msgBoxConfirm(
          `Apakah anda yakin untuk menghapus siswa dengan nama ${nama}?`,
          {
            title: "Perhatian!!!",
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            cancelVariant: "danger",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true,
          }
        )
        .then((value) => {
          if (value) {
            user.deleteSiswa(uuid);
            this.loadData();
          }
        });
    },
    update(uuid) {
      this.$router.push(`/update-siswa/${uuid}`);
    },
    async hapus(uuid, nama) {
      try {
        await this.showMessageWarning(uuid, nama);
      } catch (err) {
        logout.clear();
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