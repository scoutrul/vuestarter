<template>
  <div>
    <v-layout column class="tvt--event">
      <v-layout>
        <v-flex v-if="countryFlag">
          <img
            :src="countryFlag"
            height="14px"
            :alt="$store.state.leagues[this.fixture.league_id].country"
          >
        </v-flex>
        <v-flex v-if="isLive" class="tvt--live">Live!</v-flex>
      </v-layout>

      <v-layout class="tvt--header">
        <v-flex class="tvt--center tvt--name" xs5 sm4>{{fixture.homeTeam}}</v-flex>
        <v-layout class="flex tvt--center tvt--title" wrap xs2 sm4>
          <v-flex class="tvt--round" xs6>
            <span
              v-if="!countryFlag"
            >({{$store.state.leagues[this.fixture.league_id] && $store.state.leagues[this.fixture.league_id].country}})</span>
            {{fixture.round}}
          </v-flex>
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
import { TeamLogo } from '@/components/blocks';

export default {
  props: ['fixture', 'hrefStatistic', 'isLive'],
  data: () => ({
    countryFlag: null,
  }),
  components: {
    TeamLogo,
  },
  beforeMount() {
    api.getLeague(this.fixture.league_id).then(() => {
        this.countryFlag = this.$store.state.leagues[this.fixture.league_id].flag;
    });
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
  display: flex;
  align-items: center;
  justify-content: center;
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
