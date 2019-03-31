<template>
    <div class="container">
        <h1>Home page</h1>
        <v-layout>
            <pre>
                - odds
                - TvT stats

            </pre>
        </v-layout>    
    </div>
</template>

<script>
import unirest from 'unirest';
import api from '@/services/';

export default {
    data: () => ({
        leagues: {},
    }),
    mounted() {},
};
</script>
<style></style>
