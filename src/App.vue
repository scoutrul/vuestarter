<template>
    <v-app>
        <Main>
            <Button class="button__fix">Go!</Button>
            <Header>
                <Container class="header__container">
                    <LogoHeader />
                    <Menu />
                    <Button>Go!</Button>
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
                    <v-flex order-xs2 order-sm1 class="footer__logo"
                        ><LogoFooter
                    /></v-flex>
                    <v-flex order-xs1 order-sm3 class="footer__menu"
                        ><Menu
                    /></v-flex>
                    <v-flex order-xs3 order-sm2><Copyrights /></v-flex>
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
    Button,
} from './components/blocks';
import { $viewport } from './mixins';

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
    mixins: [$viewport],

    data() {
        return {
            isCheckupDone: false,
        };
    },
    mounted() {
        // console.log('this', this);
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
