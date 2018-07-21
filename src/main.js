// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";
import App from "@/App";
import router from "@/router";

import {
  Button,
  Icon,
  Row,
  Col,
  Scrollbar,
  ButtonGroup,
  Dialog,
  Form,
  FormItem,
  Input,
  Select,
  Upload,
  Option,
  Loading,
  Pagination,
  MessageBox,
  Message,
  Table,
  TableColumn,
  Container
} from "element-ui";
import demoBlock from "./components/demo-block.vue";
import SideNav from "./components/side-nav.vue";
import ElFormRenderer from "el-form-renderer";

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

//el-data-table
Vue.prototype.$axios = axios;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.component("el-form-renderer", ElFormRenderer);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Upload);
Vue.use(Select);
Vue.use(Option);
Vue.use(Loading.directive);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<app/>"
});
