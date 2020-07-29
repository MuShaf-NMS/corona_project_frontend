<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card header="Soal Baru">
          <b-row>
            <b-col md="2" sm="12">
              <b-form-group>
                <!--<b-form-input type="text" placeholder="Kelas" required v-model="lists[0].kelas"></b-form-input>-->
                <b-form-select v-model="lists[0].uuid_kelas" :options="kelas" @input="loadMapel">
                  <template v-slot:first>
                    <b-form-select-option value disabled>Kelas</b-form-select-option>
                  </template>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="5" sm="12">
              <b-form-group>
                <!--<b-form-input
                  type="text"
                  placeholder="Mata Pelajaran"
                  required
                  v-model="lists[0].mapel"
                ></b-form-input>-->
                <b-form-select v-model="lists[0].uuid_mapel" :options="studi" @input="loadMateri">
                  <template v-slot:first>
                    <b-form-select-option value disabled>Mata Pelajaran</b-form-select-option>
                  </template>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="5" sm="12">
              <b-form-group>
                <b-form-select v-model="lists[0].uuid_materi" :options="materi">
                  <template v-slot:first>
                    <b-form-select-option value disabled>Materi</b-form-select-option>
                  </template>
                </b-form-select>
                <!--<b-form-input type="text" placeholder="Materi" required v-model="lists[0].materi"></b-form-input>-->
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
import logout from "../../logout";
export default {
  name: "BuatSoal",
  data() {
    return {
      lists: [
        {
          uuid_kelas: "",
          uuid_mapel: "",
          uuid_materi: "",
          soal: "",
          skor: "",
          opsi: ["", "", "", "", ""],
        },
      ],
      options: [
        { text: "Ya", value: true },
        { text: "Tidak", value: false },
      ],
      kelas: [],
      studi: [],
      materi: [],
    };
  },
  methods: {
    async loadKelas() {
      try {
        let data = await user.getKelas();
        this.kelas = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    async loadMapel() {
      try {
        let data = await user.getMapel();
        this.studi = data.data;
      } catch (err) {
        logout.clear();
      }
    },
    async loadMateri() {
      try {
        let data = await user.materi(
          this.lists[0].uuid_kelas,
          this.lists[0].uuid_mapel
        );
        this.materi = data.data;
      } catch (err) {
        logout.clear();
      }
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
    showMessage() {
      this.$bvModal.msgBoxOk("Berhasil menambahkan soal baru", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true,
      });
    },
    async buatSoal() {
      if (this.lists[0].uuid_kelas == "") {
        this.showMessageCek("Kelas");
      } else if (this.lists[0].uuid_mapel == "") {
        this.showMessageCek("Mata Pelajaran");
      } else if (this.lists[0].uuid_materi == "") {
        this.showMessageCek("Materi");
      } else {
        try {
          let data = await user.addSoal(this.lists);
          console.log(this.lists);
          if (data.status == 200) {
            this.showMessage();
          }
        } catch (err) {
          logout.clear();
        }
      }
    },
    tambahSoal() {
      this.lists.push({
        uuid_kelas: this.lists[0].uuid_kelas,
        uuid_mapel: this.lists[0].uuid_mapel,
        uuid_materi: this.lists[0].uuid_materi,
        soal: "",
        skor: "",
        opsi: ["", "", "", "", ""],
      });
    },
    hapusSoal(index) {
      if (this.lists.length > 1) {
        this.lists.splice(index, 1);
      }
    },
  },
  mounted() {
    this.loadKelas();
  },
};
</script>
<style scoped>
.card-dest {
  margin-top: 30px;
}
</style>