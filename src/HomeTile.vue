<!-- Home Tile. This is where the player can have their energy replenished -->

<template>
  <div>
    <v-rect :config="square"></v-rect>
    <!-- <v-text :config="symbol"/> -->
  </div>
</template>

<script>
export default {
  name: "HomeTile",
  props: {
    HomeInfo: Object
  },
  data() {
    return {
      square: {
        x: this.HomeInfo.x,
        y: this.HomeInfo.y,
        height: 20,
        width: 20,
        fill: "yellow",
        stroke: "black",
        strokeWidth: 1,
      },
      // symbol: {
      //   x: this.HomeInfo.x,
      //   y: this.HomeInfo.y,
      //   fontSize: 15,
      //   text: "H",
      //   fill: "red"
      // },
      }
  },

  mounted() {
    console.log("HomeTile Mounted");
  }
};
</script>