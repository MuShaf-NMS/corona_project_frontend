<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card :header="materi.mapel" :title="materi.materi">
          <b-card-text>
            <b-row>
              <b-col>{{materi.isi}}</b-col>
            </b-row>
            <b-row class="card-dest">
              <b-col>
                <b-embed type="iframe" aspect="16by9" :src="materi.link" allowfullscreen></b-embed>
              </b-col>
            </b-row>
            <b-row class="card-dest">
              <b-col>
                <b-btn size="sm" @click="toEdit">Update</b-btn>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
        <b-card header="Update Materi" class="card-dest" v-if="edit">
          <b-card-text>
            <b-form>
              <b-col md="6" sm="12">
                <b-form-group label="Kelas">
                  <b-form-select v-model="materi.uuid_kelas" :options="kelas">
                    <template v-slot:first>
                      <b-form-select-option value disabled>-- Kelas --</b-form-select-option>
                    </template>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Mata Pelajaran">
                  <b-form-select v-model="materi.uuid_mapel" :options="studi">
                    <template v-slot:first>
                      <b-form-select-option value disabled>-- Mata Pelajaran --</b-form-select-option>
                    </template>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="6" sm="12">
                <b-form-group label="Materi">
                  <b-form-input type="text" placeholder="Materi" required v-model="materi.materi"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Isi">
                  <b-form-textarea placeholder="Isi" rows="3" max-rows="5" v-model="materi.isi"></b-form-textarea>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Link video youtube">
                  <b-form-input
                    type="text"
                    placeholder="Link video youtube"
                    required
                    v-model="materi.link"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group>
                  <b-btn size="sm" class="btn-info" @click="updateMateri">Simpan</b-btn>
                </b-form-group>
              </b-col>
            </b-form>
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
  name: "UpdateMateri",
  data() {
    return {
      materi: {},
      edit: false,
      kelas: [],
      studi: []
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getDetailMateri(this.$route.params.id);
        this.materi = data.data;
        let kelas = await user.getKelas()
        this.kelas = kelas.data
        let studi = await user.getMapel()
        this.studi = studi.data
      } catch (err) {
        logout.clear();
      }
    },
    toEdit() {
      this.edit = !this.edit;
    },
    async updateMateri() {
      let data = await user.updateMateri(this.$route.params.id, this.materi);
      if (data.status == 200) {
        this.showMessageSukses();
      }
    },
    showMessageSukses() {
      this.$bvModal.msgBoxOk("Berhasil mengupdate materi", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true,
      });
    },
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