<template>
    <div class="container">
        <h1>Home page</h1>
        <div>
            <div v-for="league of leagues" :key="league.league_id">{{league.name}}</div>
        </div>
    </div>
</template>

<script>
import unirest from 'unirest';

export default {
    data: () => ({
        leagues: {}
    }),
    mounted(){
         unirest.get("https://api-football-v1.p.rapidapi.com/leagues")
            .header("X-RapidAPI-Key", "c4e412ce52msh6c646cd1fe5ce0ap199220jsn0b49016530ce")
            .end(result => {
                this.leagues = result.body.api.leagues || {};
                console.log(result.status);
                console.log(result.headers);
                console.log(result.body);
            });
    }
};
</script>
<style></style>
