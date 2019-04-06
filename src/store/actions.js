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
	STORE_LIVE_FIXTURES: (context, payload) => {
		context.commit('STORE_LIVE_FIXTURES', payload);
	},
	STORE_TODAY_FIXTURES: (context, payload) => {
		context.commit('STORE_TODAY_FIXTURES', payload);
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
	STORE_STATISTICS: (context, payload) => {
		context.commit('STORE_STATISTICS', payload);
	},
	STORE_LEAGUE_TABLE: (context, payload) => {
		context.commit('STORE_LEAGUE_TABLE', payload);
	},
};
