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
                    d="M7688 0C6560.46 95.5195 5246.64 150.3 3844 150.3C2441.36 150.3 1127.54 95.5195 -0.000244141 0H7688Z"
                />
            </svg>
        </template>
        <v-layout class="content_block"> <slot></slot> </v-layout>
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
        bgColor: { type: String, default: '#E6F3FF' },
    },
    data: () => ({}),
    created() {
        console.log(this);
    },
};
</script>

<style scoped lang="stylus">
@import "../../../assets/styles/vars"
.arc {
    width: 100vw;
    height: auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: $Lighter_Blue
    path {
        transform-origin center
        color $Main_White
        fill currentColor
    }
    &_top {
        top 0
        path {
            transform: rotateX(0deg);
        }
    }
    &_bottom {
        bottom 0
        path {
            transform: rotateX(-180deg);
        }
    }
    &.reverse {
        background $Main_White
        &.arc_top path {
            transform: rotateX(-180deg);

        }
        &.arc_bottom path {
            transform: rotateX(0deg);
        }
    }
}
.content_container {
    color: $Lighter_Blue
    position: relative
    margin-bottom 20px
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 100vw;
        background:  currentColor
        transform: translateX(-50%);
    }
}
.content_block {
    min-height 160px
}
</style>
