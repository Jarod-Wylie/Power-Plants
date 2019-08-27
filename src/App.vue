<template>
  <div>
    <div>{{food}}</div>
    <!-- <input @keyup.enter="log()"/> -->
    <v-stage :config="configKonva">
      <v-layer>
        <v-text 
        :config="{
          x: 800,
          y: 100,
          fontSize:25,
          text: food + '/6',
          }"/>
        <v-rect
          :config="{
          x: i.x,
          y: i.y,
          width: 20,
          height: 20,
          fill: 'white',
          stroke: '#8EA8C3'
        }"
          v-for="i in tileArray"
          :key="i.tileID"
        ></v-rect>

        <!-- <Tile v-for="i in tileArray" :key="i.tileID" :Coordinates="i"></Tile> -->
        <!-- <BoundaryTile></BoundaryTile> -->

        <Player @plantHere="plant" @harvestHere="harvest" :plantArray="plantArray"></Player>

        <PlantTile v-for="i in plantArray" :key="i.plantID" :plantInfo="i"></PlantTile>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import Tile from "./Tile.vue";
import Player from "./Player.vue";
import BoundaryTile from "./BoundaryTile.vue";
import PlantTile from "./PlantTile.vue";
import { log } from "util";

export default {
  components: {
    Tile: Tile,
    Player: Player,
    BoundaryTile: BoundaryTile,
    PlantTile: PlantTile
  },
  data() {
    return {
      tileArray: [],
      plantArray: [],
      inventoryArray: [],

      food: 0,
      amount: "0/6",

      goal: {
        x: 800,
        y: 100,
        fontSize: 25,
        text: "/6"
      },

      tileObj: { x: 100, y: 100, tileID: 0 },
      configKonva: {
        width: 1000,
        height: 1000
      }
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
  mounted() {
    this.generateGrid();
  },

  methods: {
    generateGrid() {
      var id = 0;
      var i = 20;
      var j = 20;
      var ySpace = 100;

      for (j = 20; j > 0; j--) {
        var xSpace = 100;

        for (i = 20; i > 0; i--) {
          this.tileArray.push({ x: xSpace, y: ySpace, tileID: id, show: "O" });
          xSpace += 20;
          id++;
        }
        ySpace += 20;
      }
    },

    plant(obj) {
      console.log("Planted");

      this.plantArray.push(obj);

      console.log("plant Array:", this.plantArray);
    },
    harvest(obj) {
      var newItem = this.plantArray.find(plant => plant.id == obj.id);
      this.plantArray = this.plantArray.filter(plant => plant.id != obj.id);

      this.inventoryArray.push(newItem);

      console.log("Invetory:", this.inventoryArray);
      console.log("PlantArray:", this.plantArray);

      if (this.inventoryArray.length == 6) {
        alert("You have gathered enough for the winter.");
      }

      this.food++;
    },

    log() {
      console.log("Keys are working in App.vue");
    }
  }
};
</script>