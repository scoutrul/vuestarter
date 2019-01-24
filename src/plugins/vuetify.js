import Vue from 'vue';
import Vuetify, { VApp, VFadeTransition, VBtn } from 'vuetify/lib';

Vue.use(Vuetify, {
	components: {
		VApp,
		VFadeTransition,
		VBtn,
	},
	directives: {
		Ripple: import(/* webpackChunkName: "Ripple" */ 'vuetify/lib/directives/ripple'),
	},
});
