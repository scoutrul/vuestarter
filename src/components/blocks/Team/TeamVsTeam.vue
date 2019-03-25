<template>
  <v-layout column class="tvt--event flex" xs12 sm4 md3 lg3 xl2>
    <v-layout justify-center align-center>
      <v-flex v-if="countryFlag" class="tvt--nogrow">
        <img
          :src="countryFlag"
          height="14px"
          :alt="$store.state.leagues[this.fixture.league_id].country"
        >
      </v-flex>
      <v-flex class="tvt--center tvt--title tvt--round tvt--nogrow">{{fixture.round}}</v-flex>
      <v-flex v-if="isLive" class="tvt--live tvt--nogrow">Live!</v-flex>
    </v-layout>

    <v-layout class="tvt--header">
      <v-flex class="tvt--center tvt--name" xs4>{{fixture.homeTeam}}</v-flex>
      <v-flex class="tvt--center tvt--elapsed" xs4>({{fixture.elapsed}} мин.)</v-flex>
      <v-flex class="tvt--center tvt--name" xs4>{{fixture.awayTeam}}</v-flex>
    </v-layout>
    <v-layout class="tvt--header">
      <v-flex class="tvt--center tvt--logo" xs4>
        <TeamLogo :teamId="fixture.homeTeam_id"/>
      </v-flex>
      <v-layout class="flex tvt--center" xs4 sm4 column>
        <v-flex class="tvt--center tvt--score">{{fixture.goalsHomeTeam}} - {{fixture.goalsAwayTeam}}</v-flex>
      </v-layout>
      <v-flex class="tvt--center tvt--logo" xs4>
        <TeamLogo :teamId="fixture.awayTeam_id"/>
      </v-flex>
    </v-layout>
    <v-layout class="tvt--statistic" v-if="hrefStatistic">
      <router-link
        :to="{ name: 'fixture', params: {id: fixture.fixture_id}}"
        class="tvt--statistic__link"
      >Статистика матча</router-link>
    </v-layout>
  </v-layout>
</template>

<script>
import api from '@/services/';
import { TeamLogo } from '@/components/blocks';

export default {
  props: ['fixture', 'hrefStatistic', 'isLive'],
  data: () => ({
    countryFlag: null,
  }),
  components: {
    TeamLogo,
  },
  beforeMount() {
    api.getLeague(this.fixture.league_id).then(() => {
      this.countryFlag = this.$store.state.leagues[this.fixture.league_id].flag;
    });
  },
  methods: {},
};
</script>
<style lang="scss">
.tvt--event {
  outline: #fff solid 1px;
  background-color: #dfe2e2;
  padding: 20px;
}
.tvt--logo {
  display: flex;
  justify-content: center;
  align-content: center;
  img {
    max-width: 100%;
    max-height: 60px;
  }
}
.tvt--nogrow {
  flex: 0 0 auto;
}
.tvt--center {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.tvt--left {
  text-align: right;
}
.tvt--title {
}
.tvt--name {
  font-weight: bold;
  justify-content: center;
  display: flex;
  align-items: center;
}
.tvt--round {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80%;
  padding: 0 5px;
  /* white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important; */
}
.tvt--elapsed {
  white-space: nowrap;
}
.tvt--score {
  font-size: 180%;
  align-items: center;
  margin: 10px 0;
}
.tvt--statistic {
  display: flex;
  justify-content: center;
  & .tvt--statistic__link {
    font-size: 11px;
  }
}

.tvt--live {
  color: #00f;
  font-style: italic;
  padding: 0 5px;
}
</style>
