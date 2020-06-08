import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { MdIcon } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueRouter);
Vue.use(MdIcon);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
