<template>
    <v-flex :style="{ minHeight: size ? `${size}px` : '60px' }">
        <v-img
            v-if="resolved"
            :max-height="size ? size : 60"
            contain
            :class="`${className && className}`"
            :src="team.logo"
            :lazy-src="defaultLogo"
            :alt="team.name"
            :title="team.name"
            :height="size ? size : 60"
        />
    </v-flex>
</template>

<script>
import api from '@/services/';

export default {
    props: ['teamId', 'size', 'className'],
    data: () => ({
        defaultLogo: 'http://clipart-library.com/image_gallery/348752.gif',
        team: {},
        resolved: false,
    }),
    mounted() {
        this.getCurrentLogo(this.teamId);
    },
    methods: {
        getCurrentLogo(teamId) {
            api.getTeam(teamId)
                .then(() => {
                    this.team = this.$store.state.teams[teamId];
                    this.resolved = true;
                })
                .catch(reason => {
                    console.log(reason);
                });
        },
    },
};
</script>
<style>

</style>
