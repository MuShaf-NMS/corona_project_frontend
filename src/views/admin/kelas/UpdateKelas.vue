<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Update Kelas">
          <b-card-text>
            <b-form>
              <b-col>
                <b-form-group label="Kelas">
                  <b-input-group>
                    <b-form-input type="number" placeholder="Kelas" v-model="form.kelas" required></b-form-input>
                    <b-form-input type="text" placeholder="Label" v-model="form.label" required></b-form-input>
                  </b-input-group>
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
        let data = await user.getOneKelas(this.$route.params.uuid);
        this.form = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    async updateKelas() {
      try {
        user.updateKelas(this.$route.params.uuid, this.form);
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