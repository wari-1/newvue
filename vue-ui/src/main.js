import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/element-variables.scss";
import { Button, Carousel, CarouselItem, Pagination } from "element-ui";
Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Pagination);
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
