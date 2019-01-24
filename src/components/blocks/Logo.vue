<template>
    <v-flex>
        <img
            v-if="isMobileWidth()"
            src="../../assets/images/logo_min.svg"
            alt="MedAboutMe
        диспансеризация"
        />
        <img
            v-else
            src="../../assets/images/logo_big.svg"
            alt="MedAboutMe
        диспансеризация"
        />
    </v-flex>
</template>

<script>
export default {
    mounted() {
        console.log(this.isMobileWidth());
    },
    methods: {
        isMobileWidth() {
            return (
                this.$vuetify.breakpoint.xlOnly ||
                this.$vuetify.breakpoint.xsOnly
            );
        },
    },
};
</script>
