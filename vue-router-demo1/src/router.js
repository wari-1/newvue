import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Pins from "./components/Pins.vue";
import Topics from "./components/Topics.vue";

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
    component: Topics,
    path: "/topics"
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;
