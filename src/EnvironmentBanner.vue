<template>
  <div>
    <v-image :config="{
        image: image,
        x: 0,
        y: 0,
        height: 160,
        width: 1200,
      }"/>
  </div>
</template>

<script>
export default {
  name: "EnvironmentBanner",

  data() {
    return {

    // hoe: {
    //     image: image,
    //     x: this.hoeInfo.x,
    //     y: this.hoeInfo.y,
    //     height: 20,
    //     width: 20,
    // },
    image: null,
    }
  },

created(){
     const image = new window.Image();
    image.src = require("./assets/byTheWater.png");
    // image.src = "https://konvajs.org/assets/yoda.jpg";
    console.log(image.src) 
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    }
      console.log("image:",image.src)
},

  mounted() {
    console.log("EnvironmentBanner Mounted");
  }
};
</script>