import Vue from "vue";
import VueRouter from 'vue-router'

import "./plugins/vuetify";
import App from "./App.vue";
import { store } from "./store";

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
}).$mount("#app");
