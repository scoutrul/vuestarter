<template>
    <v-layout column class="league">
        <v-flex>
            <img v-if="league.logo" :src="league.logo" height="80px" />
            <img v-if="league.flag" :src="league.flag" height="80px" />
        </v-flex>
        <h1>{{ league.name }}</h1>
        <v-flex>
            <router-link
                :to="{
                    name: 'league',
                    params: { id: leagueId },
                    path: `/leagues/${leagueId}`,
                }"
                >Таблица</router-link
            >
        </v-flex>
        <v-flex>Сезон: {{ league.season }}</v-flex>
        <v-flex>
            Длительность цикла: {{ league.season_start }} -
            {{ league.season_end }}
        </v-flex>
    </v-layout>
</template>

<script>
import api from '@/services/';

export default {
    props: ['leagueId'],
    data: () => ({
        league: {},
    }),
    created() {
        api.getLeague(this.leagueId).then(() => {
            this.league = this.$store.state.leagues[this.leagueId];
        });
    },
};
</script>
<style>
.league {
    margin-bottom: 10px;
}
</style>
