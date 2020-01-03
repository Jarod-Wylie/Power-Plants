<!-- Home Tile. This is where the player can have their energy replenished -->

<template>
  <div>
     <v-sprite ref="sprite" :config="{
 
        image: imageObj,
        x: this.HomeInfo.x,
        y: this.HomeInfo.y - 5,
        animation:'burning',
        animations: animations,
        frameRate: 3,
        frameIndex: 0,
        

        width: 50,
        height: 50
      }"/>
  </div>
</template>

<script>
export default {
  name: "HomeTile",
  props: {
    HomeInfo: Object
  },
  data() {
    return {
      interval: null,
      imageObj: null,
      animations: {
        burning: [
              0,
              -5,
              17,
              40,

              16,
              -5,
              17,
              40,
              
              32,
              -5,
              17,
              40,

              48,
              -5,
              17,
              40
            ]},
      
      }
  },

  created(){
      var imageObj = new window.Image();
     imageObj.src = require("./assets/fire.png");
    //  imageObj.src = require(this.animations[0]);
    // image.src = "https://konvajs.org/assets/yoda.jpg";
    console.log(imageObj) 
    imageObj.onload = () => {

      // set image only when it is loaded
      this.imageObj = imageObj;
    }
},

  mounted() {
    console.log("HomeTile Mounted:", this.imageObj);

     const node = this.$refs.sprite.getNode();

        node.start();   
  },
};
</script>