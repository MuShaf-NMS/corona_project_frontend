<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Update Kelas">
          <b-card-text>
            <b-form>
              <b-col>
                <b-form-group label="Kelas">
                  <b-form-input type="number" placeholder="Kelas" v-model="form.kelas" required></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Label">
                  <b-form-input type="text" placeholder="Label" v-model="form.label" required></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn @click="updateKelas" size="sm">Update</b-btn>
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
  name: "UpdateKelas",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    async loadData() {
      let data = await user.getOneKelas(this.$route.params.uuid);
      console.log(data)
      this.form = data.data;
      console.log(this.form);
    },
    async updateKelas() {
      user.updateKelas(this.$route.params.uuid,this.form);
    },
  },
  created() {
    this.loadData();
  },
};
</script>