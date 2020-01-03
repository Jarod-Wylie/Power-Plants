webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/HomeTile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/HomeTile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HomeTile\",\n  props: {\n    HomeInfo: Object\n  },\n  data: function data() {\n    return {\n      interval: null,\n      imageObj: null,\n      animations: {\n        burning: [46, 1, 10, 119, 71, 2, 74, 119, 146, 2, 81, 119, 226, 2, 76, 119]\n      }\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    var imageObj = new window.Image();\n    imageObj.src = __webpack_require__(/*! ./assets/fire.png */ \"./src/assets/fire.png\"); //  imageObj.src = require(this.animations[0]);\n    // image.src = \"https://konvajs.org/assets/yoda.jpg\";\n\n    console.log(imageObj);\n\n    imageObj.onload = function () {\n      // set image only when it is loaded\n      _this.imageObj = imageObj;\n    }; // console.log(\"image:\",image.src)\n\n  },\n  mounted: function mounted() {\n    console.log(\"HomeTile Mounted:\", this.imageObj);\n  },\n  methods: {\n    changeImage: function changeImage() {\n      if (this.animationFrameIndex == 3) {\n        this.animationFrameIndex = 0;\n        this.imageObj.src = __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/fire_Animation1_.*\\\\.png$\")(\"./fire_Animation1_\" + this.animationFrameIndex + \".png\");\n      } else {\n        this.animationFrameIndex += 1;\n        this.imageObj.src = __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/fire_Animation1_.*\\\\.png$\")(\"./fire_Animation1_\" + this.animationFrameIndex + \".png\");\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0hvbWVUaWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSG9tZVRpbGUudnVlP2QzMDQiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBIb21lIFRpbGUuIFRoaXMgaXMgd2hlcmUgdGhlIHBsYXllciBjYW4gaGF2ZSB0aGVpciBlbmVyZ3kgcmVwbGVuaXNoZWQgLS0+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgICA8di1zcHJpdGUgcmVmPVwic3ByaXRlXCIgOmNvbmZpZz1cIntcclxuIFxyXG4gICAgICAgIGltYWdlOiBpbWFnZU9iaixcclxuICAgICAgICB4OiB0aGlzLkhvbWVJbmZvLngsXHJcbiAgICAgICAgeTogdGhpcy5Ib21lSW5mby55IC0gNSxcclxuICAgICAgICBhbmltYXRpb246J2J1cm5pbmcnLFxyXG4gICAgICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXHJcbiAgICAgICAgZnJhbWVSYXRlOiA3LFxyXG4gICAgICAgIGZyYW1lSW5kZXg6IDAsXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICBoZWlnaHQ6IDUwXHJcbiAgICAgIH1cIi8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJIb21lVGlsZVwiLFxyXG4gIHByb3BzOiB7XHJcbiAgICBIb21lSW5mbzogT2JqZWN0XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW50ZXJ2YWw6IG51bGwsXHJcbiAgICAgIGltYWdlT2JqOiBudWxsLFxyXG4gICAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgYnVybmluZzogW1xyXG4gICAgICAgICAgICAgIDQ2LFxyXG4gICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgICAgMTE5LFxyXG4gICAgICAgICAgICAgIDcxLFxyXG4gICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgNzQsXHJcbiAgICAgICAgICAgICAgMTE5LFxyXG4gICAgICAgICAgICAgIDE0NixcclxuICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgIDgxLFxyXG4gICAgICAgICAgICAgIDExOSxcclxuICAgICAgICAgICAgICAyMjYsXHJcbiAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICA3NixcclxuICAgICAgICAgICAgICAxMTlcclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlZCgpe1xyXG4gICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgd2luZG93LkltYWdlKCk7XHJcbiAgICAgaW1hZ2VPYmouc3JjID0gcmVxdWlyZShcIi4vYXNzZXRzL2ZpcmUucG5nXCIpO1xyXG4gICAgLy8gIGltYWdlT2JqLnNyYyA9IHJlcXVpcmUodGhpcy5hbmltYXRpb25zWzBdKTtcclxuICAgIC8vIGltYWdlLnNyYyA9IFwiaHR0cHM6Ly9rb252YWpzLm9yZy9hc3NldHMveW9kYS5qcGdcIjtcclxuICAgIGNvbnNvbGUubG9nKGltYWdlT2JqKSBcclxuICAgIGltYWdlT2JqLm9ubG9hZCA9ICgpID0+IHtcclxuXHJcbiAgICAgIC8vIHNldCBpbWFnZSBvbmx5IHdoZW4gaXQgaXMgbG9hZGVkXHJcbiAgICAgIHRoaXMuaW1hZ2VPYmogPSBpbWFnZU9iajtcclxuXHJcbiAgICB9XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW1hZ2U6XCIsaW1hZ2Uuc3JjKVxyXG59LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJIb21lVGlsZSBNb3VudGVkOlwiLCB0aGlzLmltYWdlT2JqKTtcclxuXHJcblxyXG4gICBcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgXHJcbiAgY2hhbmdlSW1hZ2UoKXtcclxuXHJcbiAgICBpZih0aGlzLmFuaW1hdGlvbkZyYW1lSW5kZXggPT0gMyl7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuaW1hZ2VPYmouc3JjID0gcmVxdWlyZShcIi4vYXNzZXRzL2ZpcmVfQW5pbWF0aW9uMV9cIiArIHRoaXMuYW5pbWF0aW9uRnJhbWVJbmRleCArIFwiLnBuZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNle1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZUluZGV4ICs9IDE7XHJcbiAgICB0aGlzLmltYWdlT2JqLnNyYyA9IHJlcXVpcmUoXCIuL2Fzc2V0cy9maXJlX0FuaW1hdGlvbjFfXCIgKyB0aGlzLmFuaW1hdGlvbkZyYW1lSW5kZXggKyBcIi5wbmdcIik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQXdCQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUF0REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/HomeTile.vue?vue&type=script&lang=js&\n");

/***/ })

})