<template>
    <div>
        <b-row>
            <b-col></b-col>
            <b-col md="6" sm="12">
                <h3>Daftar Admin</h3>
                <b-table striped hover :items="items" :fields="fields"></b-table>
            </b-col>
            <b-col></b-col>
        </b-row>
    </div>
</template>
<script>
import {user} from '../../api'
export default {
    name: "DaftarAdmin",
    data(){
        return {
            items: [],
            fields: [
                'username',
                'superadmin',
                {key: 'created_at', label: 'Dibuat'},
                {key: 'updated_at', label: 'Update Terakhir'}
                ]
        }
    },
    methods: {
        async loadData(){
            let data = await user.getUser()
            this.items = data.data
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>