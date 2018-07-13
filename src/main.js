// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import component from "./components/component.vue";
import router from "./router";
import ElementUI from "element-ui";
import demoBlock from "./components/demo-block.vue";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(demoBlock);
Vue.component("demo-block", demoBlock);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { component },
  template: "<component/>"
});
