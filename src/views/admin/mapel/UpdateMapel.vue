<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Update Mata Pelajaran">
          <b-card-text>
            <b-form>
              <b-col>
                <b-form-group label="Mata pelajaran">
                  <b-form-input
                    type="text"
                    placeholder="Mata Pelajaran"
                    v-model="form.mapel"
                    required
                  ></b-form-input>
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
import logout from "../../logout";

export default {
  name: "UpdateKelas",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getOneMapel(this.$route.params.uuid);
        this.form = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    async updateMapel() {
      try {
        await user.updateMapel(this.$route.params.uuid, this.form);
      } catch (err) {
        logout.clear();
      }
    },
  },
  created() {
    this.loadData();
  },
};
</script>