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
import { $viewport } from '../../mixins';

export default {
    mixins: [$viewport],
};
</script>
