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
            <Footer
                ref="footer"
                :class="[!footerAllowPages && 'footer-display-none']"
            >
                <Container
                    class="footer__container"
                    :class="[isFooterShow() && 'animateShow']"
                >
                    <v-flex
                        order-xs1
                        order-sm3
                        order-md3
                        order-lg3
                        xs12
                        sm12
                        md6
                        lg6
                        class="footer__menu"
                        ><Menu
                    /></v-flex>
                    <v-flex order-xs2 order-sm1 xs12 md3 class="footer__logo"
                        ><LogoFooter
                    /></v-flex>
                    <v-flex order-xs3 order-sm2 xs12 xs7 spacer
                        ><Copyrights
                    /></v-flex>
                </Container>
            </Footer>
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
    StartButton,
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

    beforeDestroy() {
        this.unregisterHandlers();
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
.footer-display-none {
    display none
}
</style>
