<template>
  <div>
    <b-row class="card-dest">
      <b-col>
        <b-card>
          <b-row>
            <b-col md="3" sm="12">Kelas</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{kelas}}</b-col>
          </b-row>
          <b-row>
            <b-col md="3" sm="12">Mata Pelajaran</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{mapel}}</b-col>
          </b-row>
          <b-row>
            <b-col md="3" sm="12">Materi</b-col>
            <b-col md="1" sm="12">:</b-col>
            <b-col md="8" sm="12">{{materi}}</b-col>
          </b-row>
        </b-card>
        <b-card class="card-dest">
          <b-row>
            <b-col md="1" sm="12">{{idx + 1}}.</b-col>
            <b-col>
              <b-card-text v-if="loaded">
                <b-row>{{soalke.soal}}</b-row>
                <b-row>
                  <ul>
                    <li v-for="(i,index) in soalke.opsi" :key="index">{{i.nilai}}</li>
                  </ul>
                </b-row>
                <b-row>Kunci jawaban: {{soalke.kunci_jawaban}}</b-row>
                <b-row>Skor: {{soalke.skor}}</b-row>
              </b-card-text>
            </b-col>
          </b-row>
        </b-card>
        <b-card v-if="edit" class="card-dest">
          <b-row>
            <b-col md="1" sm="12"></b-col>
            <b-col>
              <b-card-text>
                <b-row>
                  <b-form-group label="Soal">
                    <b-form-input type="text" placeholder="Soal" required v-model="soal[idx].soal"></b-form-input>
                  </b-form-group>
                </b-row>
                <b-row>
                  <b-form-group label="Skor">
                    <b-form-input
                      type="number"
                      placeholder="Skor"
                      required
                      v-model="soal[idx].skor"
                    ></b-form-input>
                  </b-form-group>
                </b-row>
                <b-row md="12" sm="12">
                  <b-form-group
                    label="Opsi"
                    description="Opsi pertama yang anda masukkan dianggap sebagai kunci jawaban"
                  >
                    <b-form-input
                      type="text"
                      placeholder="Opsi pertama (Kunci jawaban)"
                      required
                      v-model="soal[idx].opsi[0].nilai"
                    ></b-form-input>
                    <b-input-group>
                      <b-form-input
                        type="text"
                        placeholder="Opsi kedua"
                        required
                        v-model="soal[idx].opsi[1].nilai"
                      ></b-form-input>
                      <b-form-input
                        type="text"
                        placeholder="Opsi ketiga"
                        required
                        v-model="soal[idx].opsi[2].nilai"
                      ></b-form-input>
                    </b-input-group>
                    <b-input-group>
                      <b-form-input
                        type="text"
                        placeholder="Opsi keempat"
                        required
                        v-model="soal[idx].opsi[3].nilai"
                      ></b-form-input>
                      <b-form-input
                        type="text"
                        placeholder="Opsi kelima"
                        required
                        v-model="soal[idx].opsi[4].nilai"
                      ></b-form-input>
                    </b-input-group>
                  </b-form-group>
                </b-row>
              </b-card-text>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="card-dest">
          <b-row>
            <b-col>
              <b-btn-group>
                <b-btn size="sm" @click="mundur" :disabled="idx == 0">
                  <b-icon icon="chevron-double-left"></b-icon>sebelumnya
                </b-btn>
                <b-btn size="sm" @click="lanjut" :disabled="idx == soal.length - 1">
                  selanjutnya
                  <b-icon icon="chevron-double-right"></b-icon>
                </b-btn>
              </b-btn-group>
            </b-col>
            <b-col>
              <b-btn-group class="kiri">
                <b-btn size="sm" @click="toEdit">
                  <b-icon icon="pencil-square"></b-icon>Edit
                </b-btn>
                <b-btn size="sm" @click="updateSoal">
                  <b-icon icon="file-check"></b-icon>Simpan
                </b-btn>
                <b-btn size="sm" @click="deleteSoal(soal[idx].uuid)">
                  <b-icon icon="trash"></b-icon>Hapus
                </b-btn>
              </b-btn-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { user } from "../../../api";
import logout from "../../logout";
export default {
  name: "DetailSoal",
  data() {
    return {
      soal: [],
      soalke: {},
      kelas: "",
      mapel: "",
      materi: "",
      idx: 0,
      loaded: false,
      edit: false,
      options: [
        { text: "Ya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
    };
  },
  methods: {
    async loadData() {
      try {
        let data = await user.getCekSoal(this.$route.params.uuid_materi);
        this.kelas = data.data.kelas;
        this.mapel = data.data.mapel;
        this.materi = data.data.materi;
        this.loaded = true;
        this.soal = data.data.soal;
        if (this.soal.length == 0) {
          this.$router.push("/daftar-soal");
        }
        this.soalke = this.soal[this.idx];
      } catch (err) {
        logout.clear();
      }
    },
    async updateSoal() {
      try {
        let data = await user.updateSoal(
          this.$route.params.uuid_materi,
          this.soal
        );
        if (data.status == 200) {
          this.showMessage();
        }
      } catch (err) {
        logout.clear();
      }
    },
    showMessage() {
      this.$bvModal.msgBoxOk("Berhasil mengupdate soal", {
        title: "Sukses",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true,
      });
    },
    lanjut() {
      this.idx += 1;
      this.soalke = this.soal[this.idx];
    },
    mundur() {
      this.idx -= 1;
      this.soalke = this.soal[this.idx];
    },
    toEdit() {
      return (this.edit = !this.edit);
    },
    showMessageWarning(uuid) {
      this.$bvModal
        .msgBoxConfirm(`Apakah anda yakin untuk menghapus soal ini?`, {
          title: "Perhatian!!!",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          cancelVariant: "danger",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          if (value) {
            user.deleteSoal(uuid);
            this.loadData();
          }
        });
    },
    async deleteSoal(uuid) {
      try {
        await this.showMessageWarning(uuid);
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
<style scoped>
.card-dest {
  margin-top: 30px;
}
.kiri {
  float: right;
}
.garis {
  line-clamp: auto;
}
</style>