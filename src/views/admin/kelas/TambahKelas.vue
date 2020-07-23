<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Tambah Kelas Baru">
          <b-card-text>
            <b-form>
              <b-col md="6">
                <b-form-group label="Kelas">
                  <b-input-group>
                    <b-form-input type="number" placeholder="Kelas" v-model="form.kelas" required></b-form-input>
                    <b-form-input type="text" placeholder="Label" v-model="form.label" required></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn @click="tambahKelas" size="sm">Tambah</b-btn>
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
  name: "TambahKelas",
  data() {
    return {
      form: {
        kelas: "",
        label: "",
      },
    };
  },
  methods: {
    async tambahKelas() {
      let data = await user.addKelas(this.form);
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