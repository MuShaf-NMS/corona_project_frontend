<template>
    <div>
        <b-row>
            <b-col></b-col>
            <b-col md="6" sm="12">
                <h3>Dafar Materi</h3>
                <b-table striped hover :items="items" :fields="fields"></b-table>
            </b-col>
            <b-col></b-col>
        </b-row>
    </div>
</template>
<script>
import {siswa} from '../../api'
export default {
    name: "Materi",
    data(){
        return {
            items: [],
            fields: [
                {key: 'mapel', label: 'Mata Pelajaran'},
                'materi',
                'submateri',
                {key: 'guru', label: 'Guru Bidang Studi'}
                ]
        }
    },
    methods: {
        async loadData(){
            let data = await siswa.getMateri()
            console.log(data.data)
            this.items = data.data
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>