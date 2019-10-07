import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    addNum(state) {
      state.num++;
    },
    subNum(state) {
      if (state.num > 0) {
        state.num--;
      } else {
        state.num = 0;
      }
    },
    toHundred(state, Payload) {
      state.num = Payload.Nnum + Payload.newNum;
    }
  }
});

export default store;
