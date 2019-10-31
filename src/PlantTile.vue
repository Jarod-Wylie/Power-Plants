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
    plantInfo: Object,
    plantArray: Array,
    playerLocation: Object
    // plantHarvest: Function,
  },
  data() {
    return {
      interval: null,
      maturity: "germ",
      count: 0,
      square: {
        x: this.plantInfo.x,
        y: this.plantInfo.y,
        height: 20,
        width: 20,
        fill: "#8C775C",
        stroke: "green",
        strokeWidth: 0.5
      },

      plant: {
        x: this.plantInfo.x,
        y: this.plantInfo.y,
        fontSize: 15,
        text: ' p',
        stroke: "black"
      },
       harvestButton: {
        x: 780,
        y: 550,
        height: 30,
        width: 90,
        stroke: "black",
        // fontSize: 15,
        // text: "Harvest",
        fill: "orange"
      },
    };
  },

  mounted() {
    console.log("PlantTile Mounted");
    console.log("maturity:", this.maturity);

    this.interval = setInterval(() => {
      this.growPlant();
    }, 10000);

  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {

    growPlant() {
      this.count += 1;

      switch(this.count){
        case 10:
          this.plant.maturity = "seedling";
          this.plant.stroke = "green";

          // console.log("seedling count:", this.count);
          break;
          
        case 20:
          this.plant.maturity = "mature";
          this.plant.fontSize = 30;
          break;
        case 25:
          this.plant.maturity = "ideal";
          this.plant.stroke = "yellow"
          break;
        case 29:
          this.plant.maturity = "dead";
          this.plant.stroke = "black";
          this.plant.fontSize = 10;
          this.plant.text = "X";
          clearInterval(this.interval);
          break;
      }
      // console.log("my coords", this.plant.x, "__", this.plant.y)

      // console.log("maturity:", this.maturity);
      // console.log("interval:", this.count);
      
    }

  }
};
</script>