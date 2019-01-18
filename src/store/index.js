import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tests: null,
    },

    getters,
    mutations,
    actions,

    created() {
        // this.fetchTests();
    },

    computed: {
        fetchTests() {
            this.$store.dispatch('GET_TESTS');
        },

        testsList() {
            return this.$store.getters.TESTS;
        },
    },
});
