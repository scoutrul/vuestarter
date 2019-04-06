<template>
    <div class="container">
        <h1>Live</h1>
        <v-layout row wrap>
            <TeamVsTeam
                v-for="fixture of orderedLiveFixtures"
                :key="fixture.fixture_id"
                :fixture="fixture"
                :href-statistic="true"
                :live="true"
                :hrefTeams="false"
            />
        </v-layout>
        <h1>Today next</h1>
        <v-layout row wrap>
            <TeamVsTeam
                v-for="fixture of notStartedFixtures"
                :key="fixture.fixture_id"
                :fixture="fixture"
                :href-statistic="true"
                :live="false"
                :hrefTeams="false"
            />
        </v-layout>
        <v-layout fill-height></v-layout>
    </div>
</template>

<script>
import api from '@/services/';
import { TeamLogo, TeamVsTeam } from '@/components/blocks';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';

export default {
    components: {
        TeamLogo,
        TeamVsTeam,
    },
    data: () => ({
        liveFixtures: {},
        todayFixtures: {}
    }),
    computed: {
        orderedLiveFixtures() {
            return sortBy({...this.liveFixtures }, 'elapsed');
        },
        notStartedFixtures() {
            const sorted = sortBy({...this.todayFixtures }, 'event_date');
            return filter(sorted, (fixture) => !(fixture.elapsed > 0));
        },
    },
    beforeRouteLeave(to, from, next) {
        this.$store.state.fixtures = {
            ...this.$store.state.fixtures,
            ...this.fixtures,
        };
        next();
    },
    beforeRouteEnter(to, from, next) {
        next(async vm => {
            await api.getLeagues();
            await api.getLiveFixtures().then(res => {
                vm.liveFixtures = vm.$store.state.liveFixtures;
            });
        });
    },
    mounted(){
        api.getTodayFixtures().then(res => {
            this.todayFixtures = this.$store.state.todayFixtures;
        });
    },
    methods: {
        isItLive(elapsed) {
            if (elapsed >= 1){
                return true;
            }
            return false;
        },
    }
};
</script>
<style></style>
