// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "@/App";
import router from "@/router";
import ElementUI from "element-ui";
import demoBlock from "./components/demo-block.vue";
import SideNav from "./components/side-nav.vue";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(demoBlock);
Vue.component("demo-block", demoBlock);
Vue.component("side-nav", SideNav);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<app/>"
});
