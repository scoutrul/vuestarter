<template>
    <v-layout :style="{ color: bgColor }" column class="content_container">
        <template v-if="isTop | isTopReverse">
            <svg
                :class="['arc', 'arc_top', isTopReverse && 'reverse']"
                width="7688"
                height="151"
                viewBox="0 0 7688 151"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    v-if="isTopReverse"
                    d="M7688 0C6560.46 95.5195 5246.64 150.3 3844 150.3C2441.36 150.3 1127.54 95.5195 -0.000244141 0H7688Z"
                />
                <path
                    v-else
                    d="M0.996393 0H0.925049V152H7689.01V0H7689C6561.46 95.5195 5247.64 150.3 3845 150.3C2442.36 150.3 1128.53 95.5195 0.996393 0Z"
                />
            </svg>
        </template>
        <v-flex class="content_block"> <slot></slot> </v-flex>
        <template v-if="isBottom | isBottomReverse">
            <svg
                :class="['arc', 'arc_bottom', isBottomReverse && 'reverse']"
                width="7688"
                height="151"
                viewBox="0 0 7688 151"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    v-if="isBottomReverse"
                    d="M7688 0C6560.46 95.5195 5246.64 150.3 3844 150.3C2441.36 150.3 1127.54 95.5195 -0.000244141 0H7688Z"
                />
                <path
                    v-else
                    d="M0.996393 0H0.925049V152H7689.01V0H7689C6561.46 95.5195 5247.64 150.3 3845 150.3C2442.36 150.3 1128.53 95.5195 0.996393 0Z"
                />
            </svg>
        </template>
    </v-layout>
</template>

<script>
export default {
    props: {
        isTop: Boolean,
        isTopReverse: Boolean,
        isBottom: Boolean,
        isBottomReverse: Boolean,
        bgColor: { type: String, default: '#d9f5ff' },
    },
    data: () => ({}),
    created() {
        console.log(this);
    },
};
</script>

<style scoped lang="stylus">
@import "style.styl"
</style>
