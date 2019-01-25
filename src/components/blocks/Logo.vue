<template>
    <v-flex>
        <router-link to="/">
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
        </router-link>
    </v-flex>
</template>

<script>
export default {
    methods: {
        isMobileWidth() {
            return this.$vuetify.breakpoint.mdAndDown;
        },
    },
};
</script>
