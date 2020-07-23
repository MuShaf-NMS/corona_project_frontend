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
  name: "KelasCabang",
  props: { uuid: String, label: String },
  data() {
    return {
      title: `Kelas ${this.$route.params.kelas.concat(" ", this.label)}`,
    };
  },
  methods: {
    hapus() {
      user.deleteKelas(this.uuid);
    },
    update() {
      this.$router.push(`${this.uuid}`);
    },
  },
};
</script>
<style scoped>
.kiri {
  float: right;
}
</style>