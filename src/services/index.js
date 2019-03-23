import unirest from 'unirest';
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
	getLeagues(path = 'leagues') {
		if (store.state.leaguesCount) {
			return new Promise((resolve, reject) => resolve());
		}
		return unirest
			.get(`${url}/${path}`)
			.header('X-RapidAPI-Key', token)
			.then(res => {
				console.log('api results', res);
				const { leagues, results } = res.body.api;
				store.commit('STORE_LEAGUES', { leagues, results });
			});
	},
	getTeam(teamId) {
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
};
