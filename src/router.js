import Vue from 'vue';
import Router from 'vue-router';

const fortyFour = () =>
	import(/* webpackChunkName: "fortyFour" */ './components/pages/fortyFour.vue');
const Home = () =>
	import(/* webpackChunkName: "Home" */ './components/pages/Home');
const Project = () =>
	import(/* webpackChunkName: "Project" */ './components/pages/Project');
const Leagues = () =>
	import(/* webpackChunkName: "Leagues" */ './components/pages/Leagues');
const Live = () =>
	import(/* webpackChunkName: "Live" */ './components/pages/Live');

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
		{
			path: '/live',
			name: 'live',
			component: Live,
		},
		{
			path: '/leagues',
			name: 'leagues',
			component: Leagues,
		},
		{
			path: '/project',
			name: 'project',
			component: Project,
		},
		{
			path: '/404',
			component: fortyFour,
		},
		{
			path: '*',
			redirect: '/404',
		},
	],
	// scrollBehavior(to, from, savedPosition) {
	// 	if (savedPosition) {
	// 		return savedPosition;
	// 	}
	// 	return { x: 0, y: 0 };
	// },
});

export default router;
