import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    comments: []
  },
  mutations: {
    getPosts(state, posts) {
      state.posts = posts;
    },
    getComments(state, comments) {
      state.comments = comments;
    },
    addReply(state, newComment) {
      state.comments.push(newComment);
    },
    clearComment(state, id) {
      state.comments = state.comments.filter(item => item.id != id);
    }
  },
  actions: {
    getPosts(context) {
      axios.get("http://localhost:3008/posts").then(res => {
        context.commit("getPosts", res.data);
      });
    },
    getComments({ commit }, id) {
      axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
        // console.log(res.data);
        commit("getComments", res.data);
      });
    },
    addReply({ commit }, payload) {
      axios
        .post("http://localhost:3008/comments", {
          text: payload.val,
          postId: payload.id
        }) //成功了才then,已经拿到了
        .then(res => {
          // console.log(res.data);
          commit("addReply", res.data);
          payload.clearInput();
        });
    },
    clearComment({ commit }, payload) {
      axios.delete(`http://localhost:3008/comments/${payload.id}`).then(res => {
        commit("clearComment", payload.id);
        // console.log(res.data);
      });
    }
  },
  getters: {
    currentComments(state) {
      return [...state.comments].reverse();
    }
  }
});
