<template>
    <LayoutMain>
        <LayoutContainer> <HelloWorld /> </LayoutContainer>
    </LayoutMain>
</template>

<script>
import LayoutMain from './components/layout/Main.vue';
import LayoutContainer from './components/layout/Container.vue';
import HelloWorld from './components/pages/Home';

export default {
    name: 'App',
    components: {
        LayoutMain,
        LayoutContainer,
        HelloWorld,
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
