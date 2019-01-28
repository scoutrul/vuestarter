<template>
    <ul class="menu flex" :class="[!isTabletWidth() && 'justify-end']">
        <li><router-link to="/project">О проекте</router-link></li>
        <li><router-link to="/record">Запись к врачу</router-link></li>
    </ul>
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
