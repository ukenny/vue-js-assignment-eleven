import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("appendLength", function(value) {
  value += ` (${value.length})`;
  return value;
});

new Vue({
  render: h => h(App)
}).$mount("#app");
