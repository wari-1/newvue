import axios from "axios";
const type = {
  state: {
    type: "all"
  },
  mutations: {
    getType(state, type) {
      state.type = type;
    }
  },
  actions: {
    getType({ commit }) {
      axios.get("http://localhost:3009/type").then(res => {
        commit("getType", res.data.type);
      });
    },
    changeTag(context, payload) {
      axios
        .patch("http://localhost:3009/type", {
          type: payload.type
        })
        .then(res => {
          context.commit("getType", res.data.type);
        });
    }
  },
  getters: {
    showTodos(state, getters, rootState) {
      if (rootState.todos.todos.length) {
        if (state.type === "all") {
          return rootState.todos.todos;
        } else if (state.type === "active") {
          return rootState.todos.todos.filter(item => !item.isCompleted);
        } else {
          return rootState.todos.todos.filter(item => item.isCompleted);
        }
      } else {
        return [];
      }
    }
  }
};
export default type;
