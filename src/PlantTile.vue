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
      this.plant.x = this.plantInfo.x;
      this.plant.y = this.plantInfo.y;
      this.square.x = this.plantInfo.x;
      this.square.y = this.plantInfo.y;
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
          this.plant.stroke = "green";
          console.log("seedling count:", this.count);
          break;
          
        case 20:
          this.maturity = "mature";
          this.plant.fontSize = 30;
          break;
        case 25:
          this.maturity = "ideal";
          this.plant.stroke = "yellow"
          break;
        case 29:
          this.maturity = "dead";
          this.plant.stroke = "black";
          this.plant.fontSize = 10;
          this.plant.text = "X";
          clearInterval(this.interval);
          break;
      }
      console.log("my coords", this.plant.x, "__", this.plant.y)

      // console.log("maturity:", this.maturity);
      // console.log("interval:", this.count);
      
    }
  }
};
</script>