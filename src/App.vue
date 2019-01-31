<template>
    <v-app>
        <Main>
            <ButtonHeader class="button__fix">Начать</ButtonHeader>
            <Header>
                <Container class="header__container">
                    <LogoHeader />
                    <Menu />
                    <ButtonHeader v-if="isCheckupDone"
                        >Скачать анкету</ButtonHeader
                    >
                    <ButtonHeader v-else>Начать</ButtonHeader>
                </Container>
            </Header>
            <Body>
                <Container>
                    <v-fade-transition mode="out-in">
                        <router-view />
                    </v-fade-transition>
                </Container>
            </Body>
            <Footer>
                <Container class="footer__container">
                    <v-flex
                        order-xs2
                        order-sm1
                        order-md1
                        order-lg1
                        class="footer__logo"
                        ><LogoFooter
                    /></v-flex>
                    <v-flex
                        order-xs1
                        order-sm2
                        order-md2
                        order-lg2
                        class="footer__menu"
                        ><Menu
                    /></v-flex>
                    <v-flex
                        class="footer__copy"
                        order-xs3
                        order-sm3
                        order-md3
                        order-lg3
                        ><Copyrights
                    /></v-flex>
                </Container>
            </Footer>
        </Main>
    </v-app>
</template>

<script>
import { Main, Header, Body, Container, Footer } from './components/layout';
import { $viewport } from './mixins';

import AsyncComponent from './components/utils/AsyncComponent';

const LogoHeader = () =>
    AsyncComponent(
        import(/* webpackChunkName: "LogoHeader" */ './components/blocks/Logo/LogoHeader'),
    );
const LogoFooter = () =>
    AsyncComponent(
        import(/* webpackChunkName: "LogoFooter" */ './components/blocks/Logo/LogoFooter'),
    );
const Menu = () =>
    AsyncComponent(
        import(/* webpackChunkName: "Menu" */ './components/blocks/Menu/Menu'),
    );
const ButtonHeader = () =>
    AsyncComponent(
        import(/* webpackChunkName: "ButtonHeader" */ './components/blocks/ButtonHeader/ButtonHeader'),
    );
const Copyrights = () =>
    AsyncComponent(
        import(/* webpackChunkName: "Copyrights" */ './components/blocks/Copyrights/Copyrights'),
    );

export default {
    name: 'App',
    components: {
        Main,
        Container,
        Header,
        Footer,
        Body,
        ButtonHeader,
        Menu,
        LogoHeader,
        LogoFooter,
        Copyrights,
    },
    mixins: [$viewport],

    data() {
        return {
            isCheckupDone: false,
        };
    },
    mounted() {
        console.log('this', this);
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.name = name;
        },
    },

    // actions: {
    //     SET_NAME: async (context, name) => {
    //         let { data } = await Axios.post('http://myapiendpoint.com/api/name', {
    //             name: name
    //         });

    //         if (data.status == 200) {
    //             context.commit('SET_NAME', name);
    //         }
    //     }
    // },

    // beforeRouteEnter(to, from, next) {
    // },
    // beforeRouteUpdate(to, from, next) {
    // }
};
</script>
