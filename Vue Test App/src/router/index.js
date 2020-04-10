import Vue from "vue";
import VueRouter from "vue-router";
import { testRoutes } from "./testRouter.js";

Vue.use(VueRouter);

const routes = Object.assign(testRoutes);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
