<template>
    <img v-if="resolved"
         :src="countryFlagSrc"
         height="14px"
         :alt="countryName"
    />
</template>

<script>
    import api from '@/services/';

    export default {
        name: 'Flag',
        props: ['league_id'],
        data: () => ({
            resolved: false,
            countryFlagSrc: null,
            countryName: ''
        }),

        mounted() {
            this.league_id && this.getCountryFlag(this.league_id)
        },
        methods: {
            getCountryFlag(league_id) {
                api.getLeague(league_id).then(() => {
                    this.countryFlagSrc = this.$store.state.leagues[this.league_id].flag;
                    this.countryName = this.$store.state.leagues[this.league_id].country;
                    this.resolved = true;
                }).catch(reason => {
                    console.log(reason);
                });
            }
        }
    };
</script>
<style>

</style>
