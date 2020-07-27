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
      if (this.form.kelas == "") {
        this.showMessageCek("Kelas");
      } else if (this.form.label == "") {
        this.showMessageCek("Label");
      } else {
        let data = await user.addKelas(this.form);
        if (data.status == 200) {
          this.showMessageSukses()
          this.clearForm()
        }
      }
    },
    showMessageSukses() {
      this.$bvModal.msgBoxOk("Berhasil menambahkan kelas baru", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    showMessageCek(form) {
      this.$bvModal.msgBoxOk(`Form ${form} tidak boleh kosong`, {
        title: "Maaf",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true,
      });
    },
    clearForm(){
      this.form.kelas == ""
      this.form.label == ""
    }
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>