<template>
    <div>
        <svg
            id="svg_arc"
            width="7688"
            height="151"
            viewBox="0 0 7688 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7688 0C6560.46 95.5195 5246.64 150.3 3844 150.3C2441.36 150.3 1127.54 95.5195 -0.000244141 0H7688Z"
                fill="#00BAFF"
            />
        </svg>
    </div>
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
<style scoped>
#svg_arc {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    min-width: 1000px;
}
</style>
