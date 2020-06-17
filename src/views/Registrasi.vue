<template>
    <div>
        <b-row class="justify-content-center align-items-center login-row">
            <b-col md="6" sm="12">
                <b-card>
                    <b-form>
                        <h3 class="text-center text-info">Registrasi</h3>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.nama" placeholder="nama"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.username" placeholder="username"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.alamat" placeholder="alamat"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.tempat_lahir" placeholder="tempat lahir"></b-form-input>
                        </div>
                        <div class="form-group">
                            <label>tanggal lahir</label>
                            <span>
                                <b-form-input type="date" v-model="form.tanggal_lahir"></b-form-input>
                            </span>
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" v-model="form.hp" placeholder="nomor hp"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="email" v-model="form.email" placeholder="email"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="password" v-model="form.password" placeholder="password"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="password" v-model="confirm_password" placeholder="confirm password"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-checkbox v-model="form.superadmin">Super admin</b-form-checkbox>
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
import {user} from '../api'
export default {
    name: "Registrasi",
    data(){
        return {
            form:{
                nama: "",
                username: "",
                alamat: "",
                tempat_lahir: "",
                tanggal_lahir: "",
                hp: "",
                email: "",
                password: "",
                superadmin: false
            },
            confirm_password: "",
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
                let data = await user.post(this.form)
                console.log(data.status)
            } else {
                console.log("please confirm your password")
            }
        }
    }
}
</script>