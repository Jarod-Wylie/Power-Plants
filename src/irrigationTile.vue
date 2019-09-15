<!-- This tile should not let the player enter it -->

<template>
  <div>
    <v-rect :config="square"></v-rect>

  </div>
</template>

<script>
export default {
  name: "irrigationTile",
  props: {
    irrigationInfo: Object
  },
  data() {
    return {
      square: {
        x: this.irrigationInfo.x + 5,
        y: this.irrigationInfo.y,
        height: 20,
        width: 10,
        fill: "#477DEF",
        stroke: "#477DEF",
        strokeWidth: 1,
      },
      }
  },

  mounted() {
    console.log("irrigationTile Mounted");

    this.orient();
  },

  methods: {
      orient(){
          if(this.irrigationInfo.orientation == "horizontal"){
              this.square.x = this.square.x -5;
              this.square.y = this.square.y +5;
              this.square.height = 10;
              this.square.width = 20;
              console.log("oriented Horizontal")
          }
          else {
              console.log("oriented vertical")
          }
      }
  }
};
</script>