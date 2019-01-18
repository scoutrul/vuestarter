import Vue from 'vue';

import store from './store';
import App from './App.vue';
import router from './router';

import './plugins/vuetify';

new Vue({
    store,
    router,
    ...App,
}).$mount('#app');

Vue.config.productionTip = false;
