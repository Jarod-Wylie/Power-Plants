<template>
  <div>   

<!-- Actions players can take -->

    <!-- Directions -->
    <v-text @click="moveUp()" :config="Up"/>
    <v-text @click="moveDown()" :config="Down"/>
    <v-text @click="moveRight()" :config="Right"/>
    <v-text @click="moveLeft()" :config="Left"/>

    <!-- Farming Actions -->
    <v-text @click="plant()" :config="Plant"/>
    <v-text @click="harvest()" :config="Harvest"/>

    <v-text :config="symbol"/>
    <!-- <button @click="moveDown()">LOg</button> -->
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    plantArray: Array,
  },
  data() {
    return {

        plantID: 0,

      symbol: {
        x: 102,
        y: 102,
        fontSize: 15,
        text: "@",
        fill: 'red',
      },
      Up: {
        x: 800,
        y: 400,
        fontSize: 15,
        text: "Up",
      },
      Down: {
        x: 800,
        y: 500,
        fontSize: 15,
        text: "Down",
      },
      Right: {
        x: 900,
        y: 450,
        fontSize: 15,
        text: "Right",
      },
      Left: {
        x: 700,
        y: 450,
        fontSize: 15,
        text: "Left",
      },

      Plant: {
        x: 800,
        y: 450,
        fontSize: 15,
        text: "Plant",
        color: "green",
      },
      Harvest: {
        x: 800,
        y: 550,
        fontSize: 15,
        text: "Harvest",
        color: "green",
      },

    }
  },

methods:{
          
            moveUp(){
                console.log("Player moved North");
                this.symbol.y -= 20;
                console.log("Plants player know about:", this.plantArray);
          },
            moveDown(){
                console.log("Player moved South");
                this.symbol.y += 20;
          },
            moveRight(){
                console.log("Player moved East");
                this.symbol.x += 20;
          },
            moveLeft(){
                console.log("Player moved West");
                this.symbol.x -= 20;
          },

        // Horticulture methods
          plant(){

              console.log("Player is planting.....")

              this.$emit("plantHere", { 
                        id:  this.plantID,
                        x: this.symbol.x,
                        y: this.symbol.y,
                        });
            this.plantID++;

          },
          harvest(){
              var plantToHarvest = this.plantArray.find(plant => (plant.x == this.symbol.x) && (plant.y == this.symbol.y) )
              console.log("The plant to harvest", plantToHarvest);
              
              this.$emit("harvestHere", plantToHarvest)
              console.log("Harvesting....");
              

          }
      }

    };
</script>