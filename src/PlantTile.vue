<template>
  <div>
    <v-rect :config="square"></v-rect>
    <v-text :config="plant" />
  </div>
</template>

<script>
export default {
  name: "PlantTile",
  props: {
    plantInfo: Object
  },
  data() {
    return {
        square: {
            x: this.plantInfo.x,
            y: this.plantInfo.y,
            height: 20,
            width: 20,
            fill: "white",
            stroke: "green",
            strokeWidth: .5
        },

        plant: {
            x: this.plantInfo.x,
            y: this.plantInfo.y,
            fontSize: 15,
            text: "p"
        }
        }
  },

  mounted() {
    console.log("PlantTile Mounted");
  }
};
</script>