<template>
  <div>
    <b-row>
      <b-col>
        <b-card :title="title">
          <b-card-text>
            <b-row>
              <b-col>
                  <b-btn size="sm">Detail</b-btn>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "MateriKelas",
  props: { mapel: String },
  data() {
    return {
      title: this.mapel
    };
  },
  methods: {
    klik(){
        console.log("klik")
    }
  }
};
</script>