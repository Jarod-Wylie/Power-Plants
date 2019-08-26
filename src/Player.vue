<template>
  <div>    

    <v-text @click="moveUp()" :config="Up"/>
    <v-text @click="moveDown()" :config="Down"/>
    <v-text @click="moveRight()" :config="Right"/>
    <v-text @click="moveLeft()" :config="Left"/>

    <v-text :config="symbol"/>
    <!-- <button @click="moveDown()">LOg</button> -->
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    Coordinates: Object
  },
  data() {
    return {

      symbol: {
        x: 102,
        y: 102,
        fontSize: 15,
        text: "@",
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
    }
  },

methods:{
          
            moveUp(){
                console.log("Player moved South");
                this.symbol.y -= 20;
          },
            moveDown(){
                console.log("Player moved South");
                this.symbol.y += 20;
          },
            moveRight(){
                console.log("Player moved South");
                this.symbol.x += 20;
          },
            moveLeft(){
                console.log("Player moved South");
                this.symbol.x -= 20;
          }
      }

    };
</script>