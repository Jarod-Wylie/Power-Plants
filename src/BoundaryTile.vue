<!-- Meant to close the playing area bounds. This tile is not developed yet -->

<template>
  <div>
    <v-rect></v-rect>
  </div>
</template>

<script>
export default {
  name: "BoundaryTile",
  props: {
    Coordinates: Object
  },
  data() {
    return {
      tile: {
        x: 80,
        y: 80,
        height: 20,
        width: 20,
        fill: "black",
        stroke: "black",
        strokeWidth: 1,
      },
      }
  },

  mounted() {
    console.log("BoundaryTile Mounted");
  }
};
</script>