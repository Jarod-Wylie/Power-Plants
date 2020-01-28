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
        strokeWidth: 0.5,
        listening: false
      },

      plant: {
        x: this.plantInfo.x,
        y: this.plantInfo.y,
        fontSize: 15,
        text: ' p',
        stroke: "black",
        listening:false,
      },
    };
  },

  mounted() {
    console.log("PlantTile Mounted");
    console.log("maturity:", this.maturity);

    // this.interval = setInterval(() => {
    //   this.growPlant();
    // }, 10000);

  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {

    growPlant() {
      this.count += 1;

      switch(this.count){
        case 3:
          this.plant.stroke = "green";

          this.$emit("growing", {
          id: this.plantInfo.id,
          maturity: 'seedling'
        });
          break;
          
        case 10:
          this.plant.fontSize = 30;

           this.$emit("growing", {
          id: this.plantInfo.id,
          maturity: 'mature'
        });
          break;
        case 25:
          this.plant.stroke = "yellow"

          this.$emit("growing", {
          id: this.plantInfo.id,
          maturity: 'ideal'
        });
          break;
        case 29:

          this.plant.stroke = "black";
          this.plant.fontSize = 10;
          this.plant.text = "X";
          this.$emit("growing", {
          id: this.plantInfo.id,
          maturity: 'dead'
        });
          clearInterval(this.interval);
          break;
      }
    }

  }
};
</script>