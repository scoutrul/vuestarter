<template>
    <v-layout>
        <Content
            is-top
            is-bottom
            is-top-reverse
            is-bottom-reverse
            bg-color="#FCD"
        />
    </v-layout>
</template>

<script>
import { Content } from '../../blocks';

export default {
    components: {
        Content,
    },
};
</script>
<style></style>
