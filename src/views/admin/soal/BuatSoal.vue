<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Soal Baru">
          <b-row>
            <b-col md="2" sm="12">
              <b-form-group>
                <b-form-input type="text" placeholder="Kelas" required v-model="lists[0].kelas"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="5" sm="12">
              <b-form-group>
                <b-form-input
                  type="text"
                  placeholder="Mata Pelajaran"
                  required
                  v-model="lists[0].mapel"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="5" sm="12">
              <b-form-group>
                <b-form-input type="text" placeholder="Materi" required v-model="lists[0].materi"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
        <b-card v-for="(list, index) in lists" :key="index" class="card-dest">
          <b-card-text>
            <b-col class="text-center">
              <h5>soal ke-{{index + 1}}</h5>
            </b-col>
            <b-col>
              <b-form-group label="Soal">
                <b-form-textarea
                  placeholder="Soal"
                  rows="3"
                  max-rows="5"
                  required
                  v-model="list.soal"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Skor">
                <b-form-input type="number" placeholder="Skor" required v-model="list.skor"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="12" sm="12">
              <b-form-group
                label="Opsi"
                description="Opsi pertama yang anda masukkan dianggap sebagai kunci jawaban"
              >
                <b-form-input
                  type="text"
                  placeholder="Opsi pertama (Kunci jawaban)"
                  required
                  v-model="list.opsi[0]"
                ></b-form-input>
                <b-input-group>
                  <b-form-input
                    type="text"
                    placeholder="Opsi kedua"
                    required
                    v-model="list.opsi[1]"
                  ></b-form-input>
                  <b-form-input
                    type="text"
                    placeholder="Opsi ketiga"
                    required
                    v-model="list.opsi[2]"
                  ></b-form-input>
                </b-input-group>
                <b-input-group>
                  <b-form-input
                    type="text"
                    placeholder="Opsi keempat"
                    required
                    v-model="list.opsi[3]"
                  ></b-form-input>
                  <b-form-input
                    type="text"
                    placeholder="Opsi kelima"
                    required
                    v-model="list.opsi[4]"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Tampilkan soal ini?">
                <b-form-radio-group :options="options" required v-model="list.tampil"></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col class="text-center">
              <b-btn-group>
                <b-btn size="sm" class="btn-danger" @click="hapusSoal(index)">Hapus Soal</b-btn>
                <b-btn size="sm" class="btn-info" @click="buatSoal">Simpan</b-btn>
                <b-btn size="sm" class="btn-success" @click="tambahSoal">Tambah Soal</b-btn>
              </b-btn-group>
            </b-col>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../../../api";
export default {
  name: "BuatSoal",
  data() {
    return {
      lists: [
        {
          kelas: "",
          mapel: "",
          materi: "",
          soal: "",
          skor: "",
          opsi: ["", "", "", "", ""],
          tampil: false
        }
      ],
      options: [
        { text: "Ya", value: true },
        { text: "Tidak", value: false }
      ]
    };
  },
  methods: {
    showMessage() {
      this.$bvModal.msgBoxOk("Berhasil menambahkan soal baru", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    },
    async buatSoal() {
      let data = await user.addSoal(this.lists);
      if (data.status == 200) {
        this.showMessage();
      }
    },
    tambahSoal() {
      this.lists.push({
        kelas: this.lists[0].kelas,
        mapel: this.lists[0].mapel,
        materi: this.lists[0].materi,
        soal: "",
        skor: "",
        opsi: ["", "", "", "", ""],
        tampil: false
      });
    },
    hapusSoal(index) {
      if (this.lists.length > 1) {
        this.lists.splice(index, 1);
      }
    }
  }
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>