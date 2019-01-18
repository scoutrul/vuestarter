<template>
    <LayoutMain>
        <Container> <HelloWorld /> </Container>
    </LayoutMain>
</template>

<script>
import LayoutMain from './components/layout/Main';
import Container from './components/layout/Container';
import HelloWorld from './components/pages/Home';

export default {
    name: 'App',
    components: {
        LayoutMain,
        Container,
        HelloWorld,
    },
    data() {
        return {
            //
        };
    },
    mounted() {
        console.log('this.$vuetify.breakpoint', this.$vuetify.breakpoint);
        console.log('this.$router.options', this.$router.options);
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
