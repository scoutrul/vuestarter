import Vue from 'vue';

import { store } from './store';
import './plugins/vuetify';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app');
