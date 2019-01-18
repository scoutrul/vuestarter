/* eslint-disable no-unused-vars */

export default {
    GET_TESTS: async (context, payload) => {
        context.commit('SET_TESTS', {});
    },

    SAVE_TESTS: async (context, payload) => {
        const { data } = { data: 'localstorage' };
        context.commit('ADD_TEST', payload);
    },
};
