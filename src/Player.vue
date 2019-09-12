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
    <v-text @click="harvest()" :config="Harvest" />

    <v-text :config="player" />
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    plantArray: Array,
    boundaries: Array,
    HomeInfo: Object
  },
  data() {
    return {
      plantID: 0,

      player: {
        x: this.HomeInfo.x,
        y: this.HomeInfo.y,
        fontSize: 15,
        text: "@",
        fill: "red"
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
      Harvest: {
        x: 800,
        y: 550,
        fontSize: 15,
        text: "Harvest",
        color: "green"
      }
    };
  },
  mounted() {
    this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
  },
  computed: {},

  methods: {
    moveUp() {
      
      if (this.player.y != 100) {
        var boundaryFound = this.boundaries.find(
          boundaries =>
            boundaries.x == this.player.x && boundaries.y + 20 == this.player.y
        );
        if (!boundaryFound) {
          console.log("Player moved North");
          console.log("Boundaries Array", this.boundaries);
          this.subtractEnergy();
          this.player.y -= 20;
          this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
        }
      }
    },
    moveDown() {
      if (this.player.y != 480) {
        var boundaryFound = this.boundaries.find(
            boundaries  => boundaries.x == this.player.x && boundaries.y -20 == this.player.y )
          if (!boundaryFound){
        console.log("Player moved South");
        this.subtractEnergy();
        this.player.y += 20;
        this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
      }
      }
    },
    moveRight() {
      if (this.player.x != 480) {
        var boundaryFound = this.boundaries.find(
            boundaries  => boundaries.x - 20 == this.player.x && boundaries.y  == this.player.y )
          if (!boundaryFound){
        console.log("Player moved East");
        this.subtractEnergy();
        this.player.x += 20;
        this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
      }
      }
    },
    moveLeft() {
      if (this.player.x != 100) {
        var boundaryFound = this.boundaries.find(
          boundaries =>
            boundaries.x + 20 == this.player.x && boundaries.y == this.player.y
        );
        if (!boundaryFound) {
          console.log("Player moved West");
          this.subtractEnergy();
          this.player.x -= 20;
          this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
        }
      }
      console.log(
        "playerCoordinates",
        "X: ",
        this.player.x,
        "Y:",
        this.player.y
      );
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
      console.log("Player is planting.....");

      this.$emit("plantHere", {
        id: this.plantID,
        x: this.player.x,
        y: this.player.y
      });
      this.plantID++;
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
    }
  }
};
</script>