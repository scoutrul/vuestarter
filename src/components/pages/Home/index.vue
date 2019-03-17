<template>
    <div class="container">
        <h1>Home page</h1>
        <v-layout>
            <pre>
                - Компонент показа team vs team
                    - взять с сетки лайва
                    - итерейтить этот компонент
                - Компонент получения и показа событий матча
                - Компонент получения и показа статистики
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
