import { get } from 'karin';

const api_url = 'http://api/';
const getTests = get`${api_url}`;

export default {
  GET_TESTS: async (context, payload) => {
    let { data } = await getTests();
    context.commit('SET_TESTS', data);
    console.log(payload);
  },

  SAVE_TESTS: async (context, payload) => {
    let { data } = { data: 'localstorage' };
    context.commit('ADD_TEST', payload);
    console.log(data);
  }
};
