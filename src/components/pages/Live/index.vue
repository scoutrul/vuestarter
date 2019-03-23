<template>
  <div class="container">
    <h1>Live</h1>
    <div>
        <TeamVsTeam v-for="fixture of fixtures" :key="fixture.fixture_id" :fixture="fixture" :hrefStatistic="true" :isLive="true"/>
    </div>
  </div>
</template>

<script>
import api from '@/services/';
import { TeamLogo, TeamVsTeam } from '@/components/blocks';
import forEach from 'lodash/forEach';
export default {
  data: () => ({
    fixtures: {},
  }),
  components: {
    TeamLogo,
    TeamVsTeam
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
