<template>
    <div>
        <b-row>{{soal}}</b-row>
        <b-row>
            <b-form-group>
                <b-form-radio-group @input="jawab" v-model="pil" :options="pilihan" stacked></b-form-radio-group>
            </b-form-group>
        </b-row>
    </div>
</template>
<script>
import {siswa} from "../../api"
export default {
    name: "LoadSoal",
    props: {uuid: String},
    data(){
        return {
            soal: "",
            pilihan: [],
            pil: ""
            
        }
    },
    methods: {
        async loadData(){
            let data = await siswa.getOneSoal(this.uuid)
            this.soal = data.data.soal
            this.pilihan = data.data.pilihan
        },
        jawab(e){
            this.$store.dispatch("jawab",{uuid_soal: this.uuid, jawaban: e.target.value})
            //this.$store.dispatch("jawab",{uuid_soal: this.uuid, jawaban: this.pil})
            console.log(this.$store.getters.getJawaban)
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>