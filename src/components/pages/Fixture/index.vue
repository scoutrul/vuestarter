<template>
  <div class="container" v-if="$store.state.fixtures[fixture_mainId]">
    <h1 v-if="homeTeam">{{ homeTeam }} - {{ awayTeam }}</h1>
    <TeamVsTeam :fixture="$store.state.fixtures[fixture_mainId]" />
  </div>
</template>

<script>
import api from '@/services/';
import { TeamLogo, TeamVsTeam } from '@/components/blocks';

export default {
  data: () => ({
    fixtures: {},
    fixture_mainId: null,
    homeTeam: '',
    awayTeam: '',
  }),
  components: {
    TeamLogo,
    TeamVsTeam
  },
  mounted() {
    const fixture_mainId = this.$store.state.route.params.id;
    api.getFixture(fixture_mainId).then(() => {
        this.fixture_mainId = fixture_mainId;
    });
  },

};
</script>
<style>

</style>
