<!-- The foundation to other tiles -->

<template>
  <div>
    <!-- <v-rect :config="square"></v-rect> -->
    <v-text :config="Character"/>
    

  </div>
</template>

<script>
export default {
  name: "Character",
  props: {
    CharacterInfo: Object
  },
  data() {
    return {
      Character: {
        x: this.CharacterInfo.x,
        y: this.CharacterInfo.y,
        stroke: "red",
        fontSize: 20,
        text: "C",
      },
      
      }
  },

  mounted() {
    console.log("Character Mounted:", this.CharacterInfo);
  }
};
</script>