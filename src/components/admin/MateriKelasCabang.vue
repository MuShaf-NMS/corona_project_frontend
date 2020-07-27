<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row>
              <b-col md="8" sm="12">
                Jumlah materi: {{jml_materi}}
              </b-col>
              <b-col md="4" sm="12">
                  <b-btn size="sm" @click="detail">Detail</b-btn>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {user} from "../../api"
export default {
  name: "MateriKelasCabang",
  props: { kelas: String, label: String, mapel: String },
  data() {
    return {
      title: `${this.mapel}`,
      jml_materi: 0
    };
  },
  methods: {
    async loadJmlMateri(){
      let data = await user.getMateriMapel(this.kelas,this.label,this.mapel);
      this.jml_materi = data.data.length
    },
    detail(){
      this.$router.push(`/daftar-materi/${this.kelas}/${this.label}/${this.mapel}`)
    }
  },
  mounted(){
    this.loadJmlMateri()
  }
};
</script>