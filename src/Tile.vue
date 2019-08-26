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
    Coordinates: Object
  },
  data() {
    return {
      square: {
        x: this.Coordinates.x,
        y: this.Coordinates.y,
        height: 20,
        width: 20,
        fill: "white",
        stroke: "black",
        strokeWidth: 1,
        text: "hello"
      },
      symbol: {
        x: this.Coordinates.x +2,
        y: this.Coordinates.y +2,
        fontSize: 15,
        text: this.Coordinates.show
      }
    };
  },

  mounted() {
    console.log("Tile Mounted");
  }
};
</script>