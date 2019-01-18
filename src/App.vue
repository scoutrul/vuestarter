<template>
    <v-app>
        <v-content>
            <HelloWorld/>
        </v-content>
    </v-app>
</template>

<script>
	// import Axios from 'axios';
	const HelloWorld = () => import(
        /* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld'
		);
	export default {
		name: 'App',
		components: {
			HelloWorld
		},
		data() {
            return {
				//
			};
		},
		mutations: {
			SET_NAME: (state, name) => {
				state.name = name;
			}
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
