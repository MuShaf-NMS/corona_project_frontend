<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card title="Daftar Admin">
          <b-card-text>
            <b-table striped hover :items="items" :fields="fields">
              <template v-slot:cell(created_at)="row">
                {{dateIna(row.item.created_at)}}
              </template>
              <template v-slot:cell(updated_at)="row">
                {{dateIna(row.item.updated_at)}}
              </template>
              <template v-slot:cell(Update)="row">
                <b-btn size="sm" @click="update(row.item.uuid)"><b-icon icon="pencil-square"></b-icon></b-btn>
              </template>
              <template v-slot:cell(Hapus)="row">
                <b-btn size="sm" @click="deleteAdmin(row.item.uuid,row.item.nama)"><b-icon icon="trash"></b-icon></b-btn>
              </template>
            </b-table>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import moment from 'moment'
import logout from "../../logout";
import { user } from "../../../api";
export default {
  name: "DaftarAdmin",
  data() {
    return {
      items: [],
      fields: [
        "nama",
        "superadmin",
        { key: "created_at", label: "Dibuat" },
        { key: "updated_at", label: "Update Terakhir" },
        "Update",
        "Hapus"
      ]
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getUser();
        this.items = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    dateIna(value){
      return moment(value).format('DD-MM-Y hh:mm:ss')
    },
    update(uuid) {
      this.$router.push(`/update-admin/${uuid}`);
    },
    showMessageWarning(uuid, nama) {
      this.$bvModal
        .msgBoxConfirm(
          `Apakah anda yakin untuk menghapus admin dengan nama ${nama}?`,
          {
            title: "Perhatian!!!",
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            cancelVariant: "danger",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true
          }
        )
        .then(value => {
          if (value) {
            user.deleteAdmin(uuid);
            this.loadData();
          }
        });
    },
    async deleteAdmin(uuid, nama) {
      this.showMessageWarning(uuid, nama);
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