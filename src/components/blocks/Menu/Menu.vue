<template>
    <ul class="menu flex">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/leagues">Leagues</router-link></li>
        <li><router-link to="/live">Live</router-link></li>
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
