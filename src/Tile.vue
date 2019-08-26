<template>
    <v-rect :config="square"></v-rect>
</template>

<script>
export default {
    name: "Tile",
    props:{
        Coordinates: Object,
    },
    data(){
        return{

    square: {
    x: this.Coordinates.x,
    y: this.Coordinates.y,
    height: 20,
    width: 20,
    fill: "white",
    stroke: "black",
    strokeWidth: 1
    }
        }

    },

    mounted(){
        console.log("Tile Mounted");
    }
}
</script>