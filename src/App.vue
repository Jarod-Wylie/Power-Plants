<!--------------------------------------------------------------------------------------------
 ---------------------------------------TEMPLATE ---------------------------------------------
--------------------------------------------------------------------------------------------->
<template>

 <div id="container" tabindex="0" 
      @keydown.87.exact="moveUp()"
      @keyup.87.exact="stopMoving()"
      @keydown.83.exact="moveDown()" 
      @keyup.83.exact="stopMoving()" 
      @keydown.65.exact="moveLeft()"
      @keyup.65.exact="stopMoving()"
      @keydown.68.exact="moveRight()" 
      @keyup.68.exact="stopMoving()"
      @keydown.74.exact="playerFeedFire()" 


      @keydown.shift.87.exact="buildT()"
      @keydown.shift.83.exact="buildB()"
      @keydown.shift.65.exact="buildL()"
      @keydown.shift.68.exact="buildR()"

      @keyup.80="plantHere()"
      @keydown.72="harvestHere()"
      @keyup.71.exact="grab()"
      @keyup.73="irrigateHere()"
      @keyup.84="talkHere()"
     
      >
  <v-stage ref="stage" :config="{
        container: 'container',
        x: 10,
        y: 10,
        width: 1110,
        height: 760
        }">
    <v-fastLayer>

      <v-rect
        :config="{
            width: 2200,
            height: 2000,
            fill: 'black',
            stroke: '#8EA8C3'
          }"
      ></v-rect>

      <v-text
        :config="{
            x: 800,
            y: 50,
            fontSize:25,
            text:'Harvest 6 ideal plants(yellow) to survive the winter.',
            }"
      />
      <v-rect
        :config="{
            x: i.x,
            y: i.y,
            width: 20,
            height: 20,
            fill: '#8C847F',
            stroke: '#8EA8C3'
          }"
        v-for="i in tileArray"
        :key="i.tileID"
      ></v-rect>
    </v-fastLayer>

      <!-- <Tile v-for="i in tileArray" :key="i.tileID" :Coordinates="i"></Tile> -->
      <!-- <BoundaryTile></BoundaryTile> -->
      <v-layer>

       <EnvironmentBanner></EnvironmentBanner> 




        <!-- <Character :CharacterInfo="CharacterInfo"></Character> -->
        <!-- <v-text :config="characterSpeech" /> -->

      <HomeTile :HomeInfo="HomeArray[0]"></HomeTile>
      <waterTile v-for="i in waterArray" :key="i.tileID" :waterInfo="i"></waterTile>
      <irrigationTile v-for="i in irrigationArray" :key="i.tileID" :irrigationInfo="i"></irrigationTile>
      <PlantTile ref="plant" v-for="i in plantArray" :key="i.id" :plantInfo="i" :plantArray="plantArray"
                 @growing="growing"></PlantTile>
      <BoundaryTile v-for="i in wallArray" :key="i.wallID" :wallInfo="i"></BoundaryTile>
      <step1  v-for="i in stepArray" :key="i.id" :stepInfo="i"></step1>
      <Hoe  v-for="i in hoeArray" :key="i.id" :hoeInfo="i"></Hoe>

      <!-- <Enemy></Enemy> -->

 <v-text
        :config="{
            x: 25,
            y: 25,
            fontSize:25,
            stroke: this.fireColor,
            text: this.fireLife,
            }"
      />

       <v-text
        :config="{
            x: 25,
            y: 50,
            fontSize:25,
            stroke: 'brown',
            text: this.crops,
            }"
      />

       <v-text
        :config="{
            x: 25,
            y: 75,
            fontSize:25,
            stroke: 'green',
            text: this.seeds,
            }"
      />

      <!--                                  PLAYER COMPONENT                                    -->
      <Player
        ref="player" 
        :HomeInfo="HomeArray[0]"
        :Perimeter="Perimeter"
        :boundaries="boundariesArray"
        :plantArray="plantArray"
        :waterArray="waterArray"
        :irrigationArray="irrigationArray"
        :hoeArray="hoeArray"
        :steps="stepArray"
        :inventoryArray="inventoryArray"

        @irrigateHere="irrigate"
        @buildHere="build"
        @plantHere="plant"
        @harvestHere="harvest"
        @pickUpItem="pickUpItem"
        @playerLocation="set"
        @feedFire="feedFire"
      ></Player>
                          <!-- BOTTOM OF PLAYER COMPONENT -->

    </v-layer>
  </v-stage>

  </div>
