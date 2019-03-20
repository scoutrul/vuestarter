<template>
  <div class="container">
    <h1>Live</h1>
    <div>
        <TeamVsTeam v-for="fixture of fixtures" :key="fixture.fixture_id" :fixture="fixture" :hrefStatistic="true"/>
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

import { TeamLogo, TeamVsTeam } from '@/components/blocks';

export default {
  data: () => ({
    fixtures: {},
  }),
  components: {
    TeamLogo,
    TeamVsTeam
  },
  mounted() {},
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
