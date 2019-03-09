<template>
    <div class="container">
        <h1>Leagues</h1>
        <div>
            <div v-for="league of leagues" :key="league.league_id">{{league.name}}</div>
        </div>
    </div>
</template>

<script>
import unirest from 'unirest';
import api from '@/services/';

export default {
    data: () => ({
        leagues: {}
    }),
    mounted(){
        api.getApi("leagues").then(res => {
            console.log(res);
            this.leagues = res.body.api.leagues});
    }
};
</script>
<style></style>
