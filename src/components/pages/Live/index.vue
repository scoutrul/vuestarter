<template>
  <div class="container">
    <h1>Live</h1>
    <v-layout row wrap>
        <TeamVsTeam v-for="fixture of orderedFixtures" :key="fixture.fixture_id" :fixture="fixture" :hrefStatistic="true" :isLive="true"/>
    </v-layout>
    <v-layout fill-height></v-layout>
  </div>
</template>

<script>
import api from '@/services/';
import { TeamLogo, TeamVsTeam } from '@/components/blocks';
import forEach from 'lodash/forEach';
import sortBy from 'lodash/sortBy';
export default {
  data: () => ({
    fixtures: {},
  }),
  components: {
    TeamLogo,
    TeamVsTeam
  },
  computed: {
      orderedFixtures() {
          return sortBy(this.fixtures, 'elapsed')
      }
  },
  beforeRouteLeave(to, from, next) {
      this.$store.state.fixtures = { ...this.$store.state.fixtures, ...this.fixtures }
      next();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      api.getApi('fixtures/live').then(res => {
        vm.fixtures = res.body.api.fixtures;
      });
    });
  },
  methods: {},
};
</script>
<style>

</style>
