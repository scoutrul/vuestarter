import Vue from 'vue';

import Vuetify, { VApp } from 'vuetify/lib';

Vue.use(Vuetify, {
    components: {
        VApp,
    },
    directives: {
        Ripple: import(/* webpackChunkName: "Ripple" */ 'vuetify/lib/directives/ripple'),
    },
});
