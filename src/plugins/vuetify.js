import Vue from 'vue';
import Vuetify, { VApp, VFadeTransition } from 'vuetify/lib';

import '../assets/stylus/index.styl';

Vue.use(Vuetify, {
    components: {
        VApp,
        VFadeTransition
    },
    directives: {
        Ripple: import(/* webpackChunkName: "Ripple" */ 'vuetify/lib/directives/ripple'),
    },
});
