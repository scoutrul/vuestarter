<template>
    <v-app>
        <Main>
            <Header>
                <Container>
                    <Logo />
                    <Menu>
                        <router-link to="/">Home</router-link>
                        <router-link to="/404">404</router-link>
                    </Menu>
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
import { Button, Logo, Menu } from './components/blocks';

export default {
    name: 'App',
    components: {
        Main,
        Container,
        Header,
        Footer,
        Body,
        Button,
        Logo,
        Menu,
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
