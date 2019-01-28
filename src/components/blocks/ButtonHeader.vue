<template>
    <v-btn
        v-show="isTabletWidth()"
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
export default {
    methods: {
        isTabletWidth() {
            return this.$vuetify.breakpoint.width > 768;
        },
    },
};
</script>

<style></style>
