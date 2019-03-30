<template>
    <img class="logo" :src="logosHaveResolved ? team.logo || defaultLogo : defaultLogo" :alt="logosHaveResolved ? team.name : 'the team logotype'" />
</template>

<script>
import api from '@/services/';

export default {
    props: ['teamId'],
    data: () => ({
        defaultLogo: 'http://clipart-library.com/image_gallery/348752.gif',
        team: null,
        logosHaveResolved: false,
    }),
    mounted(){
        this.getCurrentLogo(this.teamId)
    },
    methods: {
        getCurrentLogo(teamId) {
            this.logosHaveResolved = false;
            api.getTeam(teamId)
                .then(() => {
                    this.team = this.$store.state.teams[teamId];
                    this.logosHaveResolved = true;
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
