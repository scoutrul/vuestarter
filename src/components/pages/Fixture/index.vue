<template>
  <div class="container" v-if="$store.state.fixtures[fixture_mainId]">
    <h1>{{ $store.state.fixtures[fixture_mainId].homeTeam }} - {{ $store.state.fixtures[fixture_mainId].awayTeam }}</h1>
    <TeamVsTeam :fixture="$store.state.fixtures[fixture_mainId]" />
    <v-layout v-if="homeLine">
        <lineUp :team="homeLine" />
        <lineUp :team="awayLine" />
    </v-layout>
  </div>
</template>

<script>
import api from '@/services/';
import { TeamLogo, TeamVsTeam, lineUp } from '@/components/blocks';
import values from 'lodash/values';

export default {
  data: () => ({
    fixture_mainId: null,
    lineups: {},
    homeLine: null,
    awayLine: {}
  }),
  components: {
    TeamLogo,
    TeamVsTeam,
    lineUp
  },
  mounted() {
    const fixture_mainId = this.$store.state.route.params.id;
    api.getFixture(fixture_mainId).then(() => {
        this.fixture_mainId = fixture_mainId;
        api.getLineUp(fixture_mainId).then(() => {
            this.lineups = this.$store.state.lineups[fixture_mainId];
            this.homeLine = this.lineups[Object.keys(this.lineups)[0]];
            this.awayLine = this.lineups[Object.keys(this.lineups)[1]];
        });
    });
  },

};
</script>
<style>

</style>
