<!-- This tile should not let the player enter it -->

<template>
  <div>
    <v-rect :config="square"></v-rect>

  </div>
</template>

<script>
export default {
  name: "waterTile",
  props: {
    waterInfo: Object
  },
  data() {
    return {
      square: {
        x: this.waterInfo.x,
        y: this.waterInfo.y,
        height: 20,
        width: 20,
        fill: "#477DEF",
        stroke: "#477DEF",
        strokeWidth: 1,
        // shadowOffsetX: 5,
        // shadowOffsetY: 5,
        // shadowBlur: 10,
      },
      }
  },

  mounted() {
    console.log("waterTile Mounted");
  }
};
</script>