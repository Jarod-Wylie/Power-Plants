<!-- The foundation to other tiles -->

<template>
  <div>
    <v-group>
    <v-rect :config="square"></v-rect>
    <v-rect :config="rect1"></v-rect>
    <v-rect :config="rect2"></v-rect>
    <v-rect :config="rect3"></v-rect>
    <v-rect :config="rect4"></v-rect>
    </v-group>
    <!-- <v-image :config="{
        image: image,
        x: this.stepInfo.x,
        y: this.stepInfo.y,
        height: 20rect
        width: 20,
      }"/> -->
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
      // square: {
      //   x: this.stepInfo.x,
      //   y: this.stepInfo.y,
      //   height: 20,
      //   width: 20,
      //   fill: "#535557",

      //   strokeWidth: 1,
      // },
      rect1: {
        x: this.stepInfo.x + 13,
        y: this.stepInfo.y + 2,
        height: 17,
        width: 5,
        fill: "grey",

        strokeWidth: 1,

      },

      rect3: {
        x: this.stepInfo.x + 7,
        y: this.stepInfo.y + 2,
        height: 17,
        width: 5,
        fill: "grey",
        stroke: "grey",
        strokeWidth: 1,
         shadowOffsetX: 2,

        shadowBlur: 5,
      },
      rect4: {
        x: this.stepInfo.x - 2,
        y: this.stepInfo.y +1,
        height: 17,
        width: 5,
        fill: "grey",
        stroke: "grey",
        strokeWidth: 1,
         shadowOffsetX: 2,

        shadowBlur: 5,
      },
      // step: {
      //   image: image,
      //   x: this.stepInfo.x,
      //   y: this.stepInfo.y,
      //   height: 20,
      //   width: 20,
      // },
      image: null,
      }
  },
  created() {
    // const image = new window.Image();
    // image.src = require("./assets/steps.jpg");
    // // image.src = "https://konvajs.org/assets/yoda.jpg";
    // console.log(image.src) 
    // image.onload = () => {
    //   // set image only when it is loaded
    //   this.image = image;
    // }
    //   console.log("image:",image.src)
  },
  mounted() {
    console.log("step1 Mounted:");
  }
};
</script>