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
	STORE_LINEUP: (context, payload) => {
		context.commit('STORE_LINEUP', payload);
	},
	STORE_LEAGUE: (context, payload) => {
		context.commit('STORE_LEAGUE', payload);
	},
	STORE_EVENTS: (context, payload) => {
		context.commit('STORE_EVENTS', payload);
	},
};
