<template>
    <v-layout v-if="team" column>
        <v-layout v-if="team.coach" column>
            <h3>Тренер:</h3>
            {{ team.coach }}
        </v-layout>
        <v-layout v-if="team.startXI" column>
            <h3>Основа:</h3>
            <v-flex v-for="player in orderedPlayersstartXI" :key="player.player"
                >{{ player.number ? player.number + '. ' : ''
                }}{{ player.player }}
            </v-flex>
        </v-layout>
        <v-layout v-if="team.substitutes" column>
            <h3>Замена:</h3>
            <v-flex
                v-for="player in orderedPlayerssubstitutes"
                :key="player.player"
                >{{ player.number ? player.number + '. ' : ''
                }}{{ player.player }}
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
import sortBy from 'lodash/sortBy';

export default {
    props: ['team'],
    computed: {
        orderedPlayersstartXI() {
            return sortBy(this.team.startXI, 'number');
        },
        orderedPlayerssubstitutes() {
            return sortBy(this.team.substitutes, 'number');
        },
    },
    methods: {},
};
</script>
<style></style>
