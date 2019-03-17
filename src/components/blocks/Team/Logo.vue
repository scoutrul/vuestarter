<template>
    <img :src="logosHaveResolved ? team.logo || defaultLogo : defaultLogo" :alt="logosHaveResolved ? team.name : 'the team logotype'" height="80px" />
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
            api.getTeamLogo(teamId)
                .then(res => {
                    this.team = res.body.api.teams[teamId];
                    this.logosHaveResolved = true;
                })
                .catch(reason => {
                    console.log(reason);
                });
        },
    },
};
</script>
