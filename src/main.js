import Vue from 'vue'
import VueKonva from 'vue-konva'

import App from './App.vue'


Vue.use(VueKonva)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
