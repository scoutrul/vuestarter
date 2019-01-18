import Vue from 'vue';
import Router from 'vue-router';

const fortyFour = () =>
	import(/* webpackChunkName: "fortyFour" */ './components/pages/fortyFour.vue');
const Home = () => import(/* webpackChunkName: "Home" */ './components/pages/Home');

Vue.use(Router);
const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{ path: '/404', component: fortyFour },
		{ path: '*', redirect: '/404' },
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		return { x: 0, y: 0 };
	},
});

export default router;
