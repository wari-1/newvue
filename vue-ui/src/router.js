import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "./components/Posts.vue";

Vue.use(VueRouter);

const routes = [
  {
    component: Posts,
    path: "/"
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
