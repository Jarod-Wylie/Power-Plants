<template>
  <v-stage :config="configKonva">
    <v-layer>
      
      <!-- <v-rect :config="square" v-for="i in tileArray" :key="i"></v-rect> -->


      <Tile v-for="i in tileArray" :key="i.tileID" :Coordinates="i"></Tile>
    </v-layer>
  </v-stage>
</template>

<script>
import Tile from './Tile.vue'
// import HelloWorld from HelloWorld.vue;

export default {
  components:{
    'Tile': Tile,
  },
  data() {
    return {
      tileArray: [],
      tileObj: {x: 100, y: 100, tileID: 0},
      configKonva: {
        width: 1000,
        height: 1000
      },
      square: {
        x: 100,
        y: 100,
        height: 20,
        width: 20,
        fill: "white",
        stroke: "black",
        strokeWidth: 1
      }
    };
  },
  mounted(){
    this.generateGrid();

  },

  methods:{
    generateGrid(){
      var i = 20
      var j = 20
      var ySpace = 100

      for(j = 20; j > 0 ; j--){
      var xSpace = 100

      for(i = 20; i > 0; i--){
        this.tileArray.push({x:xSpace,y: ySpace, tileID: i, show:"."});
        xSpace += 20;
      }
        ySpace += 20;
      }
    }
  }
};

</script>