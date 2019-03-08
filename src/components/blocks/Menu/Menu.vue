<template>
    <ul class="menu flex">
        <li><router-link to="/project">About</router-link></li>
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
