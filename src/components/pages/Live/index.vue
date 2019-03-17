<template>
  <div class="container">
    <h1>Live</h1>
    <div>
      <v-layout column v-for="fixture of fixtures" :key="fixture.fixture_id" class="goal--event">
        <v-layout class="goal--center goal--round">{{fixture.round}}</v-layout>
        <v-layout>
          <v-flex xs5 class="goal--left goal--name">
            <div class="goal--center">
              {{fixture.homeTeam}}
              <br>
              <TeamLogo :teamId="fixture.homeTeam_id"/>
            </div>
          </v-flex>
          <v-layout class="goal--center" column>
            <v-flex
              xs2
              class="goal--center goal--score"
            >{{fixture.goalsHomeTeam}} - {{fixture.goalsAwayTeam}}</v-flex>
            <v-flex xs2 class="goal--center">{{fixture.elapsed}} мин.</v-flex>
          </v-layout>
          <v-flex xs5 class="goal--center goal--name">
            <div class="goal--center">
              {{fixture.awayTeam}}
              <br>
              <TeamLogo :teamId="fixture.awayTeam_id"/>
            </div>
          </v-flex>
        </v-layout>
        <v-layout class="goal--center goal--round">
          <router-link :to="{ name: 'fixture', params: {id: fixture.fixture_id}}">Статистика матча</router-link>
        </v-layout>
      </v-layout>
    </div>
  </div>
</template>

<script>
import api from '@/services/';
import forEach from 'lodash/forEach';
import map from 'lodash/map';
import assign from 'lodash/assign';
import assignIn from 'lodash/assignIn';
import find from 'lodash/find';
import mapKeys from 'lodash/mapKeys';

import { TeamLogo } from '@/components/blocks';

export default {
  data: () => ({
    fixtures: {},
  }),
  components: {
    TeamLogo
  },
  mounted() {
    api.getApi('fixtures/live').then(res => {
      this.fixtures = res.body.api.fixtures;
    });
  },

  methods: {},
};
</script>
<style>
.goal--event {
  min-height: 100px;
}
.goal--center {
  text-align: center;
  justify-content: center;
}
.goal--left {
  text-align: right;
}
.goal--name {
  font-weight: bold;
  justify-content: center;
  display: flex;
  align-items: center;
}
.goal--round {
  font-size: 80%;
  background-color: #e8eced;
}
.goal--score {
  display: flex;
  font-size: 180%;
  align-items: center;
  margin: 10px 0;
}
.goal--event {
  margin-bottom: 20px;
  background-color: #dfe2e2;
}
</style>
