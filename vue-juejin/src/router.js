import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Pins from "./components/Pins.vue";
import Huati from "./components/Huati.vue";
import Post from "./components/Post.vue";
// import Popular from "./components/Popular.vue";
// import Newest from "./components/Newest.vue";
// import Hottest from "./components/Hottest.vue";

Vue.use(VueRouter);
const routes = [
  {
    component: Home,
    path: "/",
    children: [
      // {
      //   component: Popular,
      //   path: "/?sort=popular"
      // },
      // {
      //   component: Newest,
      //   path: "/?sort=newest"
      // },
      // {
      //   component: Hottest,
      //   path: "/?sort=hottest"
      // }
    ]
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
