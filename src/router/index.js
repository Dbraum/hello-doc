import Vue from "vue";
import Router from "vue-router";
import Component from "@/pages/component.vue";
import navConfig from "./nav.config";

const load = function(path) {
  return r =>
    require.ensure([], () => r(require(`@/pages/${path}.vue`)), "zh-CN");
};

const loadDocs = function(path) {
  return r =>
    require.ensure([], () => r(require(`@/docs/${path}.md`)), "zh-CN");
};

Vue.use(Router);

const registerRoute = navConfig => {
  let route = [];
  let navs = navConfig;
  let lang = "";
  route.push({
    path: `/component`,
    redirect: `/component/installation`,
    component: load("component"),
    children: []
  });
  navs.forEach(nav => {
    if (nav.href) return;
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav, lang);
        });
      });
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav, lang);
      });
    } else {
      addRoute(nav, lang);
    }
  });
  function addRoute(page, lang) {
    const component =
      page.path === "/changelog"
        ? load("changelog")
        : loadDocs(page.path.slice(1));

    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: "component-" + lang + (page.title || page.name),
      component: component.default || component
    };

    route[0].children.push(child);
  }

  return route;
};
const routes = registerRoute(navConfig);
console.log("​---");
console.log("route", routes);
console.log("​---");
export default new Router({
  routes
});
