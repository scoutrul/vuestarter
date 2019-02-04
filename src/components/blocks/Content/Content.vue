<template>
    <v-layout
        column
        :style="{
            background: bgColor,
        }"
    >
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
                    d="M7688 0C6560.46 95.5195 5246.64 150.3 3844 150.3C2441.36 150.3 1127.54 95.5195 -0.000244141 0H7688Z"
                    :fill="isTopReverse ? bgColor : '#FFFFFF'"
                />
            </svg>
        </template>
        <v-layout> <slot></slot> </v-layout>
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
                    d="M7688 0C6560.46 95.5195 5246.64 150.3 3844 150.3C2441.36 150.3 1127.54 95.5195 -0.000244141 0H7688Z"
                    :fill="isBottomReverse ? bgColor : '#FFFFFF'"
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
        bgColor: { type: String, default: '#FFF' },
    },
    data: () => ({}),
    created() {
        console.log(this);
    },
};
</script>

<style scoped lang="stylus">
.arc {
    width: 100%;
    height auto
    path {
        transform-origin center
    }
    &_top path {
        transform: rotateX(0deg);
    }
    &_bottom path {
            transform: rotateX(-180deg);
    }
    &.reverse {
        background #FFF
        &.arc_top path {
                transform: rotateX(-180deg);

        }
        &.arc_bottom path {
                transform: rotateX(0deg);
        }
    }
}
</style>
