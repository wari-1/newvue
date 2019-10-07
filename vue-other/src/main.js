import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.directive("change", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el, binding) {
    // 聚焦元素
    if (binding.value) {
      el.focus();
    }
  }
});
new Vue({
  render: h => h(App)
}).$mount("#app");
