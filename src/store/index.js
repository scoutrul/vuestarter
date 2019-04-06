import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		teams: {},
		teamsCount: 0,
		leagues: {},
		leaguesCount: 0,
		fixtures: {},
		liveFixtures: {},
		todayFixtures: {},
		lineups: {},
		events: {},
		statistics: {},
		leagueTables: {},
	},
	getters,
	mutations,
	actions,
});

export default store;
