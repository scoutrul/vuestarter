<template>
    <v-app>
        <Main>
            <Header>
                <Container class="header__container">
                    <LogoHeader />
                    <Menu />
                    <Button v-if="isCheckupDone">Скачать анкету</Button>
                    <Button v-else>Начать</Button>
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
                    <LogoFooter />
                    <Copyrights />
                    <Menu />
                </Container>
            </Footer>
        </Main>
    </v-app>
</template>

<script>
import { Main, Header, Body, Container, Footer } from './components/layout';

import AsyncComponent from './utils/AsyncComponent';

const LogoHeader = () =>
    AsyncComponent(
        import(/* webpackChunkName: "LogoHeader" */ './components/blocks/LogoHeader'),
    );
const LogoFooter = () =>
    AsyncComponent(
        import(/* webpackChunkName: "LogoFooter" */ './components/blocks/LogoFooter'),
    );
const Menu = () =>
    AsyncComponent(
        import(/* webpackChunkName: "Menu" */ './components/blocks/Menu'),
    );
const Button = () =>
    AsyncComponent(
        import(/* webpackChunkName: "Button" */ './components/blocks/Button'),
    );
const Copyrights = () =>
    AsyncComponent(
        import(/* webpackChunkName: "Copyrights" */ './components/blocks/Copyrights'),
    );

export default {
    name: 'App',
    components: {
        Main,
        Container,
        Header,
        Footer,
        Body,
        Button,
        Menu,
        LogoHeader,
        LogoFooter,
        Copyrights,
    },
    data() {
        return {
            isCheckupDone: false,
        };
    },
    mounted() {
        console.log('this.$vuetify', this.$vuetify);
        console.log('this.$router', this.$router);
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
