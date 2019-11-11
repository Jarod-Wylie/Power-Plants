<!-- The foundation to other tiles -->

<template>
  <div>
    <v-rect :config="square"></v-rect>

    <!-- <v-image :config="{
      image: image,
        x: this.stepInfo.x,
        y: this.stepInfo.y,
        height: 20,
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
      square: {
        x: this.stepInfo.x,
        y: this.stepInfo.y,
        height: 20,
        width: 20,
        fill: "#FDFDFF",
        stroke: "black",
        strokeWidth: 1,
      },
      image: null,
      }
  },
  // created() {
  //   const image = new window.Image();
  //   image.src = "/assets/steps.jpg";
  //   console.log(image.src)
  //   image.onload = () => {
  //     // set image only when it is loaded
  //     this.image = image;
  //   }
  //     console.log("image:",this.image)
  // },
  mounted() {
    console.log("step1 Mounted");
  }
};
</script>