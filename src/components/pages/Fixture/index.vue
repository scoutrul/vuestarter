<template>
  <div class="container">
    <h1>Live</h1>
    <div v-if="api.results > 0">
      <v-layout column v-for="fixture of api.fixtures" :key="fixture.fixture_id" class="goal--event">
        <v-layout class="goal--center goal--round">{{fixture.round}}</v-layout>
        <v-layout>
          <v-flex xs5 class="goal--left goal--name">
            <div class="goal--center">
              {{fixture.homeTeam}}
              <br>
              <img :src="getLogoSrc(fixture.homeTeam_id)" alt height="80px">
            </div>
          </v-flex>
          <v-layout class="goal--center" column>
            <v-flex
              xs2
              class="goal--center goal--score"
            >{{fixture.goalsHomeTeam}} - {{fixture.goalsAwayTeam}}</v-flex>
            <v-flex xs2 class="goal--center">{{fixture.elapsed}} мин.</v-flex>
          </v-layout>
          <v-flex xs5 class="goal--center goal--name">
            <div class="goal--center">
              {{fixture.awayTeam}}
              <br>
              <img :src="getLogoSrc(fixture.awayTeam_id)" alt height="80px">
            </div>
          </v-flex>
        </v-layout>
        <v-layout class="goal--center goal--round">
            <router-link :to="{ name: 'fixture', params: {id: fixture.fixture_id}}">Статистика матча</router-link>
        </v-layout>
      </v-layout>
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
      api: {
        fixtures: {
            results: 0,
        },
    },
    teams: {},
    logos: [],
  }),
  beforeMount() {
    api
      .getApi('fixtures/live')
      .then(res => {
        this.api = { ...this.api, ...res.body.api};
        this.getTeamsLogos()
      })
  },
  methods: {
      getLogoSrc() {
        return id => {
            if(this.logoIsLoaded) {
                
                try {
                    // const findLogo = find(this.logos, logo => logo.team_id == id);
                return find(this.logos, logo => logo.team_id == id).logo;
            }
                catch(e){
                    console.log(e);
                    return '';
                }
            }
        }
    },
    getTeamsLogos() {
      this.logoIsLoaded = false;
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
        .then(res => {
            this.logoIsLoaded = true;
            console.log('done')
        })
        .catch(reason => {
          this.logoIsLoaded = true;  
          console.log(reason);
        });
    },
  },
};
</script>
<style>
.goal--event {
  min-height: 100px;
}
.goal--center {
  text-align: center;
  justify-content: center;
}
.goal--left {
  text-align: right;
}
.goal--name {
  font-weight: bold;
  justify-content: center;
  display: flex;
  align-items: center;
}
.goal--round {
  font-size: 80%;
  background-color: #e8eced;
}
.goal--score {
  display: flex;
  font-size: 180%;
  align-items: center;
  margin: 10px 0;
}
.goal--event {
    margin-bottom: 20px;
    background-color: #dfe2e2;
}
</style>
