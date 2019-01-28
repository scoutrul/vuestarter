<template>
    <v-flex class="logo">
        <router-link to="/">
            <img
                v-if="isMobileWidth()"
                src="../../assets/images/logo_sm.svg"
                alt="MedAboutMe
            диспансеризация"
            />
            <img
                v-else-if="isTabletWidth()"
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
        isTabletWidth() {
            return this.$vuetify.breakpoint.lgAndDown;
        },
        isMobileWidth() {
            return this.$vuetify.breakpoint.xs;
        },
    },
};
</script>
