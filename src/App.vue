<template>
    <v-app>
        <Main>
            <Header ref="header">
                <Container class="header__container">
                    <LogoHeader />
                    <Menu />
                </Container>
            </Header>
            <Body>
                <v-fade-transition mode="out-in">
                    <router-view />
                </v-fade-transition>
            </Body>
            <Menu />
        </Main>
    </v-app>
</template>

<script>
import { Main, Header, Body, Container } from './components/layout';
import {
    LogoHeader,
    Menu,
} from './components/blocks';

export default {
    name: 'App',
    components: {
        Main,
        Container,
        Header,
        Body,
        Menu,
        LogoHeader,
    },

    data() {
        return {
            }
    },
};
</script>

<style lang="stylus">
@import '~@/assets/styles/index.styl';

</style>
