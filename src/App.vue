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
        </Main>
    </v-app>
</template>

<script>
import { Main, Header, Body, Container } from './components/layout';
import { LogoHeader, Menu } from './components/blocks';

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
            pageYOffset: 0,
            innerHeight: 0,
            footerHeight: 0,
            headerHeight: 0,
            appHeight: 0,
            headerSize: {
                small: `64px`,
                big: `128px`,
            },
        };
    },
    computed: {
        getHeaderHeight() {
            return {
                height: this.isHeaderScrolled()
                    ? this.headerSize.small
                    : this.headerSize.big,
            };
        },
        footerAllowPages() {
            const pagesWithFooter = ['home', 'profile'];
            return pagesWithFooter.includes(this.$route.name);
        },
    },
    mounted() {
        this.headerHeight = this.$refs.header.$el.clientHeight;
        this.appHeight = this.$el.clientHeight;
        this.innerHeight = window.innerHeight;
        this.registerHandlers();
    },

    methods: {
        isHeaderScrolled() {
            return this.pageYOffset >= this.headerHeight;
        },
        registerHandlers() {
            window.addEventListener('scroll', this.handlerScrollWindow);
        },
        unregisterHandlers() {
            window.removeEventListener('scroll', this.handlerScrollWindow);
        },
        handlerScrollWindow() {
            this.pageYOffset = window.pageYOffset;
            this.innerHeight = window.innerHeight;
            this.appHeight = this.$el.clientHeight;
        },
    },
};
</script>

<style lang="stylus">
@import '~@/assets/styles/index.styl';
</style>
