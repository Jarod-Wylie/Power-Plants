<template>
  <v-stage :config="configKonva">

    <v-layer>
      
      <v-rect :config="{
          x: i.x,
          y: i.y,
          width: 20,
          height: 20,
          fill: 'white',
          stroke: '#8EA8C3'
        }"
        v-for="i in tileArray" :key="i.tileID"></v-rect>


      <!-- <Tile v-for="i in tileArray" :key="i.tileID" :Coordinates="i"></Tile> -->
      <!-- <Tile v-for="i in tileArray" :key="i.tileID" :Coordinates="i"></Tile> -->
      <Player></Player>
    </v-layer>
  </v-stage>
</template>

<script>
import Tile from './Tile.vue'
import Player from './Player.vue'
// import HelloWorld from HelloWorld.vue;

export default {
  components:{
    'Tile': Tile,
    'Player': Player,
  },
  data() {
    return {
      tileArray: [],
      tileObj: {x: 100, y: 100, tileID: 0},
      configKonva: {
        width: 1000,
        height: 1000
      },
      // square: {
      //   x: 100,
      //   y: 100,
      //   height: 20,
      //   width: 20,
      //   fill: "white",
      //   stroke: "black",
      //   strokeWidth: 1
      // }
    };
  },
  mounted(){
    this.generateGrid();

  },

  methods:{
    generateGrid(){
      var id = 0
      var i = 20
      var j = 20
      var ySpace = 100


      for(j = 20; j > 0 ; j--){
      var xSpace = 100

      for(i = 20; i > 0; i--){
        this.tileArray.push({x:xSpace, y: ySpace, tileID: id, show:"O"});
        xSpace += 20;
        id++;
      }
        ySpace += 20;
      }
    },

  log(){
    console.log("Keys are working in App.vue")
  }
  }
};

</script>