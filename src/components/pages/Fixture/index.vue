<template>
  <div class="container" v-if="$store.state.fixtures[fixtureId]">
    <v-layout column>
      <v-flex>
        <img v-if="league.logo" :src="league.logo" height="80px">
        <img v-if="league.flag" :src="league.flag" height="80px">
      </v-flex>
      <v-flex>{{league.name}}</v-flex>
      <v-flex>Сезон: {{league.season}}</v-flex>
      <v-flex>
        Длительность цикла: {{league.season_start}} -
        {{league.season_end}}
      </v-flex>
    </v-layout>
    <h1>{{ $store.state.fixtures[fixtureId].homeTeam }} - {{ $store.state.fixtures[fixtureId].awayTeam }}</h1>
    <TeamVsTeam :fixture="$store.state.fixtures[fixtureId]"/>
    <hr />
    <v-layout>
        <Events :events="events" />
    </v-layout>
    <hr />
    <v-layout>
        <Statistics :statistics="statistics" />
    </v-layout>
    <hr />
    <v-layout v-if="homeLine">
      <LineUp :team="homeLine"/>
      <LineUp :team="awayLine"/>
    </v-layout>
    <v-layout fill-height></v-layout>
  </div>
</template>

<script>
import api from '@/services/';
import { TeamLogo, TeamVsTeam, LineUp, Events, Statistics } from '@/components/blocks';
import values from 'lodash/values';

export default {
  data: () => ({
    fixtureId: null,
    lineups: {},
    homeLine: null,
    awayLine: {},
    league: {},
    leagueId: 0,
    events: [],
    statistics: {},
  }),
  components: {
    TeamLogo,
    TeamVsTeam,
    LineUp,
    Events,
    Statistics
  },
  created() {
    const fixtureId = this.$store.state.route.params.id;
    api.getFixture(fixtureId).then(() => {
      this.fixtureId = fixtureId;
      api.getLineUp(fixtureId).then(() => {
        this.lineups = this.$store.state.lineups[fixtureId];
        this.homeLine = this.lineups[Object.keys(this.lineups)[0]];
        this.awayLine = this.lineups[Object.keys(this.lineups)[1]];
      });
      api.getEvents(fixtureId).then(() => {
          this.events = this.$store.state.events[fixtureId];
      });
      api.getStatistics(fixtureId).then(() => {
          this.statistics = this.$store.state.statistics[fixtureId];
      });
    });
    if (this.$store.state.fixtures[fixtureId]) {
      api
        .getLeague(this.$store.state.fixtures[fixtureId].league_id)
        .then(() => {
          this.leagueId = this.$store.state.fixtures[fixtureId].league_id;
          this.league = this.$store.state.leagues[this.leagueId];
        });
    }
  },
  mounted() {},
};
</script>
<style>
</style>
