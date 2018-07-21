// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "@/App";
import router from "@/router";
import {
  Button,
  Icon,
  Row,
  Col,
  Scrollbar,
  ButtonGroup,
  Container
} from "element-ui";
import demoBlock from "./components/demo-block.vue";
import SideNav from "./components/side-nav.vue";

Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(demoBlock);
Vue.use(Container);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Scrollbar);
Vue.component("demo-block", demoBlock);
Vue.component("side-nav", SideNav);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<app/>"
});
