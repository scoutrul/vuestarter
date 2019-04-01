<template>
    <v-layout v-if="isResolved" class="container">
        <h1>League {{ league.name }}</h1>
        <LeagueInfo :league-id="leagueId" />
        <hr />
        <v-layout>
            <v-flex> Команда </v-flex>
            <v-flex> Очки </v-flex>
            <v-flex> Позиция </v-flex>
        </v-layout>
        <v-layout v-for="team in table" :key="team.team_id">
            <v-flex>
                <router-link
                    :to="{
                        name: 'team',
                        params: { id: team.team_id },
                        path: `/team/${team.team_id}`,
                    }"
                >
                    {{ team.teamName }}
                </router-link>
            </v-flex>
            <v-flex> {{ team.points }} </v-flex>
            <v-flex> {{ team.rank }} </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
import api from '@/services/';
import { TeamLogo, LeagueInfo } from '@/components/blocks';
import values from 'lodash/values';

export default {
    components: {
        TeamLogo,
        LeagueInfo,
    },
    data: () => ({
        table: [],
        league: {},
        leagueId: 0,
    }),
    created() {
        const leagueId = this.$store.state.route.params.id;
        this.leagueId = leagueId;
        api.getLeague(leagueId).then(() => {
            this.league = this.$store.state.leagues[this.leagueId];
        });
        api.getLeagueTable(leagueId).then(() => {
            this.table = this.$store.state.leagueTables[this.leagueId];
        });
    },
    mounted() {},
    methods: {
        isResolved() {
            return (
                $store.state.leagueTables[leagueId] &&
                $store.state.leagues[leagueId]
            );
        },
    },
};
</script>
<style></style>
