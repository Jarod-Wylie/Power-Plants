<!-- The foundation to other tiles -->

<template>
  <div>

    <!-- <v-rect :config="square"></v-rect> -->
    <!-- <v-text :config="symbol"/> -->
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    Coordinates: Objects
  },
  data() {
    return {
      square: {
        x: this.Coordinates.x,
        y: this.Coordinates.y,
        height: 20,
        width: 20,
        fill: "black",
        stroke: "black",
        strokeWidth: 1,
      },
      }
  },

  mounted() {
    console.log("Tile Mounted");
  }
};
</script>