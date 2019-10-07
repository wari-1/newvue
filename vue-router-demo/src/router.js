import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Pins from "./components/Pins.vue";
import Topics from "./components/Topics.vue";
import Recommended from "./components/Recommended.vue";
import FrontEnd from "./components/FrontEnd.vue";
import BackEnd from "./components/BackEnd.vue";
import Post from "./components/Post.vue";
import Error from "./components/Error.vue";
Vue.use(VueRouter);

const routes = [
  {
    component: Home,
    path: "/",
    children: [
      {
        path: "",
        component: Recommended
      },
      {
        path: "welcome/recommended",
        component: Recommended
      },
      {
        path: "welcome/frontend",
        component: FrontEnd
      },
      {
        path: "welcome/backend",
        component: BackEnd
      }
    ]
  },
  {
    component: Pins,
    path: "/pins"
  },
  {
    path: "/topics",
    redirect: "/newtopics"
  },
  {
    component: Topics,
    path: "/newtopics"
  },
  {
    component: Post,
    path: "/post/:id"
  },
  {
    component: Error,
    path: "*"
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;
