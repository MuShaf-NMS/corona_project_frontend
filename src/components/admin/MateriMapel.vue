<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="materi">
          <b-card-text>
            <b-row>
              <b-col>
                  <b-btn size="sm" @click="detail">Detail</b-btn>
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
import { user } from '../../api';
export default {
  name: "MateriMapel",
  props: { uuid: String, materi: String },
  data() {
    return {
    };
  },
  methods: {
    detail(){
      this.$router.push(`/detail-materi/${this.uuid}`)
    },
    hapus() {
        this.showMessageWarning(this.uuid)
    },
    showMessageWarning(uuid) {
      this.$bvModal
        .msgBoxConfirm(
          `Apakah anda yakin untuk menghapus materi ini?`,
          {
            title: "Perhatian!!!",
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            cancelVariant: "danger",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true
          }
        )
        .then(value => {
          if (value) {
            user.deleteMateri(uuid);
            this.$emit("deleted")
          }
        });
    }
  }
};
</script>