<template>
    <v-layout v-if="resolved" class="container">
        <h1>League {{ league.name }}</h1>
        <LeagueInfo :league-id="leagueId" />
        <hr />
        <v-layout>
            <v-flex xs1>`</v-flex>
            <v-flex xs2> Команда</v-flex>
            <v-flex xs1> Очки</v-flex>
            <v-flex xs1> Позиция</v-flex>
        </v-layout>
        <v-layout v-for="(team, i) in table" :key="team.team_id + i">
            <v-flex xs1>
                <TeamLogo
                    :teamId="team.team_id"
                    :size="28"
                    :className="'league__team--logo'"
                />
            </v-flex>
            <v-flex xs2>
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
            <v-flex xs1> {{ team.points }}</v-flex>
            <v-flex xs1> {{ team.rank }}</v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
import api from '@/services/';
import { TeamLogo, LeagueInfo } from '@/components/blocks';

export default {
    components: {
        TeamLogo,
        LeagueInfo,
    },
    data: () => ({
        table: [],
        league: {},
        leagueId: 0,
        resolved: false,
    }),
    created() {
        const leagueId = this.$store.state.route.params.id;
        this.leagueId = leagueId;
        api.getLeague(leagueId).then(() => {
            this.league = this.$store.state.leagues[this.leagueId];
        });
        api.getLeagueTable(leagueId).then(() => {
            this.table = this.$store.state.leagueTables[this.leagueId];
            this.resolved =
                this.$store.state.leagueTables[leagueId] &&
                this.$store.state.leagues[leagueId];
        });
    },
};
</script>
<style>
.league__team--logo {
    transform: translateX(-50%);
    margin-left: 28px;
}
</style>
