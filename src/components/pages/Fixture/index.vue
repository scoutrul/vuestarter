<template>
  <div class="container">
    <h1 v-if="homeTeam">{{ homeTeam }} - {{ awayTeam }}</h1>

       <TeamVsTeam v-for="fixture of fixtures" :key="fixture.fixture_id" :fixture="fixture" />

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
    fixture_id: null,
    homeTeam: '',
    awayTeam: '',
  }),
  components: {
    TeamLogo,
    TeamVsTeam
  },
  mounted() {
    
  },
  beforeRouteEnter(to, from, next){
      next(vm => { 
            const fixture_id = vm.$store.state.route.params.id;
            api.getApi(`fixtures/id/${fixture_id}`).then(res => {
            vm.fixtures = res.body.api.fixtures;
            vm.homeTeam = vm.fixtures[fixture_id].homeTeam;
            vm.awayTeam = vm.fixtures[fixture_id].awayTeam;
        });
    })
  }
};
</script>
<style>

</style>
