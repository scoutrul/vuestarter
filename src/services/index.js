import unirest from 'unirest';

const url = 'https://api-football-v1.p.rapidapi.com';
const token = 'c4e412ce52msh6c646cd1fe5ce0ap199220jsn0b49016530ce';

export default {
	getApi(path) {
		return unirest
			.get(`${url}/${path}`)
			.header('X-RapidAPI-Key', token)
			.then(res => res);
	},
};
