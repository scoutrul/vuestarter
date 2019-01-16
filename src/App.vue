<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import Axios from 'axios';
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    }
  },

  actions: {
    SET_NAME: async (context, name) => {
      let { data } = await Axios.post("http://myapiendpoint.com/api/name", {
        name: name
      });

      if (data.status == 200) {
        context.commit("SET_NAME", name);
      }
    }
  },

  // beforeRouteEnter(to, from, next) {
  // },
  // beforeRouteUpdate(to, from, next) {
  // }
};
</script>
