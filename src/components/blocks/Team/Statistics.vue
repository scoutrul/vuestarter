<template>
    <v-layout v-if="statistics" column>
        <v-layout v-for="(value, key) in statistics" :key="key">
            <v-flex xs2>{{ key }}</v-flex>
            <v-flex xs2>{{ value.home }} - {{ value.away }}</v-flex>
        </v-layout>
    </v-layout>
</template>

<script>

export default {
    props: ['statistics'],
    mounted() {},
    methods: {},
};
</script>
<style></style>
