export default {
	STORE_TEAM: (state, { teamId, team }) => {
		state.teams[teamId] = team;
	},
	STORE_LEAGUES: (state, { leagues, results }) => {
		state.leagues = leagues;
		state.leaguesCount = results;
	},
};
