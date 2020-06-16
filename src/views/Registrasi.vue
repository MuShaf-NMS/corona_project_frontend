<template>
    <div>
        <b-row class="justify-content-center align-items-center login-row">
            <b-col md="6" sm="12">
                <b-card>
                    <b-form>
                        <h3 class="text-center text-info">Registrasi</h3>
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="text" v-model="form.username">
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="text" v-model="form.password">
                        </div>
                        <div class="form-group">
                            <b-form-checkbox v-model="form.superadmin">Super admin</b-form-checkbox>
                        </div>
                        <div class="form-group">
                            <b-btn @click="registrasi">Registrasi</b-btn>
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
                username: "",
                password: "",
                superadmin: false
            }
        }
    },
    methods: {
        async registrasi(){
            let data = await user.post(this.form)
            console.log(data.status)
        }
    }
}
</script>