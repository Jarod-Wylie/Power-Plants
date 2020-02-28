<!-- Home Tile. This is where the player can have their energy replenished -->

<template>
  <div>

<v-group>
      <v-rect rect='across' :config="{
        x: this.HomeInfo.x -20,
        y: this.HomeInfo.y,
        height: 20,
        width: 60,
        fill: '#9BA59F',
        stroke: 'black'

        }"></v-rect>

      <v-rect rect='up_down' :config="{
        x: this.HomeInfo.x ,
        y: this.HomeInfo.y - 20,
        height: 60,
        width: 20,
        fill: '#9BA59F',
        stroke: 'black'

        }"></v-rect>
</v-group>


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
    console.log(imageObj) 
    imageObj.onload = () => {
    // set image only when it is loaded
    this.imageObj = imageObj;
    }
},

  mounted() {
    console.log("HomeTile Mounted:", this.imageObj);
    var node = this.$refs.sprite.getNode();
    node.start();   
  },

  methods:{
    stopFireAnimation(){
    const node = this.$refs.sprite.getNode();
    node.stop();   
      
    }
    }

};
</script>