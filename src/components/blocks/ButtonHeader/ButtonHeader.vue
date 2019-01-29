<template>
    <v-btn
        v-show="is768Above()"
        depressed
        flat
        round
        dark
        ripple
        class="button__yellow"
    >
        <slot />
    </v-btn>
</template>

<script>
import { $viewport } from '../../../mixins';

export default {
    mixins: [$viewport],
};
</script>

<style lang="stylus">
@import '../../../assets/styles/vars/';
@import './button.styl';
</style>
