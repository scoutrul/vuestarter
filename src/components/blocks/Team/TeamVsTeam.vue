<template>
  <div>
    <v-layout column class="tvt--event">
      <v-layout class="tvt--header">
        <v-flex class="tvt--center tvt--name" xs5 sm4>{{fixture.homeTeam}}</v-flex>
        <v-layout class="flex tvt--center tvt--title" wrap xs2 sm4>
          <v-flex v-if="isLive" class="tvt--live" xs2>Live!</v-flex>
          <v-spacer v-else></v-spacer>
          <v-flex class="tvt--round" xs6>{{fixture.round}}</v-flex>
          <v-flex class="tvt--elapsed" xs2>({{fixture.elapsed}} мин.)</v-flex>
        </v-layout>
        <v-flex class="tvt--center tvt--name" xs5 sm4>{{fixture.awayTeam}}</v-flex>
      </v-layout>
      <v-layout class="tvt--header">
        <v-flex class="tvt--center" xs5 sm4>
          <TeamLogo :teamId="fixture.homeTeam_id"/>
        </v-flex>
        <v-layout class="flex tvt--center tvt--score" xs2 sm4 column>
          <v-flex class="tvt--center">{{fixture.goalsHomeTeam}} - {{fixture.goalsAwayTeam}}</v-flex>
          <router-link
            :to="{ name: 'fixture', params: {id: fixture.fixture_id}}"
            class="tvt--statistic"
          >Статистика матча</router-link>
        </v-layout>
        <v-flex class="tvt--center" xs5 sm4>
          <TeamLogo :teamId="fixture.awayTeam_id"/>
        </v-flex>
      </v-layout>
    </v-layout>
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
  props: ['fixture', 'hrefStatistic', 'isLive'],

  components: {
    TeamLogo,
  },

  methods: {},
};
</script>
<style>
.tvt--event {
  min-height: 100px;
}
.tvt--center {
  text-align: center;
  justify-content: center;
  align-items: center;
}
.tvt--left {
  text-align: right;
}
.tvt--title {
}
.tvt--name {
  font-weight: bold;
  justify-content: center;
  display: flex;
  align-items: center;
}
.tvt--round {
  font-size: 80%;
  padding: 0 10px;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
.tvt--elapsed {
  white-space: nowrap;
}
.tvt--score {
  font-size: 180%;
  align-items: center;
  margin: 10px 0;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
.tvt--statistic {
  font-size: 11px;
}
.tvt--event {
  margin-bottom: 20px;
  background-color: #dfe2e2;
  padding: 10px;
}

.tvt--live {
  color: #00f;
  font-style: italic;
}
</style>