</template>


<script>
//  ******************************************************************************************************************************
//                                                   SCRIPT
// *******************************************************************************************************************************


//  ******************************************************************************************************************************
//                                                 DEPENDENCIES
// *******************************************************************************************************************************
// import store from './store'

// import Tile from "./Tile.vue";
import Player from "./Player.vue";
import BoundaryTile from "./BoundaryTile.vue";
import irrigationTile from "./irrigationTile.vue";
import PlantTile from "./PlantTile.vue";
import waterTile from "./waterTile.vue";
import HomeTile from "./HomeTile.vue";
import step1 from "./step1.vue";
// import Character from "./Character.vue";
import Hoe from "./Hoe.vue";
import EnvironmentBanner from "./EnvironmentBanner.vue";



// *******************************************************************************************************************************
//                                                     DATA
// *******************************************************************************************************************************
export default {

  components: {
    // Tile: Tile,
    Player: Player,
    HomeTile: HomeTile,
    BoundaryTile: BoundaryTile,
    PlantTile: PlantTile,
    waterTile: waterTile,
    irrigationTile: irrigationTile,
    step1: step1,
    // Character: Character,
    Hoe: Hoe,
    EnvironmentBanner: EnvironmentBanner
  },
  data() {
    return {
      tileArray: [],
      Perimeter: { xLeft: 0, xRight: 0, yUp: 0, yDown: null },
      HomeArray: [{ x: 100, y: 440 }],
      boundariesArray: [],
      wallArray: [],
      plantArray: [],
      inventoryArray: [],
      waterArray: [],
      irrigationArray: [],
      stepArray: [],
      hoeArray: [],

      fireLife: '////////////////////',
      fireColor: 'orange',
      crops:'////////////////////',
      burnRate: 2500,

      seeds:'//',

      moving: true,
      speed: 10,

        // ****************************                 dCHARACTER DATA
      CharacterInfo: {
        x: 200,
        y: 520,
        name: "Rich Hoagie",
        replies: [
          "",
          "I am not feeling very well today.",
          "Maybe I'll find time to fix the tank some time this week."
        ]
      },
      characterSpeech: {
        x: 320,
        y: 480,
        stroke: "Black",
        fontSize: 20,
        text: ""
      },


      interval: null,
      dayInterval: null,
      outside: true,


      tileObj: { x: 100, y: 100, tileID: 0 },

    }
  },
// *******************************************************************************************************************************
//                                                BOTTOM OF DATA
// *******************************************************************************************************************************

  mounted() {  // -----------------                   MOUNTED 
    this.dayInterval = setInterval(() => {
      console.log("hoieoheo")
      this.$refs.plant.forEach(element => {
        element.growPlant();
      });
    }, 10000);
    this.startFire();

    this.generateGrid();
    this.generateBoundaries();
    this.generateSteps();
    this.generateWater();
    this.plantGenerator();
    this.itemsGenerator();


    
  },

// *******************************************************************************************************************************
//                                                    METHODS
// *******************************************************************************************************************************
  methods: { 
    moveUp(){

      if(this.moving){
        this.moving = false;                
        this.$refs.player.moveUp();
        // this.interval = setInterval(() => {
        //   this.$refs.player.moveUp();
        // }, this.speed);
          // this.$refs.player.moveUp();
        setTimeout(() => {
          this.moving = true;
        }, this.speed);
        console.log("player!!!!:", this.$refs.player)
      }
    },
    stopMoving(){
      // this.moving = true;
      // clearInterval(this.interval)
    },
    moveDown(){
      if(this.moving){
        this.moving = false;
          this.$refs.player.moveDown();
    //     this.interval = setInterval(() => {
    //       this.$refs.player.moveDown();
    // }, this.speed);
         setTimeout(() => {
          this.moving = true;
        }, this.speed);
        console.log("player!!!!:", this.$refs.player)

      }
    },
    moveLeft(){
       if(this.moving){
        this.moving = false;
        this.$refs.player.moveLeft();
    //     this.interval = setInterval(() => {
    //       this.$refs.player.moveLeft();
    // }, this.speed);
    setTimeout(() => {
          this.moving = true;
        }, this.speed);
      console.log("player!!!!:", this.$refs.player)
      }
    },
    moveRight(){
       if(this.moving){
        this.moving = false;
        this.$refs.player.moveRight();
    //     this.interval = setInterval(() => {
    //       this.$refs.player.moveRight();
    // }, this.speed);
    setTimeout(() => {
          this.moving = true;
        }, this.speed);
      console.log("player!!!!:", this.$refs.player)
      }
    },


    buildT(){
      this.$refs.player.buildT();
    },
    buildB(){
      this.$refs.player.buildB();
    },
    buildL(){
      this.$refs.player.buildL();
    },
    buildR(){
      this.$refs.player.buildR();
    },
    grab(){
      this.$refs.player.grab();
    },
    plantHere(){
      if(this.seeds.length <= 0){
        return null;
      }
      else{
        this.$refs.player.plant();
        console.log("plant REF:", this.$refs);
        // this.seeds = this.seeds.substring(0, this.seeds.length - 1);
      }
    },

    irrigateHere(){
      this.$refs.player.irrigate();
    },
    talkHere(){
      this.$refs.player.talk();
    },
    harvestHere(){
      this.$refs.player.harvest();
    },

    playerFeedFire(){
      this.$refs.player.feedFire();
    },


    test(){
      console.log("WORKRKRKRKRKWINGN")
    },
    set(obj) {
      this.player = obj;
    },

    generateGrid() { // -- Generates the basic perimeter and
      var id = 0;    //    basic colored ground tiles
  
      var ySpace = 160;
      var xSpace = 0;

      this.Perimeter.yUp = ySpace;
      this.Perimeter.xLeft = xSpace;
      for (var j = 29; j > 0; j--) {
        xSpace = 0;

        for (var i = 55; i > 0; i--) {
          this.tileArray.push({ x: xSpace, y: ySpace, tileID: "grid#" + id, show: "O" });
          xSpace += 20;
          id++;
        }
        ySpace += 20;
      }
      this.Perimeter.xRight = xSpace - 20;
      this.Perimeter.yDown = ySpace - 20;
    },

    generateBoundaries() { // -- Generated wall tiles and
      var id = 0;          //    stores that positon in the
      var i = 20;          //    boundaries array
      var j = 20;
      var xSpace = 100;
      var ySpace = 700;

      for (j = 40; j > 0; j--) {
        this.wallArray.push({
          x: xSpace,
          y: ySpace,
          tileID: "wallTile#:" + id
        });
        this.boundariesArray.push({
          x: xSpace,
          y: ySpace,
          type: "wall",
          tileID: "boarder#:" + id
        });

        id++;
        xSpace += 20;
      }
      xSpace = 100;
      for (i = 6; i > 0; i--) {
        ySpace = 200;

        for (j = 5; j > 0; j--) {
          this.wallArray.push({
            x: xSpace,
            y: ySpace,
            tileID: "wallTile#:" + id
          });
          this.boundariesArray.push({
            x: xSpace,
            y: ySpace,
            tileID: "boarder#:" + id
          });

          id++;
          ySpace += 20;
        }
        xSpace += 20;
      }

      xSpace = 500
      ySpace = 100

      for (i = 6; i > 0; i--) {
        ySpace = 200;

        for (j = 5; j > 0; j--) {
          this.wallArray.push({
            x: xSpace,
            y: ySpace,
            tileID: "wallTile#:" + id
          });
          this.boundariesArray.push({
            x: xSpace,
            y: ySpace,
            tileID: "boarder#:" + id
          });

          id++;
          ySpace += 20;
        }
        xSpace += 20;
      }
    },

    generateSteps() {
      this.stepArray.push({ x: 100, y: 300, id:1 });
      this.stepArray.push({ x: 160, y: 300 , id:2});
      this.stepArray.push({ x: 220, y: 280, id:3 });
      this.stepArray.push({ x: 660, y: 280, id:4 });
    },

    //
    generateWater() {
      var id = 0;
      var i = 20;
      var j = 20;
      var ySpace = 160;

      for (j = 20; j > 0; j--) {
        var xSpace = 260;

        for (i = 20; i > 0; i--) {
          this.waterArray.push({
            x: xSpace,
            y: ySpace,
            tileID: "waterTile#:" + id
          });
          this.boundariesArray.push({
            x: xSpace,
            y: ySpace,
            type: "water",
            tileID: "boarder#:" + id
          });
          xSpace += 20;
          id++;
        }
        ySpace += 20;
      }
    },

    plantGenerator(){

      var id = 0;
      var i = 20;
      var j = 20;
      var ySpace = 160;

      for (j = 5; j > 0; j--) {
        var xSpace = Math.floor((Math.random() * 100)) * 20;
        console.log('Xxxxx', xSpace)

        for (i = 15; i > 0; i--) {
          this.plantArray.push({
            x: xSpace,
            y: ySpace,
            seedChance: Math.random() * 100,
            id: "genPlant#:" + id
          });
               xSpace = Math.floor((Math.random() * 100)) * 20;;
              id++;
      }
           ySpace = Math.floor((Math.random() * 100)) * 20;;
      }
    },

    itemsGenerator(){
      this.hoeArray.push({x:200, y:200, id:'hoe' + 1, type:'hoe'});
    },

    irrigate(obj) {
      console.log("irrigated", obj);

      this.irrigationArray.push(obj);

      console.log("plant Array:", this.irrigationArray);
    },

    // Initiated when player emits plantHere
    plant(obj) {
              this.seeds = this.seeds.substring(0, this.seeds.length - 1);
      console.log("Planted", obj);

      this.plantArray.push(obj);
d
      console.log("plant Array:", this.plantArray);
      
      

    },

    build(obj){
      this.wallArray.push(obj);
      this.boundariesArray.push(obj);
      console.log("building wall");
    },

    pickUpItem(obj){
      console.log("obj", obj);
      this.hoeArray = this.hoeArray.filter(hoe => hoe.id == obj.id);
      this.inventoryArray.push(obj);
      console.log("Invetor1y:", this.inventoryArray);
      console.log("Hoe Array:", this.hoeArray);
    },

    growing(obj){
      
      // console.log('plantArray:', obj)
      // console.log('plantArray:', obj)
      var plantGrowing = this.plantArray.findIndex( plant => obj.id == plant.id)
      console.log('Growing:', obj.maturity)

      this.plantArray[plantGrowing].maturity = obj.maturity
      this.plantArray[plantGrowing].seedChance = this.plantArray[plantGrowing].seedChance + 15

    },

   

    // Initiated when player emits harvestHere
    harvest(obj) {
      var newItem = this.plantArray.find(plant => plant.id == obj.id);
      this.plantArray = this.plantArray.filter(plant => plant.id != obj.id);



       if (newItem.seedChance >= 102){
        this.seeds = this.seeds + '///';
      }
      else if (newItem.seedChance >= 75){
        this.seeds = this.seeds + '/';
      }


      if (newItem.maturity == 'seedling'){
        this.crops = this.crops + '/';
      }
      if (newItem.maturity == 'mature'){
        this.crops = this.crops + '////';
      }
       if (newItem.maturity == 'ideal'){
        this.crops = this.crops + '///////////////';
      }
      
    },

    startFire(){

          this.interval = setInterval(() => {
    
          if (this.fireLife.length == 4){
            this.$refs.player.player.fill = 'blue'
            this.fireColor = 'blue';
            this.speed = 200
            this.burnRate = 3000;
            clearInterval(this.interval);
            this.startFire();
          }
        this.fireLife = this.fireLife.substring(0, this.fireLife.length - 1);
        }, this.burnRate);
    },

    feedFire(){
      this.fireLife = this.fireLife + this.crops
      this.crops = '';

      if(this.fireLife.length >= 5){
        this.$refs.player.player.fill = '#EF4700'
        this.fireColor = 'orange';
        this.burnRate = 2500;
        this.speed = 5;
        clearInterval(this.interval);
        this.startFire();
      }

    },

    outsideNow(){
      this.outside = false;
    },

    log() {
      console.log("Keys are working in App.vue");
    }
  }
// *******************************************************************************************************************************
//                                                BOTTOM OF METHODS
// *******************************************************************************************************************************
};

// *******************************************************************************************************************************
//                                                  END OF SCRIPT
// *******************************************************************************************************************************
</script>

