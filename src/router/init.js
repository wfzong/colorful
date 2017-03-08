import Vue from 'vue'
import Router from 'vue-router'

import colorEles  from "../components/colorEles.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'colorEles',
      component: colorEles
    }
  ]
})