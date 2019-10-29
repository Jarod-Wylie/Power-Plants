<!-- The foundation to other tiles -->

<template>
  <div>
    <v-rect :config="square"></v-rect>
  
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    stepInfo: Object
  },
  data() {
    return {
      square: {
        x: this.stepInfo.x,
        y: this.stepInfo.y,
        height: 20,
        width: 20,
        fill: "orange",
        stroke: "black",
        strokeWidth: 1,
      },
      }
  },

  mounted() {
    console.log("step1 Mounted");
  }
};
</script>