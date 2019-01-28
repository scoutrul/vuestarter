import AsyncLoadError from './AsyncLoadError';
import AsyncLoading from './AsyncLoading';

const AsyncComponent = imp => ({
	component: imp,
	loading: AsyncLoading,
	delay: 300,
	error: AsyncLoadError,
	timeout: 10000,
});

export default AsyncComponent;
