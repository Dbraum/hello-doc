import Vue from "vue";
import Router from "vue-router";
import Component from "@/pages/component.vue";
import navConfig from "./nav.config";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/button",
      name: "Component",
      component: Component
    }
  ]
});
