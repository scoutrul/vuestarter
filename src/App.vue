<template>
    <v-app>
        <Main>
            <Header ref="header" :style="getHeaderHeight">
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
import { Main, Header, Body, Container, Footer } from './components/layout';
import {
    LogoHeader,
    LogoFooter,
    Menu,
    Copyrights,

} from './components/blocks';

export default {
    name: 'App',
    components: {
        Main,
        Container,
        Header,
        Footer,
        Body,
        Menu,
        LogoHeader,
        LogoFooter,
        Copyrights,
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
        this.footerHeight = this.$refs.footer.$el.clientHeight;
        this.appHeight = this.$el.clientHeight;
        this.innerHeight = window.innerHeight;
        this.registerHandlers();
    },

    methods: {
        isHeaderScrolled() {
            return this.pageYOffset >= this.headerHeight;
        },
        isFooterShow() {
            return (
                this.pageYOffset >=
                    this.appHeight - this.footerHeight - this.innerHeight ||
                this.appHeight === this.innerHeight
            );
        },

    },
};
</script>

<style lang="stylus">
@import '~@/assets/styles/index.styl';
.footer-display-none {
    display none
}
</style>
