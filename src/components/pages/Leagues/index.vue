<template>
    <div class="container">
        <h1>Leagues</h1>
        <div v-for="league of leagues" :key="league.league_id">

            <CountryFlag :league_id="league.league_id" />
            <router-link
                :to="{
                    name: 'league',
                    params: {
                        id: league.league_id,
                    },
                    path: `/leagues/${league.league_id}`,
                }"
            >
                {{ league.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
import api from '@/services/';

import { CountryFlag } from '@/components/blocks';

export default {
    components: {
        CountryFlag
    },
    data: () => ({
        leagues: {},
    }),
    mounted() {
        api.getLeagues().then(() => {
            this.leagues = this.$store.state.leagues;
        });
    },
};
</script>
<style></style>
