<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Update Mata Pelajaran">
          <b-card-text>
            <b-form>
              <b-col>
                <b-form-group label="Mata pelajaran">
                    <b-form-input type="text" placeholder="Mata Pelajaran" v-model="form.mapel" required></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-btn @click="updateMapel" size="sm">Update</b-btn>
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
      let data = await user.getOneMapel(this.$route.params.uuid);
      this.form = data.data;
    },
    async updateMapel() {
      user.updateMapel(this.$route.params.uuid,this.form);
    },
  },
  created() {
    this.loadData();
  },
};
</script>