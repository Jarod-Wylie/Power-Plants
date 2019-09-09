<template>
  <div>

    <!-- Player Location -->
    <v-text :config="PlayerLog" />

    <!-- Player Energy bar -->
    <v-text :config="energy" />

    <!-- Actions players can take -->


    <!-- Directions -->
    <v-text @click="moveUp()" :config="Up" />
    <v-text @click="moveDown()" :config="Down" />
    <v-text @click="moveRight()" :config="Right" />
    <v-text @keyup.left="moveLeft()"  @click="moveLeft()" :config="Left" />


    <!-- Farming Actions -->
    <v-text @click="plant()" :config="Plant" />
    <v-text @click="harvest()" :config="Harvest" />

    <v-text :config="player" />

  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    plantArray: Array,
    boundaries: Array
  },
  data() {
    return {
      plantID: 0,
      margin: 20,

      player: {
        x: 500,
        y: 400,
        fontSize: 15,
        text: "@",
        fill: "red"
      },
      PlayerLog: {
        x: 100,
        y: 40,
        fontSize: 30,
        text: "cao",
      },
      energy: {
        x: 200,
        y: 550,
        fontSize: 30,
        text:'/////////////////',
        stroke: 'green',
      },
      Up: {
        x: 800,
        y: 400,
        fontSize: 15,
        text: "Up"
      },
      Down: {
        x: 800,
        y: 500,
        fontSize: 15,
        text: "Down"
      },
      Right: {
        x: 900,
        y: 450,
        fontSize: 15,
        text: "Right"
      },
      Left: {
        x: 700,
        y: 450,
        fontSize: 15,
        text: "Left"
      },

      Plant: {
        x: 800,
        y: 450,
        fontSize: 15,
        text: "Plant",
        color: "green"
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
  mounted(){
    this.PlayerLog.text = 'x:' + this.player.x + ' y:' + this.player.y;
  },
  computed: {

  },

  methods: {
    moveUp() {
      console.log("Player moved North");
        this.subtractEnergy();
         this.player.y -= 20;
             this.PlayerLog.text = 'x:' + this.player.x + ' y:' + this.player.y;

      // if   ( ( 100 == (this.player.x - 2 )) && (100 !== (this.player.y -2 )) ){
      //   this.player.y -= 20;
      //   console.log("playerCoordinates", "X:",this.player.x, "Y:", this.player.y)
      // }

      // if (
      //   this.boundaries.find(
      //     coordinate =>
      //       coordinate.y == this.player.y + 18 &&
      //       coordinate.x == this.player.x - 2
      //   )
      // ) {
      //   var cow = this.boundaries.find(
      //     coordinate =>
      //       coordinate.y + this.margin == this.player.y - 2 &&
      //       coordinate.x == this.player.x - 2
      //   );
      //   console.log("cow:", cow);

      //   this.player.y -= 20;
      //   console.log(
      //     "playerCoordinates",
      //     "X: ",
      //     this.player.x,
      //     "Y:",
      //     this.player.y
      //   );
      // } else {
      //   console.log("You can not cross a body of water.");
      //   // console.log("Boundary:", this.boundaries[]);
      //   this.player.y += 20;
      //   console.log(
      //     "playerCoordinates",
      //     "X: ",
      //     this.player.x,
      //     "Y:",
      //     this.player.y
      //   );
      // }
    },
    moveDown() {
      console.log("Player moved South");
      this.subtractEnergy();
      this.player.y += 20;
          this.PlayerLog.text = 'x:' + this.player.x + ' y:' + this.player.y;

      // if (
      //   this.boundaries.find(
      //     coordinate =>
      //       coordinate.y == this.player.y - 22 &&
      //       coordinate.x == this.player.x - 2
      //   )
      // ) {
      //   var cow = this.boundaries.find(
      //     coordinate =>
      //       coordinate.y - this.margin == this.player.y - 2 &&
      //       coordinate.x == this.player.x - 2
      //   );
      //   console.log("cow:", cow);

      //   this.player.y += 20;
      //   console.log(
      //     "playerCoordinates",
      //     "X: ",
      //     this.player.x,
      //     "Y:",
      //     this.player.y
      //   );
      // } else {
      //   console.log("You can not cross a body of water.");
      //   // console.log("Boundary:", this.boundaries[]);
      //   this.player.y = this.player.y -20;
      //   console.log(
      //     "playerCoordinates",
      //     "X: ",
      //     this.player.x,
      //     "Y:",
      //     this.player.y
      //   );
      // }
    },
    moveRight() {
      console.log("Player moved East");
      this.subtractEnergy();
      this.player.x += 20;
          this.PlayerLog.text = 'x:' + this.player.x + ' y:' + this.player.y;
    },
    moveLeft() {
      console.log("Player moved West");
      this.subtractEnergy();
      this.player.x -= 20;
          this.PlayerLog.text = 'x:' + this.player.x + ' y:' + this.player.y;
      console.log(
        "playerCoordinates",
        "X: ",
        this.player.x,
        "Y:",
        this.player.y
      );
    },

    // Player Status Functions

    subtractEnergy(){
      var str = this.energy.text;
      this.energy.text = str.substring(0, str.length - 1);

      if(str.length < str.length/2){
        this.energy.stroke = 'yellow';
      }
      
      if((this.player.x == 500)&&(this.player.y == 400)){
      this.energy.text = "//////////////"
      }


      if(str.length == 0){
        alert("Players has died of fatigue")
      }

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
      if(this.plantArray.find(plant => plant.x === this.player.x && plant.y === this.player.y))
        {
        var plantToHarvest = this.plantArray.find(
          plant => plant.x === this.player.x && plant.y === this.player.y
        );
        console.log("The plant to harvest", plantToHarvest);

        this.$emit("harvestHere", plantToHarvest);
        console.log("Harvesting....");

      }
      else{console.log("nothing to harvest")
        console.log("plantArray", this.plantArray)}
    }
  }
};
</script>