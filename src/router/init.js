import Vue from 'vue'
import Router from 'vue-router'

import welcome  from "../components/welcome.vue"
import colorEles  from "../components/colorEles.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/running',
      name: 'colorEles',
      component: colorEles
    }
  ]
})