import Vue from 'vue';
import Vuetify, { VApp, VFadeTransition, VBtn, VImg } from 'vuetify/lib';

Vue.use(Vuetify, {
	components: {
		VApp,
		VFadeTransition,
		VBtn,
		VImg,
	},
	directives: {
		Ripple: import(/* webpackChunkName: "Ripple" */ 'vuetify/lib/directives/ripple'),
	},
});
