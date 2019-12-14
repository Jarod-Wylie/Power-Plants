<!-- Meant to close the playing area bounds. This tile is not developed yet -->

<template>
  <div>
    <v-group>
    <v-rect :config="tile"></v-rect>
    <v-rect :config="raised"></v-rect>
    </v-group>
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
        // strokeWidth: 1,
        // shadowOffsetX: 5,
        // shadowOffsetY: 10,
        // shadowBlur: 10,
        listen: false,
      },

      raised: {
        x: this.wallInfo.x,
        y: this.wallInfo.y + 20,
        height: 16,
        width: 20,
        fill: "#535557",
        stroke: "black",
        strokeWidth: 1,
        strokeWidth: 1,
        shadowOffsetX: 5,

        shadowBlur: 5,
        listen: false,
      },


      }
  },

  mounted() {


  }
};
</script>