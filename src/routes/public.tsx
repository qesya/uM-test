import { lazy } from 'react';

const AuthRoutes = lazy(() =>
	import('@/features/auth').then(({ AuthRoutes }) => ({
		default: AuthRoutes,
	}))
);

export const publicRoutes = [
	{
		path: '/auth/*',
		element: <AuthRoutes />,
	},
];
