import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import store from './store';
import App from './App.vue';
import router from './router';

import './plugins/vuetify';
import './assets/stylus/index.styl';

const unsync = sync(store, router);

new Vue({
	store,
	router,
	...App,
}).$mount('#app');

Vue.config.productionTip = false;

unsync();
