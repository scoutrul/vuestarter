<template>
  <div class="container">
<slot />
</div>
</template>

<script>
export default {
    data: () => ({
        isMobile: false,
    }),

    beforeDestroy() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize, {
                passive: true,
            });
        }
    },

    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize, { passive: true });
    },

    methods: {
        onResize(e) {
            this.isMobile = window.innerWidth < 600;
            console.log(e);
        },
    },
};
</script>
