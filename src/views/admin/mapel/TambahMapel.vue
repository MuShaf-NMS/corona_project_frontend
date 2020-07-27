<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Tambah Mata Pelajaran Baru">
          <b-card-text>
            <b-form>
              <b-col md="6">
                <b-form-group label="Mata Pelajaran">
                    <b-form-input type="text" placeholder="Mata Pelajaran" v-model="form.mapel" required></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn @click="tambahMapel" size="sm">Tambah</b-btn>
              </b-col>
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../../../api";
export default {
  name: "TambahMapel",
  data() {
    return {
      form: {
        mapel: "",
      },
    };
  },
  methods: {
    async tambahMapel() {
      let data = await user.addMapel(this.form);
      console.log(data.data);
    },
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>