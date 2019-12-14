<template>
  <div>
    <v-image :config="{
        image: image,
        x: this.hoeInfo.x,
        y: this.hoeInfo.y,
        height: 20,
        width: 20,
      }"/>
  </div>
</template>

<script>
export default {
  name: "Hoe",
  props: {
    hoeInfo: Object
  },
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
    image.src = require("./assets/grubbingHoe.png");
    // image.src = "https://konvajs.org/assets/yoda.jpg";
    console.log(image.src) 
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    }
      console.log("image:",image.src)
},

  mounted() {
    console.log("Hoe Mounted");
  }
};
</script>