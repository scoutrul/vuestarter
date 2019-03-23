import unirest from 'unirest';
import store from '../store';

const url = 'https://api-football-v1.p.rapidapi.com';
const token = 'c4e412ce52msh6c646cd1fe5ce0ap199220jsn0b49016530ce';

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
				console.log('api results', res);
				const team = res.body.api.teams[teamId];
				store.commit('STORE_TEAM', {
					teamId,
					team,
				});
			});
	},
};
