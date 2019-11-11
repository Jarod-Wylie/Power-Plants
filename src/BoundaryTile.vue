<!-- Meant to close the playing area bounds. This tile is not developed yet -->

<template>
  <div>
    <v-rect :config="tile"></v-rect>
  </div>
</template>

<script>
export default {
  name: "BoundaryTile",
  props: {
    wallInfo: Object
  },
  data() {
    return {
      tile: {
        x: this.wallInfo.x,
        y: this.wallInfo.y,
        height: 20,
        width: 20,
        fill: "grey",
        stroke: "black",
        strokeWidth: 1,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
        shadowBlur: 10,
      },
      }
  },

  mounted() {
    console.log("BoundaryTile Mounted");
  }
};
</script>