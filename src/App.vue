<template>
    <v-app>
        <LayoutMain>
            <LayoutHeader>
                <LayoutContainer>
                    Header
                </LayoutContainer>
            </LayoutHeader>
            <LayoutBody>
                <LayoutContainer>
                    <router-view />
                </LayoutContainer>
            </LayoutBody>
            <LayoutFooter>
                <LayoutContainer>
                    Footer
                </LayoutContainer>
            </LayoutFooter>
        </LayoutMain>
    </v-app>
</template>

<script>
    import LayoutMain from './components/layout/Main.vue';
    import LayoutHeader from './components/layout/Header.vue';
    import LayoutContainer from './components/layout/Container.vue';
    import LayoutBody from './components/layout/Body.vue';
    import LayoutFooter from './components/layout/Footer.vue';

    export default {
        name: 'App',
        components: {
            LayoutMain,
            LayoutContainer,
            LayoutHeader,
            LayoutFooter,
            LayoutBody,
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
