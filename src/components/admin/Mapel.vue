<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row>
              <b-col>
                <b-btn size="sm" @click="update">
                  <b-icon icon="pencil-square"></b-icon> Update
                </b-btn>
              </b-col>
              <b-col>
                <b-btn size="sm" @click="hapus" class="kiri">
                  <b-icon icon="trash"></b-icon> Hapus
                </b-btn>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../../api";
export default {
  name: "Mapel",
  props: { mapel: String, uuid: String },
  data() {
    return {
      title: this.mapel,
    };
  },
  methods: {
    hapus() {
      user.deleteMapel(this.uuid);
    },
    update() {
      this.$router.push(`/update-mapel/${this.uuid}`);
    },
  },
};
</script>
<style scoped>
.kiri {
  float: right;
}
</style>