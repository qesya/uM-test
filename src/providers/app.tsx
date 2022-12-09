import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Spinner } from '@/components/Elements/Spinner';
import { Notifications } from '@/components/Notifications';
import { store } from '@/stores/store';

const ErrorFallback = () => {
	return (
		<div
			className='text-red-500 w-screen h-screen flex flex-col justify-center items-center'
			role='alert'
		>
			<h2 className='text-lg font-semibold'>Ooops, something went wrong :( </h2>
		</div>
	);
};

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
	const { children } = props;
	return (
		<React.Suspense
			fallback={
				<div className='flex items-center justify-center w-screen h-screen'>
					<Spinner size='xl' />
				</div>
			}
		>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<HelmetProvider>
					<Provider store={store}>
						<Notifications />
						<Router>{children}</Router>
					</Provider>
				</HelmetProvider>
			</ErrorBoundary>
		</React.Suspense>
	);
};
