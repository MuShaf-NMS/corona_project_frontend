<template>
    <div>
        <b-row class="justify-content-center align-items-center">
            <b-col md="6" sm="12">
                <b-card>
                    <b-form>
                        <h3 class="text-center text-info">Registrasi</h3>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.nama" placeholder="Nama"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.username" placeholder="Username"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.alamat" placeholder="Alamat"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.tempat_lahir" placeholder="Tempat lahir"></b-form-input>
                        </div>
                        <div class="form-group">
                            <label>Tanggal lahir</label>
                            <span>
                                <b-form-input type="date" v-model="form.tanggal_lahir"></b-form-input>
                            </span>
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.hp" placeholder="Nomor Hp"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.email" placeholder="Email"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="password" v-model="form.password" placeholder="Password"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="password" v-model="confirm_password" placeholder="Confirm password"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-btn class="btn-info btn-md" @click="registration">Registrasi</b-btn>
                        </div>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import {siswa} from '../api'
export default {
    name : "RegistrasiSiswa",
    data(){
        return {
            form: {
                nama: "",
                username: "",
                alamat: "",
                tempat_lahir: "",
                tanggal_lahir: "",
                hp: "",
                email: "",
                password: ""
            },
            confirm_password: ""
        }
    },
    methods: {
        isConfirmed(){
            if (this.form.password == this.confirm_password){
                return true
            }
            return false
        },
        async registration(){
            if (this.isConfirmed()){
                let data = await siswa.addSiswa(this.form)
                console.log(data.status)
            } else {
                console.log('please confirm your password')
            }
            

        }
    }
}
</script>