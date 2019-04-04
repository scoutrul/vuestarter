<template>
    <img
        v-if="resolved"
        :class="`logo ${className && className}`"
        :src="team.logo || defaultLogo"
        :alt="team.name"
        :title="team.name"
        :style="{ height: `${size && size}px` }"
    />
    <img
        v-else
        class="logo"
        :src="defaultLogo"
        alt=""
        title=""
        :class="`logo ${className && className}`"
        :style="{ height: `${size && size}px` }"
    />
</template>

<script>
import api from '@/services/';

export default {
    props: ['teamId', 'size', 'className'],
    data: () => ({
        defaultLogo: 'http://clipart-library.com/image_gallery/348752.gif',
        team: null,
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
.logo {
    object-fit: contain;
}
</style>
