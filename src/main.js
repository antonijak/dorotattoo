import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.$isTrue = (value) => {
  return !(
    value === null ||
    value === undefined ||
    value === "" ||
    value === false
  );
};


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
