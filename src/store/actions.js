import { get } from 'karin';

export default {
    GET_TESTS: async (context, payload) => {
        context.commit('SET_TESTS', {});
    },

    SAVE_TESTS: async (context, payload) => {
        let { data } = { data: 'localstorage' };
        context.commit('ADD_TEST', payload);
    },
};
