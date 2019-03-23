export default {
	STORE_TEAM: (state, { teamId, team }) => {
		state.teams[teamId] = team;
	},
	STORE_FIXTURE: (state, { fixtureId, fixture }) => {
		state.fixtures[fixtureId] = fixture;
	},
	STORE_LINEUP: (state, { fixtureId, lineups }) => {
		state.lineups[fixtureId] = lineups;
	},
	STORE_LEAGUE: (state, { leagueId, league }) => {
		state.leagues[leagueId] = league;
	},
	STORE_LEAGUES: (state, { leagues, results }) => {
		state.leagues = leagues;
		state.leaguesCount = results;
	},
};
