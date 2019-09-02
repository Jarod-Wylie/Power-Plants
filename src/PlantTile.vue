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
      interval: null,
      maturity: "germ",
      count: 0,
      square: {
        x: this.plantInfo.x,
        y: this.plantInfo.y,
        height: 20,
        width: 20,
        fill: "white",
        stroke: "green",
        strokeWidth: 0.5
      },

      plant: {
        x: this.plantInfo.x,
        y: this.plantInfo.y,
        fontSize: 15,
        text: "p",
        stroke: "black"
      }
    };
  },

  mounted() {
    console.log("PlantTile Mounted");
    console.log("maturity:", this.maturity);

    this.interval = setInterval(() => {
      this.growPlant();
    }, 1000);

  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    growPlant() {
      this.count += 1;

      switch(this.count){
        case 10:
          this.maturity = "seedling";
        case 20:
          this.maturity = "mature";
        case 30:
          this.maturity = "ideal";
        case 40:
          this.maturity = "dead";
      }

      console.log("maturity:", this.maturity);
      console.log("interval:", this.count);
      // clearInterval(this.interval);
    }
  }
};
</script>