<template>
  <v-stage ref="stage" :config="configKonva">
      <v-layer>
        <v-rect
          :config="{
            width: 2000,
            height: 2000,
            fill: '#8EA8C3',
            stroke: '#8EA8C3'
          }"
        ></v-rect>

        <v-text
          :config="{
            x: 800,
            y: 50,
            fontSize:25,
            text:'Harvest 6 ideal plants(yellow) to survive the winter.',
            }"
        />
        <v-text
          :config="{
            x: 800,
            y: 100,
            fontSize:25,
            text: food + '/6',
            }"
        />
        <v-rect
          :config="{
            x: i.x,
            y: i.y,
            width: 20,
            height: 20,
            fill: '#8C847F',
            stroke: '#8EA8C3'
          }"
          v-for="i in tileArray"
          :key="i.tileID"
        ></v-rect>

        <!-- <Tile v-for="i in tileArray" :key="i.tileID" :Coordinates="i"></Tile> -->
        <!-- <BoundaryTile></BoundaryTile> -->

        <Player
          :HomeInfo="HomeArray[0]"
          :Perimeter="Perimeter"
          :boundaries="boundariesArray"
          :plantArray="plantArray"
          :waterArray="waterArray"
          :irrigationArray="irrigationArray"
          :steps="stepArray"

          @irrigateHere="irrigate"
          @plantHere="plant"
          @harvestHere="harvest"
        ></Player>

        <HomeTile :HomeInfo="HomeArray[0]"></HomeTile>

        <waterTile v-for="i in waterArray" :key="i.tileID" :waterInfo="i"></waterTile>
        <irrigationTile v-for="i in irrigationArray" :key="i.tileID" :irrigationInfo="i"></irrigationTile>
        <PlantTile v-for="i in plantArray" :key="i.plantID" :plantInfo="i"></PlantTile>
        <BoundaryTile v-for="i in wallArray" :key="i.wallID" :wallInfo="i"></BoundaryTile>
        <step1 v-for="i in stepArray" :key='i.x' :stepInfo="i"></step1>

        <!-- <Enemy></Enemy> -->
      </v-layer>
  </v-stage>
</template>

<script>
import Tile from "./Tile.vue";
import Player from "./Player.vue";
import BoundaryTile from "./BoundaryTile.vue";
import irrigationTile from "./irrigationTile.vue";
import PlantTile from "./PlantTile.vue";
import waterTile from "./waterTile.vue";
import HomeTile from "./HomeTile.vue";
import step1 from "./step1.vue";


export default {
  components: {
    Tile: Tile,
    Player: Player,
    HomeTile: HomeTile,
    BoundaryTile: BoundaryTile,
    PlantTile: PlantTile,
    waterTile: waterTile,
    irrigationTile: irrigationTile,
    step1 : step1,
    
  },
  data() {
    return {
      tileArray: [],
      Perimeter: {xLeft: 0, xRight: 0, yUp: 0, yDown: null},
      HomeArray: [{x:100, y:440}],
      boundariesArray: [],
      wallArray: [],
      plantArray: [],
      inventoryArray: [],
      waterArray: [],
      irrigationArray: [],
      stepArray: [],

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
    };
  },
  mounted() {
    this.generateGrid();
    this.generateBoundaries();
    this.generateSteps();
    this.generateWater();

  },

  methods: {

    // Build Area first

    // 
    generateGrid() {
      var id = 0;
      var i = 20;
      var j = 20;
      var ySpace = 100;
      var xSpace = 100;

      this.Perimeter.yUp = ySpace;
      this.Perimeter.xLeft = xSpace;
      for (j = 40; j > 0; j--) {
        xSpace = 100;

        for (i = 40; i > 0; i--) {
          this.tileArray.push({ x: xSpace, y: ySpace, tileID: id, show: "O" });
          xSpace += 20;
          id++;
        }
        ySpace += 20;
      }
      this.Perimeter.xRight = xSpace -20;
      this.Perimeter.yDown = ySpace;
    },

    //
    generateBoundaries(){
     var id = 0;
      var i = 20;
      var j = 20;
      var xSpace = 100;
      var ySpace = 700;

        for (j = 40; j > 0; j--) {
          this.wallArray.push({
            x: xSpace,
            y: ySpace,
            tileID: "wallTile#:" + id
          });
          this.boundariesArray.push({x: xSpace, y: ySpace, type: 'wall', tileID: "boarder#:" + id })

          id++;
        xSpace += 20;
        }
      xSpace = 100
      for(i = 6; i > 0; i--){
        ySpace = 200


        for (j = 5; j > 0; j--) {
          
          this.wallArray.push({
            x: xSpace,
            y: ySpace,
            tileID: "wallTile#:" + id
          });
          this.boundariesArray.push({x: xSpace, y: ySpace, tileID: "boarder#:" + id })

          id++;
        ySpace += 20;
        }
        xSpace += 20;
      }

        
      },

      generateSteps(){

        this.stepArray.push({x: 100, y:300,});
        this.stepArray.push({x: 160, y:300,});
        this.stepArray.push({x: 240, y:300,});
        this.stepArray.push({x: 220, y:280,});
        this.stepArray.push({x: 100, y:180,});
        this.stepArray.push({x: 100, y:180,});

      },


    //
    generateWater() {
      var id = 0;
      var i = 20;
      var j = 20;
      var ySpace = 240;

      for (j = 5; j > 0; j--) {
        var xSpace = 260;

        for (i = 5; i > 0; i--) {
          this.waterArray.push({
            x: xSpace,
            y: ySpace,
            tileID: "waterTile#:" + id
          });
          this.boundariesArray.push({x: xSpace, y: ySpace, type: "water", tileID: "boarder#:" + id })
          xSpace += 20;
          id++;
        }
        ySpace += 20;
      }
    },

    irrigate(obj){

      console.log("irrigated", obj);

      this.irrigationArray.push(obj);

      console.log("plant Array:", this.irrigationArray);

    },

    // Initiated when player emits plantHere
    plant(obj) {
      console.log("Planted", obj);

      this.plantArray.push(obj);

      console.log("plant Array:", this.plantArray);
    },

    // Initiated when player emits harvestHere
    harvest(obj) {
      console.log("obj", obj);
      var newItem = this.plantArray.find(plant => plant.id == obj.id);
      console.log("newitem:", newItem);
      this.plantArray = this.plantArray.filter(plant => plant.id != obj.id);
      this.inventoryArray.push(newItem);
      console.log("Invetory:", this.inventoryArray);
      console.log("PlantArray:", this.plantArray);
      // A test to see if you can re-assign the x postion of the first plant in the array to a new x position: you
      // can not - child seems to never get passed the new coordinate

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