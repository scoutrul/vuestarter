<template>
    <v-layout v-if="events.length" column>
        <v-layout v-for="(event, i) of events" :key="event.elapsed+i">
            <v-flex xs2>{{ event.elapsed }} минута</v-flex>
            <v-flex xs2>{{ event.type }}</v-flex>
            <v-flex xs2>{{ event.teamName }}</v-flex>
            <v-flex xs2>{{ event.player }}</v-flex>
            <v-flex xs2>{{ event.detail }}</v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
export default {
    props: ['events'],
    methods: {},
};
</script>
<style></style>
