<template>
    <v-app>
        <Main>
            <Header>
                <Container>
                    <Logo />
                    <Menu />
                    <Button>Начать</Button>
                </Container>
            </Header>
            <Body>
                <Container>
                    <v-fade-transition mode="out-in">
                        <router-view />
                    </v-fade-transition>
                </Container>
            </Body>
            <Footer> <Container>Footer</Container> </Footer>
        </Main>
    </v-app>
</template>

<script>
import { Main, Header, Body, Container, Footer } from './components/layout';

import AsyncComponent from './utils/AsyncComponent';

const Logo = () =>
    AsyncComponent(
        import(/* webpackChunkName: "Logo" */ './components/blocks/Logo'),
    );
const Menu = () =>
    AsyncComponent(
        import(/* webpackChunkName: "Menu" */ './components/blocks/Menu'),
    );
const Button = () =>
    AsyncComponent(
        import(/* webpackChunkName: "Button" */ './components/blocks/Button'),
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
        Logo,
    },
    data() {
        return {
            //
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
