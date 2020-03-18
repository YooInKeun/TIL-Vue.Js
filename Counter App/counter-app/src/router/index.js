import Vue from 'vue'
import Router from 'vue-router'
import CounterIndex from '../../views/counter/CounterIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'counterIndex',
      component: CounterIndex
    }
  ]
})
