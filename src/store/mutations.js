export default {
    SET_TESTS: (state, payload) => {
        state.tests = payload;
    },
    ADD_TEST: (state, payload) => {
        state.tests.push(payload);
    },
};
