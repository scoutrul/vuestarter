<template>
  <div class="container">
    <h1>Live</h1>
    <div>
      <div v-for="fixture of fixtures" :key="fixture.fixture_id">
        <div>{{fixture.goalsHomeTeam}} - {{fixture.goalsAwayTeam}}</div>
        <div>{{fixture.homeTeam}} -vs- {{fixture.awayTeam}}</div>
        <img :src="getLogoSrc(fixture.homeTeam_id).logo && getLogoSrc(fixture.homeTeam_id).logo" alt="" height="80px"/>
        <div>{{fixture.round}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import unirest from 'unirest';
import api from '@/services/';
import forEach from 'lodash/forEach';
import assign from 'lodash/assign';
import find from 'lodash/find';
import mapKeys from 'lodash/mapKeys';
import concat from 'lodash/concat';

export default {
  data: () => ({
    fixtures: {},
    teams: {},
    logos: [],
  }),
  mounted() {
    api
      .getApi('fixtures/live')
      .then(res => {
        this.fixtures = res.body.api.fixtures;
      })
      .then(this.getTeamsLogos);
  },
  methods: {
    getLogoSrc(id) {
      let logo = find(this.logos, logo => logo.team_id == id);
      console.log(id);
      console.log(logo);
      return logo || "";
    },
    getTeamsLogos() {
      let promises = [];
      forEach(this.fixtures, (fixture, key) => {
        promises.push(
          api.getTeamLogo(fixture.homeTeam_id).then(res => {
            this.logos = concat(
              this.logos,
              res.body.api.teams[fixture.homeTeam_id],
            );
          }),
        );
        promises.push(
          api.getTeamLogo(fixture.awayTeam_id).then(res => {
            this.logos = concat(
              this.logos,
              res.body.api.teams[fixture.awayTeam_id],
            );
          }),
        );
      });
      Promise.all(promises)
        .then(res => console.log('done'))
        .catch(reason => {
          console.log(reason);
        });
    },
  },
};
</script>
<style></style>
