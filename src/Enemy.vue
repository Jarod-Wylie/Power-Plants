 <template>
  <div>
    <v-text :config="enemy" />
  </div>
</template>

<script>
export default {
  name: "Enemy",
  props: {
    HomeInfo: Object,
    boundaries: Array,
    waterArray: Array,
    irrigationArray: Array,
    plantArray: Array,
  },
  data() {
    return {
      plantID: 0,

      enemy: {
        x: 100,
        y: 100,
        fontSize: 25,
        text: "E",
        fill: "black"
      },
    };
  },
  mounted() {
      this.interval = setInterval(() => {
          this.enemy.x = this.enemy.x +20;
          this.enemy.y = this.enemy.y +20;
    }, 500);
  },
  computed: {},

  methods: {
    moveUp() {
      
      if (this.player.y != 100) {
        var boundaryFound = this.boundaries.find(
          boundaries =>
            boundaries.x == this.player.x && boundaries.y + 20 == this.player.y
        );
        if (!boundaryFound) {
          console.log("Player moved North");
          console.log("Boundaries Array", this.boundaries);
          this.subtractEnergy();
          this.player.y -= 20;
          this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
        }
      }
    },
    moveDown() {
      if (this.player.y != 480) {
        var boundaryFound = this.boundaries.find(
            boundaries  => boundaries.x == this.player.x && boundaries.y -20 == this.player.y )
          if (!boundaryFound){
        console.log("Player moved South");
        this.subtractEnergy();
        this.player.y += 20;
        this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
      }
      }
    },
    moveRight() {
      if (this.player.x != 480) {
        var boundaryFound = this.boundaries.find(
            boundaries  => boundaries.x - 20 == this.player.x && boundaries.y  == this.player.y )
          if (!boundaryFound){
        console.log("Player moved East");
        this.subtractEnergy();
        this.player.x += 20;
        this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
      }
      }
    },
    moveLeft() {
      if (this.player.x != 100) {
        var boundaryFound = this.boundaries.find(
          boundaries =>
            boundaries.x + 20 == this.player.x && boundaries.y == this.player.y
        );
        if (!boundaryFound) {
          console.log("Player moved West");
          this.subtractEnergy();
          this.player.x -= 20;
          this.PlayerLog.text = "x:" + this.player.x + " y:" + this.player.y;
        }
      }
      console.log(
        "playerCoordinates",
        "X: ",
        this.player.x,
        "Y:",
        this.player.y
      );
    },
  }
};
</script>