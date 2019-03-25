<template>
  <v-layout column v-if="events.length">
    <v-layout v-for="event of events" :key="event.elapsed">
      <v-flex xs2>{{event.elapsed}} минута</v-flex>
      <v-flex xs2>{{event.type}}</v-flex>
      <v-flex xs2>{{event.teamName}}</v-flex>
      <v-flex xs2>{{event.player}}</v-flex>
      <v-flex xs2>{{event.detail}}</v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import sortBy from 'lodash/sortBy';
export default {
  props: ['events'],
  methods: {},
};
</script>
<style>
</style>
