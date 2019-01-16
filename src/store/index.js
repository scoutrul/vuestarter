import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tests: null
  },

  getters: {
    TESTS: state => {
      return state.tests;
    }
  },

  mutations: {
    SET_TESTS: (state, payload) => {
      state.tests = payload;
    },
    ADD_TEST: (state, payload) => {
      state.tests.push(payload);
    }
  },

  actions: {
    GET_TESTS: async (context, payload) => {
      let { data } = await Axios.get("http://yourwebsite.com/api/todo");
      context.commit("SET_TESTS", data);
      console.log(payload);
    },

    SAVE_TODO: async (context, payload) => {
      let { data } = await Axios.post("http://yourwebsite.com/api/todo");
      context.commit("ADD_TEST", payload);
      console.log(data);
    }
  },

  mounted() {
    this.$store.dispatch("GET_TESTS");
  },

  computed: {
    testsList() {
      return this.$store.getters.TESTS;
    }
  }
});
