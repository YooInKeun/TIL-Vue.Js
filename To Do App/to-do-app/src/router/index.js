import Vue from 'vue'
import VueRouter from 'vue-router'
import { toDoRoutes } from './toDoRouter.js'

Vue.use(VueRouter)

const routes = Object.assign(toDoRoutes);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;