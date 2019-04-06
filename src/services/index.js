import get from 'lodash/get';
import unirest from 'unirest';
import each from 'lodash/each';
import store from '../store';

const url = 'https://api-football-v1.p.rapidapi.com';
const token = 'fe81e0a8ecmsh0ef111a4d181d40p176c6ejsn1f163ba39e44';

export default {
	getApi(path) {
		return unirest
			.get(`${url}/${path}`)
			.header('X-RapidAPI-Key', token)
			.then(res => res);
	},
	getLiveFixtures() {
		return this.getApi('fixtures/live').then(res => {
			const { fixtures } = res.body.api;
			store.commit('STORE_LIVE_FIXTURES', { fixtures });
		});
	},
	getTodayFixtures() {
		const date = '2019-04-07';
		return this.getApi(`fixtures/date/${date}`).then(res => {
			const { fixtures } = res.body.api;
			store.commit('STORE_TODAY_FIXTURES', { fixtures });
		});;
	},
	apiService(entityId, path) {
		if (!entityId) {
			return new Promise((resolve, reject) => resolve());
		}
		if (store.state.leagues[entityId]) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/${path}/${entityId}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const entities = 'leagues';
				const league = get(`res.body.api.${entities}[${entityId}]`, {});
				store.commit('STORE_LEAGUE', {
					entityId,
					league,
				});
			});
	},
	getTeam(teamId) {
		if (!teamId) {
			return new Promise((resolve, reject) => resolve());
		}
		if (store.state.teams[teamId]) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/teams/team/${teamId}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const team = res.body.api.teams[teamId];
				store.commit('STORE_TEAM', {
					teamId,
					team,
				});
			});
	},
	getFixture(fixtureId) {
		if (!fixtureId) {
			return new Promise((resolve, reject) => resolve());
		}
		if (store.state.fixtures[fixtureId]) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/fixtures/id/${fixtureId}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const fixture = res.body.api.fixtures[fixtureId];
				store.commit('STORE_FIXTURE', {
					fixtureId,
					fixture,
				});
			});
	},
	getLineUp(fixtureId) {
		if (!fixtureId) {
			return new Promise((resolve, reject) => resolve());
		}
		if (store.state.lineups[fixtureId]) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/lineups/${fixtureId}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const lineups = res.body.api.lineUps;
				store.commit('STORE_LINEUP', { fixtureId, lineups });
			});
	},
	getEvents(fixtureId) {
		if (!fixtureId) {
			return new Promise((resolve, reject) => resolve());
		}
		if (store.state.events[fixtureId]) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/events/${fixtureId}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const events = res.body.api.events;
				store.commit('STORE_EVENTS', { fixtureId, events });
			});
	},
	getStatistics(fixtureId) {
		if (!fixtureId) {
			return new Promise((resolve, reject) => resolve());
		}
		if (store.state.events[fixtureId]) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/statistics/fixture/${fixtureId}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const statistics = res.body.api.statistics;
				store.commit('STORE_STATISTICS', { fixtureId, statistics });
			});
	},
	getLeagues(path = 'leagues') {
		if (store.state.leaguesCount) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/${path}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const { leagues, results } = res.body.api;
				store.commit('STORE_LEAGUES', { leagues, results });
			});
	},
	getLeague(leagueId) {
		if (!leagueId) {
			return new Promise((resolve, reject) => resolve());
		}
		if (store.state.leagues[leagueId]) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/leagues/league/${leagueId}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const league = res.body.api.leagues[leagueId];
				store.commit('STORE_LEAGUE', {
					leagueId,
					league,
				});
			});
	},
	getLeagueTable(leagueId) {
		if (!leagueId) {
			return new Promise((resolve, reject) => resolve());
		}
		if (store.state.leagueTables[leagueId]) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/leagueTable/${leagueId}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const table = res.body.api.standings[0];
				store.commit('STORE_LEAGUE_TABLE', { leagueId, table });
			});
	},
	getH2H(teamId_1, teamId_2) {
		if (!teamId_1 || !teamId_2) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/fixtures/h2h/${teamId_1}/${teamId_2}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				const fixtures = res.body.api.fixtures;
				return each(fixtures, fixture => {
					const fixtureId = fixture.fixture_id;
					store.commit('STORE_FIXTURE', {
						fixtureId,
						fixture,
					});
					return fixture;
				});
			});
	},
};
