<template>
    <ul class="menu flex" :class="[isAbove680() || 'justify-end']">
        <li><router-link to="/project">О проекте</router-link></li>
        <li><router-link to="/record">Запись к врачу</router-link></li>
    </ul>
</template>

<script>
import { $viewport } from '../../../mixins';

export default {
    mixins: [$viewport],
};
</script>
<style lang="stylus">
@import './menu.styl';
</style>
