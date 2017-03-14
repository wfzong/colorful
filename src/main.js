import Vue from "vue"

import initApp from "./App.vue"
import initRouter from './router/init.js'


new Vue({
  el: '#app',
  router:initRouter,
  template:"<initApp/>",
  components: {
  	initApp:initApp
  }

})