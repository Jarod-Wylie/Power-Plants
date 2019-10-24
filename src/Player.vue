<template>
  <div>

    
    <!-- Player Location -->
    <v-text :config="PlayerLog" />

    <!-- Player Energy bar -->
    <v-text :config="energy" />

    <!-- Actions players can take -->

    <!-- Directions -->
    <v-rect @click="moveUp()" :config="upButton"/>
    <v-text @click="moveUp()" :config="Up" />

    <v-rect @click="moveDown()" :config="downButton"/>
    <v-text @click="moveDown()" :config="Down" />

    <v-rect @click="moveRight()" :config="rightButton"/>
    <v-text @click="moveRight()" :config="Right" />

    <v-rect @click="moveLeft()" :config="leftButton"/>
    <v-text @keyup.left="moveLeft()" @click="moveLeft()" :config="Left" />

    <!-- Farming Actions -->
    <v-circle @click="plant()" :config="Plant" />
    <v-circle @click="irrigate()" :config="Irrigate"/>
    <v-rect @click="harvest()" :config="Harvest" />

    <!-- Social Actions -->
    <v-circle @click="talk()" :config="talkButton"/>

    <!-- <v-rect :config="playerShadow"/> -->
    <v-text :config="player" />

    <!-- Characters and Enemies -->
    <enemy></enemy>

    <Character :CharacterInfo="CharacterInfo"></Character>
    <v-text :config="characterSpeech"/>
    
  </div>
</template>

<script>
import Character from "./Character.vue";
import Enemy from "./Enemy.vue";

