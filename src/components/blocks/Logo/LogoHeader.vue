<template>
    <v-flex class="logo">
        <router-link to="/" class="align-self-center">
            <template v-if="isXs()">
                <img
                    svg-inline
                    src="@/assets/images/logo_sm.svg"
                    alt="MedAbout<Me"
                />
            </template>
            <template v-else-if="isSmAndDown()">
                <img
                    svg-inline
                    src="@/assets/images/logo_min.svg"
                    alt="MedAbout<Me"
                />
            </template>
            <template v-else>
                <img
                    svg-inline
                    src="@/assets/images/logo_big.svg"
                    alt="MedAbout<Me"
                />
            </template>
        </router-link>
    </v-flex>
</template>

<script>
import { $viewport } from '../../../mixins';

export default {
    mixins: [$viewport],
};
</script>
<style lang="stylus">
@import './logo.styl';
</style>
