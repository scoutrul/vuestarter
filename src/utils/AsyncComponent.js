const Loading = `<template><div>loading</div></template>`;
const Error = `<template><div>error</div></template>`;

const AsyncComponent = imp => ({
	component: imp,
	loading: Loading,
	error: Error,
	delay: 200,
	timeout: 2000,
});

export default AsyncComponent;
