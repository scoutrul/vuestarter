<template>
    <v-layout
        column
        class="tvt--event flex"
        xs12
        sm4
        md3
        lg3
        xl2
        v-if="fixture"
    >
        <v-layout justify-center align-center>
            <v-flex class="tvt--nogrow">
                <CountryFlag :league_id="fixture.league_id"  v-if="live"/>
            </v-flex>
            <v-flex class="tvt--center tvt--title tvt--round tvt--nogrow">{{
                fixture.round
            }}</v-flex>
            <v-flex v-if="live" class="tvt--live tvt--nogrow">Live!</v-flex>
        </v-layout>

        <v-layout class="tvt--header">
            <v-flex class="tvt--center tvt--name" xs4>
                <router-link
                    v-if="hrefTeams"
                    :to="{ name: 'team', params: { id: fixture.homeTeam_id } }"
                    >{{ fixture.homeTeam }}
                </router-link>
                <div v-else>{{ fixture.homeTeam }}</div>
            </v-flex>
            <v-flex class="tvt--center tvt--elapsed" xs4  v-if="live"
                >({{ fixture.elapsed }} мин.)</v-flex
            >
            <v-spacer v-else></v-spacer>
            <v-flex class="tvt--center tvt--name" xs4>
                <router-link
                    v-if="hrefTeams"
                    :to="{ name: 'team', params: { id: fixture.awayTeam_id } }"
                    >{{ fixture.awayTeam }}</router-link
                >
                <div v-else>{{ fixture.awayTeam }}</div>
            </v-flex>
        </v-layout>
        <v-layout class="tvt--header" v-if="isInLiveTable()">
            <v-flex class="tvt--center tvt--logo" xs4>
                <router-link
                    v-if="hrefTeams"
                    :to="{ name: 'team', params: { id: fixture.homeTeam_id } }"
                    ><TeamLogo :team-id="fixture.homeTeam_id"
                /></router-link>
                <TeamLogo :team-id="fixture.homeTeam_id" />
            </v-flex>
            <v-layout class="flex tvt--center" xs4 sm4 column>
                <v-flex class="tvt--center tvt--score" 
                    >{{ fixture.goalsHomeTeam }} -
                    {{ fixture.goalsAwayTeam }}</v-flex
                >
            </v-layout>
            <v-flex class="tvt--center tvt--logo" xs4>
                <router-link
                    v-if="hrefTeams"
                    :to="{ name: 'team', params: { id: fixture.awayTeam_id } }"
                    ><TeamLogo :team-id="fixture.awayTeam_id"
                /></router-link>
                <TeamLogo :team-id="fixture.awayTeam_id" />
            </v-flex>
        </v-layout>
        <v-layout v-if="isInLiveTable() && hrefStatistic" class="tvt--statistic">
            <router-link
                :to="{ name: 'fixture', params: { id: fixture.fixture_id } }"
                class="tvt--statistic__link"
                >Статистика матча</router-link
            >
        </v-layout>
    </v-layout>
</template>

<script>
import TeamLogo from './Logo';
import CountryFlag from './CountryFlag';

export default {
    components: {
        TeamLogo,
        CountryFlag,
    },
    props: ['fixture', 'hrefStatistic', 'live', 'hrefTeams'],
    data: () => ({
        resolve: false,
    }),
    created() {},
    methods: {
        isInLiveTable() {
            return this.live || this.fixture.final_score || this.fixture.elapsed > 0
        }
    },
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