export default {
  name: "Player",
  components:{
    Enemy: Enemy,
    Character: Character,
  },
  props: {
    HomeInfo: Object,
    Perimeter: Object,
    boundaries: Array,
    waterArray: Array,
    irrigationArray: Array,
    plantArray: Array,
  },
  data() {
    return {
      plantID: 0,

      playerBoundaries: this.boundaries,

      player: {
        x: this.HomeInfo.x,
        y: this.HomeInfo.y,
        fontSize: 25,
        text: "\u0FC7",
        fill: "#EF4700"
      },
      playerShadow:{
        x: this.HomeInfo.x,
        y: this.HomeInfo.y,
        height: 20,
        width: 20,
        fill: "#7C736D"
      },
      PlayerLog: {
        x: 100,
        y: 40,
        fontSize: 30,
        text: "cao"
      },
      energy: {
        x: 200,
        y: 550,
        fontSize: 30,
        text: "/////////////////",
        stroke: "green"
      },
      upButton:{
        x:780,
        y:390,
        width:60,
        height:40,
        fill: "#CCDDE2",
        stroke: "black",
      },
      Up: {
        x: 800,
        y: 400,
        fontSize: 15,
        text: ""
      },

      downButton:{
        x:780,
        y:500,
        width:60,
        height:40,
        fill: "#CCDDE2",
        stroke: "black",
      },
      Down: {
        x: 800,
        y: 500,
        fontSize: 15,
        text: ""
      },

      rightButton:{
        x:865,
        y:450,
        width:60,
        height:40,
        fill: "#CCDDE2",
        stroke: "black",
      },
      Right: {
        x: 900,
        y: 450,
        text: ""
      },

      leftButton:{
        x:700,
        y:450,
        width:60,
        height:40,
        fill: "#CCDDE2",
        stroke: "black",
      },
      Left: {
        x: 700,
        y: 450,
        fontSize: 15,
        text: ""
      },

      Plant: {
        x: 810,
        y: 460,
        radius: 25,
        fill: 'green',
        stroke:'black',
        text: "Plant",

      },
      Irrigate: {
        x: 910,
        y: 550,
        radius: 25,
        fill: '#477DEF',
        stroke:'black',
        text: "Plant",

      },

      Harvest: {
        x: 780,
        y: 550,
        height: 30,
        width: 90,
        stroke: "black",
        // fontSize: 15,
        // text: "Harvest",
        fill: "orange"
      },

      talkButton:{
        x: 910,
        y: 400,
        radius: 25,
        fill: "red",
        stroke: "black",
      },

      // Character Data
      CharacterInfo: {x:300, y:460, name:"Rich Hoagie", 
                      replies:["","I am not feeling very well today.",
                               "Maybe I'll find time to fix the tank some time this week."]},
      characterSpeech: {
        x: null,
        y: null,
        stroke: "Black",
        fontSize: 20,
        text: "",
      }
    };
  },
  mounted() {
    this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;

    this.playerBoundaries.push(this.CharacterInfo);

    this.characterSpeech.x = this.CharacterInfo.x + 18
    this.characterSpeech.y = this.CharacterInfo.y - 10

  },
  computed: {},

  methods: {
    moveUp() {
      
      if (this.player.y != this.Perimeter.yUp) {
        var boundaryFound = this.playerBoundaries.find(
          playerBoundaries =>
            playerBoundaries.x == this.player.x && playerBoundaries.y + 20 == this.player.y
        );
        if (!boundaryFound) {
          console.log("Player moved North");
          // console.log("playerBoundaries Array", this.playerBoundaries);
          this.subtractEnergy();
          this.player.y -= 20;
          this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
        }
      }
    },
    moveDown() {
      if (this.player.y != this.Perimeter.yDown) {
        var boundaryFound = this.playerBoundaries.find(
            playerBoundaries  => playerBoundaries.x == this.player.x && playerBoundaries.y -20 == this.player.y )
          if (!boundaryFound){
        console.log("Player moved South");
        this.subtractEnergy();
        this.player.y += 20;
        this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
      }
      }
    },
    moveRight() {
      if (this.player.x != this.Perimeter.xRight) {
        var boundaryFound = this.playerBoundaries.find(
            playerBoundaries  => playerBoundaries.x - 20 == this.player.x && playerBoundaries.y  == this.player.y )
          if (!boundaryFound){
        console.log("Player moved East");
        this.subtractEnergy();
        this.player.x += 20;
        this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
      }
      }
    },
    moveLeft() {
      if (this.player.x != this.Perimeter.xLeft) {
        var boundaryFound = this.playerBoundaries.find(
          playerBoundaries =>
            playerBoundaries.x + 20 == this.player.x && playerBoundaries.y == this.player.y
        );
        if (!boundaryFound) {
          console.log("Player moved West");
          this.subtractEnergy();
          this.player.x -= 20;
          this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
        }
      }
      // console.log(
      //   "playerCoordinates",
      //   "X: ",
      //   this.player.x,
      //   "Y:",
      //   this.player.y
      // );
    },

    // Player Status Functions

    subtractEnergy() {
      var str = this.energy.text;
      this.energy.text = str.substring(0, str.length - 1);

      if (str.length < str.length / 2) {
        this.energy.stroke = "yellow";
      }

      if (
        this.player.x == this.HomeInfo.x &&
        this.player.y == this.HomeInfo.y
      ) {
        this.energy.text = "//////////////";
      }

      // if(str.length == 0){
      //   alert("Players has died of fatigue")
      // }
    },

    // Horticulture methods
    plant() {
      var plantFound = plantFound = this.plantArray.find(
          plant =>
            (plant.x == this.player.x && plant.y == this.player.y) || 
            (plant.x == this.player.x + 20 && plant.y == this.player.y) ||
            (plant.x == this.player.x - 20 && plant.y == this.player.y) ||
            (plant.x == this.player.x && plant.y == this.player.y + 20) ||
            (plant.x == this.player.x && plant.y == this.player.y - 20) ||
            (plant.x == this.player.x + 20 && plant.y == this.player.y - 20) ||
            (plant.x == this.player.x - 20 && plant.y == this.player.y + 20) ||
            (plant.x == this.player.x + 20 && plant.y == this.player.y + 20) ||
            (plant.x == this.player.x - 20 && plant.y == this.player.y - 20) 
        );

      var waterFoundLeft = this.waterArray.find(
          water =>
            water.x + 20 == this.player.x && water.y == this.player.y
        );
        var waterFoundRight = this.waterArray.find(
          water =>
            water.x - 20 == this.player.x && water.y == this.player.y
        );
        var waterFoundUp = this.waterArray.find(
          water =>
            water.x == this.player.x && water.y + 20 == this.player.y
        );
        var waterFoundDown = this.waterArray.find(
          water =>
            water.x == this.player.x && water.y -20 == this.player.y
        );

        var irrigatationFoundHere = this.irrigationArray.find(
          water =>
            water.x == this.player.x && water.y == this.player.y
        );

        var irrigatationFoundLeft = this.irrigationArray.find(
          water =>
            water.x + 20 == this.player.x && water.y == this.player.y
        );
        var irrigatationFoundRight = this.irrigationArray.find(
          water =>
            water.x - 20 == this.player.x && water.y == this.player.y
        );
        var irrigatationFoundUp = this.irrigationArray.find(
          water =>
            water.x == this.player.x && water.y + 20 == this.player.y
        );
        var irrigatationFoundDown = this.irrigationArray.find(
          water =>
            water.x == this.player.x && water.y -20 == this.player.y
        );

      if((waterFoundLeft || waterFoundRight || waterFoundUp || waterFoundDown ||
         irrigatationFoundLeft || irrigatationFoundRight || irrigatationFoundUp || irrigatationFoundDown) &&
         (!irrigatationFoundHere)){

        // console.log("irrgationFounHere:", irrigatationFoundHere)
        
        console.log("Player is planting.....");
        
        this.$emit("plantHere", {
          id: this.plantID,
          x: this.player.x,
          y: this.player.y
        });
        this.plantID++;
      }

      else if(plantFound || irrigatationFoundHere){
        console.log("There is not enough water in the soil to plant another plant here.")

      }
      else {
        console.log("Player is planting.....");
        
        this.$emit("plantHere", {
          id: this.plantID,
          x: this.player.x,
          y: this.player.y
        });
        this.plantID++;
      }

    },

    irrigate(){

        var waterFoundLeft = this.waterArray.find(
          water =>
            water.x + 20 == this.player.x && water.y == this.player.y
        );
        var waterFoundRight = this.waterArray.find(
          water =>
            water.x - 20 == this.player.x && water.y == this.player.y
        );
        var waterFoundUp = this.waterArray.find(
          water =>
            water.x == this.player.x && water.y + 20 == this.player.y
        );
        var waterFoundDown = this.waterArray.find(
          water =>
            water.x == this.player.x && water.y -20 == this.player.y
        );

        var irrigatationFoundLeft = this.irrigationArray.find(
          water =>
            water.x + 20 == this.player.x && water.y == this.player.y
        );
        var irrigatationFoundRight = this.irrigationArray.find(
          water =>
            water.x - 20 == this.player.x && water.y == this.player.y
        );
        var irrigatationFoundUp = this.irrigationArray.find(
          water =>
            water.x == this.player.x && water.y + 20 == this.player.y
        );
        var irrigatationFoundDown = this.irrigationArray.find(
          water =>
            water.x == this.player.x && water.y -20 == this.player.y
        );


        if (waterFoundLeft || waterFoundRight || irrigatationFoundLeft || irrigatationFoundRight) {

          console.log("Player is irrigating......");
  
          this.$emit("irrigateHere", {
            id: this.plantID,
            x: this.player.x,
            y: this.player.y,
            orientation: "horizontal"
          });
          this.plantID++;
        }
        else if(waterFoundUp || waterFoundDown || irrigatationFoundUp || irrigatationFoundDown){
          this.$emit("irrigateHere", {
            id: this.plantID,
            x: this.player.x,
            y: this.player.y,
            orientation: "veritcal"
          });
          this.plantID++;

        }
        else{
          console.log("No water found.");
          }
      
    },
    harvest() {
      if (
        this.plantArray.find(
          plant => plant.x === this.player.x && plant.y === this.player.y
        )
      ) {
        var plantToHarvest = this.plantArray.find(
          plant => plant.x === this.player.x && plant.y === this.player.y
        );
        console.log("The plant to harvest", plantToHarvest);
        this.$emit("harvestHere", plantToHarvest);
        console.log("Harvesting....");
      } else {
        console.log("nothing to harvest");
        console.log("plantArray", this.plantArray);
      }
    },
    // End of Horticulture Methods

    talk(){
      if (
        (this.player.x == this.CharacterInfo.x + 20) && (this.player.y == this.CharacterInfo.y ) ||
        (this.player.x == this.CharacterInfo.x - 20) && (this.player.y == this.CharacterInfo.y ) ||
        (this.player.x == this.CharacterInfo.x) && (this.player.y == this.CharacterInfo.y + 20 ) ||
        (this.player.x == this.CharacterInfo.x) && (this.player.y == this.CharacterInfo.y - 20)){
        console.log("hoi");
        this.characterSpeech.text = this.CharacterInfo.replies[1];

      }
    }
    },

};
</script>