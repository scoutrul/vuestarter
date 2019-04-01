<template>
    <div class="container" v-if="resolved">
        <LeagueInfo :leagueId="$store.state.fixtures[fixtureId].league_id"/>
        <h1>{{ $store.state.fixtures[fixtureId].homeTeam }} - {{ $store.state.fixtures[fixtureId].awayTeam }}</h1>
        <TeamVsTeam :fixture="$store.state.fixtures[fixtureId]" :teams="true"/>
        <hr/>
        <v-layout v-if="events">
            <Events :events="events"/>
        </v-layout>
        <hr/>
        <v-layout v-if="statistics">
            <Statistics :statistics="statistics"/>
        </v-layout>
        <hr/>
        <v-layout v-if="homeLine">
            <LineUp :team="homeLine"/>
            <LineUp :team="awayLine"/>
        </v-layout>
        <v-layout fill-height></v-layout>
    </div>
</template>

<script>
    import api from '@/services/';
    import { TeamLogo, TeamVsTeam, LineUp, Events, Statistics, LeagueInfo } from '@/components/blocks';

    export default {
        data: () => ({
            fixtureId: null,
            lineups: {},
            homeLine: null,
            awayLine: {},
            league: {},
            leagueId: null,
            events: [],
            statistics: {},
            resolved: false,
        }),
        components: {
            TeamLogo,
            TeamVsTeam,
            LineUp,
            Events,
            Statistics,
            LeagueInfo,
        },
        created() {
            const fixtureId = this.$store.state.route.params.id;
            this.fixtureId = fixtureId;
            api.getFixture(fixtureId).then(() => {
                api.getLineUp(fixtureId).then(() => {
                    this.lineups = this.$store.state.lineups[fixtureId];
                    this.homeLine = this.lineups[Object.keys(this.lineups)[0]];
                    this.awayLine = this.lineups[Object.keys(this.lineups)[1]];
                });
                api.getEvents(fixtureId).then(() => {
                    this.events = this.$store.state.events[fixtureId];
                });
                api.getStatistics(fixtureId).then(() => {
                    this.statistics = this.$store.state.statistics[fixtureId];
                });
                this.resolved = true;

                api.getH2H(this.$store.state.fixtures[fixtureId].homeTeam_id, this.$store.state.fixtures[fixtureId].awayTeam_id);
            });
        },

    };
</script>
<style>
</style>
