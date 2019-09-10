<template>

    <v-stage ref="stage" :config="configKonva">
      <v-layer>

        <v-rect
          tabindex="0"
          ref="test"
          :config="{
          x: 500,
          y: 400,
          width: 20,
          height: 20,
          fill: 'yellow',
          stroke: '#8EA8C3'
        }"/>


        <v-text 
        :config="{
          x: 800,
          y: 50,
          fontSize:25,
          text:'Harvest 6 ideal plants(yellow) to survive the winter.',
          }"/>
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

        <Player @plantHere="plant" @harvestHere="harvest" :plantArray="plantArray" :boundaries="boundariesArray"></Player>

        <waterTile v-for="i in waterArray" :key="i.tileID" :waterInfo="i"></waterTile>
        <PlantTile v-for="i in plantArray" :key="i.plantID" :plantInfo="i"></PlantTile>
      </v-layer>
    </v-stage>

</template>

<script>
import Tile from "./Tile.vue";
import Player from "./Player.vue";
import BoundaryTile from "./BoundaryTile.vue";
import PlantTile from "./PlantTile.vue";
import waterTile from "./waterTile.vue";

import { log } from "util";

export default {
  components: {
    Tile: Tile,
    Player: Player,
    BoundaryTile: BoundaryTile,
    PlantTile: PlantTile,
    waterTile: waterTile,
  },
  data() {
    return {
      tileArray: [],
      plantArray: [],
      inventoryArray: [],
      boundariesArray: [],
      waterArray: [{ x: 100, y: 80, tileID: "water"}],

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
        width: 2000,
        height: 2000,
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
    this.generateWater();
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
          this.boundariesArray.push({x: xSpace, y: ySpace, tileID: "boarder#:" + id })
          xSpace += 20;
          id++;
        }
        ySpace += 20;
      }
    },
    generateWater() {
      var id = 0;
      var i = 20;
      var j = 20;
      var ySpace = 100;

      for (j = 5; j > 0; j--) {
        var xSpace = 100;

        for (i = 5; i > 0; i--) {
          this.waterArray.push({ x: xSpace, y: ySpace, tileID: "waterTile#:" + id });
          // this.boundariesArray.push({x: xSpace, y: ySpace, tileID: "boarder#:" + id })
          xSpace += 20;
          id++;
        }
        ySpace += 20;
      }
    },

    // Initiated when player emits plantHere
    plant(obj) {
      console.log("Planted",obj);
      

      this.plantArray.push(obj);

      console.log("plant Array:", this.plantArray);
    },

    // Initiated when player emits harvestHere
    harvest(obj) {
      // console.log("obj", obj);
        console.log("before find:", this.plantArray)
      // var newItem = this.plantArray.find(plant => {
      //   console.log('plant.id',plant.id);
      //   console.log('obj.id',obj.id);
      //   if (plant.id == obj.id){
      //     return plant;
      //   }
      // } 
      // );
      // console.log("newitem:", newItem)
      console.log("after find:", this.plantArray)

      this.plantArray = this.plantArray.filter(function (plant){
        if ((plant.x == obj.x) && (plant.y == obj.y)){

          return plant;
        }
      });

      //   console.log('before for', this.plantArray.length);
      // for(var i = 0; i<this.plantArray.length;i++){
      //   console.log('in for')
      //   if (
      //     (this.plantArray[i].x === obj.x) && 
      //     (this.plantArray[i].y === obj.y)
      //     ){
      //       console.log('in if', this.plantArray[i].x )
      //       console.log('in if', obj.x )
      //       console.log('in if', this.plantArray[i].y )
      //       console.log('in if', obj.y )
      //     this.plantArray = this.plantArray.slice(i);
      //     break;
      //   }
      // }

      // this.inventoryArray.push(newItem);

      console.log("Invetory:", this.inventoryArray);
      console.log("PlantArray:", this.plantArray);

      // A test to see if you can re-assign the x postion of the first plant in the array to a new x position: you
      // can not - child seems to never get passed the new coordinate
      // this.plantArray[0].x = 290;

      if (this.inventoryArray.length == 6) {
        alert("You have gathered enough for the winter.");
      }

      this.food++;
      // forceUpdate has no purpose - was hoping to force vue to re-render components and pass changes to attrs to children
      this.$forceUpdate();
    },

    log() {
      console.log("Keys are working in App.vue");
    }
  }
};
</script>