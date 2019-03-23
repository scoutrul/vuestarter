/* eslint-disable no-unused-vars */

export default {
	STORE_TEAM: (context, payload) => {
		context.commit('STORE_TEAM', payload);
	},
	STORE_LEAGUES: (context, payload) => {
		context.commit('STORE_LEAGUES', payload);
	},
	STORE_FIXTURE: (context, payload) => {
		context.commit('STORE_FIXTURE', payload);
	},
};
