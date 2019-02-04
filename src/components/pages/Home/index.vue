<template>
    <v-layout column>
        <Content is-top is-bottom bg-color="gray">sec</Content>
        <Content is-top is-bottom-reverse bg-color="magenta">sec</Content>
        <Content is-top-reverse is-bottom bg-color="gray">sec</Content>
        <Content is-top-reverse is-bottom-reverse bg-color="magenta"
            >sec</Content
        >
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
