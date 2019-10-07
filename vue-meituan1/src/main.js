import Vue from "vue";
import "./cube-ui";
import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
