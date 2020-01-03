webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/HomeTile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/HomeTile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HomeTile\",\n  props: {\n    HomeInfo: Object\n  },\n  data: function data() {\n    return {\n      interval: null,\n      imageObj: null,\n      animations: {\n        burning: [-21, -5, 100, 119, -1, -5, 74, 119, 146, 2, 81, 119, 226, 2, 76, 119]\n      }\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    var imageObj = new window.Image();\n    imageObj.src = __webpack_require__(/*! ./assets/fire.png */ \"./src/assets/fire.png\"); //  imageObj.src = require(this.animations[0]);\n    // image.src = \"https://konvajs.org/assets/yoda.jpg\";\n\n    console.log(imageObj);\n\n    imageObj.onload = function () {\n      // set image only when it is loaded\n      _this.imageObj = imageObj;\n    }; // console.log(\"image:\",image.src)\n\n  },\n  mounted: function mounted() {\n    console.log(\"HomeTile Mounted:\", this.imageObj); //  const node = this.$refs.sprite.getNode();\n    //     node.start();\n  },\n  methods: {\n    changeImage: function changeImage() {\n      if (this.animationFrameIndex == 3) {\n        this.animationFrameIndex = 0;\n        this.imageObj.src = __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/fire_Animation1_.*\\\\.png$\")(\"./fire_Animation1_\" + this.animationFrameIndex + \".png\");\n      } else {\n        this.animationFrameIndex += 1;\n        this.imageObj.src = __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/fire_Animation1_.*\\\\.png$\")(\"./fire_Animation1_\" + this.animationFrameIndex + \".png\");\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0hvbWVUaWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSG9tZVRpbGUudnVlP2QzMDQiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBIb21lIFRpbGUuIFRoaXMgaXMgd2hlcmUgdGhlIHBsYXllciBjYW4gaGF2ZSB0aGVpciBlbmVyZ3kgcmVwbGVuaXNoZWQgLS0+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgICA8di1zcHJpdGUgcmVmPVwic3ByaXRlXCIgOmNvbmZpZz1cIntcclxuIFxyXG4gICAgICAgIGltYWdlOiBpbWFnZU9iaixcclxuICAgICAgICB4OiB0aGlzLkhvbWVJbmZvLngsXHJcbiAgICAgICAgeTogdGhpcy5Ib21lSW5mby55IC0gNSxcclxuICAgICAgICBhbmltYXRpb246J2J1cm5pbmcnLFxyXG4gICAgICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXHJcbiAgICAgICAgZnJhbWVSYXRlOiA3LFxyXG4gICAgICAgIGZyYW1lSW5kZXg6IDEsXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICBoZWlnaHQ6IDUwXHJcbiAgICAgIH1cIi8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJIb21lVGlsZVwiLFxyXG4gIHByb3BzOiB7XHJcbiAgICBIb21lSW5mbzogT2JqZWN0XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW50ZXJ2YWw6IG51bGwsXHJcbiAgICAgIGltYWdlT2JqOiBudWxsLFxyXG4gICAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgYnVybmluZzogW1xyXG4gICAgICAgICAgICAgIC0yMSxcclxuICAgICAgICAgICAgICAtNSxcclxuICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgMTE5LFxyXG5cclxuICAgICAgICAgICAgICAtMSxcclxuICAgICAgICAgICAgICAtNSxcclxuICAgICAgICAgICAgICA3NCxcclxuICAgICAgICAgICAgICAxMTksXHJcbiAgICAgICAgICAgICAgMTQ2LFxyXG4gICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgODEsXHJcbiAgICAgICAgICAgICAgMTE5LFxyXG4gICAgICAgICAgICAgIDIyNixcclxuICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgIDc2LFxyXG4gICAgICAgICAgICAgIDExOVxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgXHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxuICBjcmVhdGVkKCl7XHJcbiAgICAgIHZhciBpbWFnZU9iaiA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcclxuICAgICBpbWFnZU9iai5zcmMgPSByZXF1aXJlKFwiLi9hc3NldHMvZmlyZS5wbmdcIik7XHJcbiAgICAvLyAgaW1hZ2VPYmouc3JjID0gcmVxdWlyZSh0aGlzLmFuaW1hdGlvbnNbMF0pO1xyXG4gICAgLy8gaW1hZ2Uuc3JjID0gXCJodHRwczovL2tvbnZhanMub3JnL2Fzc2V0cy95b2RhLmpwZ1wiO1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2VPYmopIFxyXG4gICAgaW1hZ2VPYmoub25sb2FkID0gKCkgPT4ge1xyXG5cclxuICAgICAgLy8gc2V0IGltYWdlIG9ubHkgd2hlbiBpdCBpcyBsb2FkZWRcclxuICAgICAgdGhpcy5pbWFnZU9iaiA9IGltYWdlT2JqO1xyXG5cclxuICAgIH1cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJpbWFnZTpcIixpbWFnZS5zcmMpXHJcbn0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhvbWVUaWxlIE1vdW50ZWQ6XCIsIHRoaXMuaW1hZ2VPYmopO1xyXG5cclxuICAgIC8vICBjb25zdCBub2RlID0gdGhpcy4kcmVmcy5zcHJpdGUuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIC8vICAgICBub2RlLnN0YXJ0KCk7XHJcblxyXG5cclxuXHJcbiAgIFxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICBcclxuICBjaGFuZ2VJbWFnZSgpe1xyXG5cclxuICAgIGlmKHRoaXMuYW5pbWF0aW9uRnJhbWVJbmRleCA9PSAzKXtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZUluZGV4ID0gMDtcclxuICAgICAgdGhpcy5pbWFnZU9iai5zcmMgPSByZXF1aXJlKFwiLi9hc3NldHMvZmlyZV9BbmltYXRpb24xX1wiICsgdGhpcy5hbmltYXRpb25GcmFtZUluZGV4ICsgXCIucG5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2V7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lSW5kZXggKz0gMTtcclxuICAgIHRoaXMuaW1hZ2VPYmouc3JjID0gcmVxdWlyZShcIi4vYXNzZXRzL2ZpcmVfQW5pbWF0aW9uMV9cIiArIHRoaXMuYW5pbWF0aW9uRnJhbWVJbmRleCArIFwiLnBuZ1wiKTtcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBeUJBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBS0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBNURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/HomeTile.vue?vue&type=script&lang=js&\n");

/***/ })

})