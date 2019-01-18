<template>
    <v-app>
        <div class="main">
            <v-fade-transition mode="out-in">
                <router-view/>
            </v-fade-transition>
        </div>
    </v-app>
</template>

<script>
    export default {
        props: {},
    };
</script>