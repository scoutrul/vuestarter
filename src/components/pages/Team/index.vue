<template>
  <div class="container">
    <h1>{{team.name}}</h1>
    <TeamLogo :teamId="$store.state.route.params.id" height="220" width="400"/>
  </div>
</template>

<script>
import api from '@/services/';
import { TeamLogo } from '@/components/blocks';

export default {
  data: () => ({
    team: {}
  }),
  components: {
    TeamLogo,
  },
  created() {
    const teamId = this.$store.state.route.params.id;
    api.getTeam(teamId).then(() => {
        this.team = this.$store.state.teams[teamId];
    });
  },
  mounted() {},
};
</script>
<style>
</style>
