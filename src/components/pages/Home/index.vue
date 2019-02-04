<template>
    <v-layout column>
        <Content is-top is-bottom bg-color="#00BAFF">sec</Content>
        <Content is-top-reverse is-bottom-reverse bg-color="#00BAFF"
            >first</Content
        >
        <Content bg-color="#00BAFF">3333333</Content>
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
