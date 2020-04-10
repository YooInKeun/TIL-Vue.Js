import Vue from "vue";
import Vuex from "vuex";
// import { mutations } from "./mutations/index.js";
// import { actions } from "./actions/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "코딩",
        content: "파이썬"
      }
    ]
  },
  // mutations,
  // actions,
  modules: {}
});
