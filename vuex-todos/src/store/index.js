import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import type from "./modules/type";
import logger from "vuex/dist/logger";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    val: "",
    text: "abc"
  },
  mutations: {
    changeVal(state, val) {
      state.val = val;
    },
    clearInput(state) {
      state.val = "";
    },
    changeText(state, newText) {
      state.text = newText;
    }
  },
  modules: {
    todos,
    type
  },
  plugins: [logger()]
});
