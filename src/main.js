import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

// import SimplestHuePicker from "./components/SimplestHuePicker.vue";
// export default SimplestHuePicker;
