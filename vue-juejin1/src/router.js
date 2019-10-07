import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Pins from "./components/Pins.vue";
import Huati from "./components/Huati.vue";
import Post from "./components/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    component: Home,
    path: "/"
  },
  {
    component: Pins,
    path: "/pins"
  },

  {
    component: Huati,
    path: "/huati"
  },
  {
    component: Post,
    path: "/post/:id"
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
