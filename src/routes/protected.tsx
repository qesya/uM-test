import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Spinner } from '@/components/Elements';
import { MainLayout } from '@/components/Layout';

const Dashboard = lazy(() =>
	import('@/features/misc').then(({ Dashboard }) => ({ default: Dashboard }))
);

const UpdateProfile = lazy(() =>
	import('@/features/misc/').then(({ UpdateProfile }) => ({ default: UpdateProfile }))
);

const ChangePassword = lazy(() =>
	import('@/features/misc/').then(({ ChangePassword }) => ({ default: ChangePassword }))
);

const PrivateRoutes = () => {
	return (
		<MainLayout>
			<Suspense
				fallback={
					<div className='h-screen w-full flex items-center justify-center'>
						<Spinner variant='light' />
					</div>
				}
			>
				<Outlet />
			</Suspense>
		</MainLayout>
	);
};

export const protectedRoutes = [
	{
		path: 'home/*',
		element: <PrivateRoutes />,
		children: [
			{ index: true, element: <Dashboard /> },
			{ path: '*', element: <Navigate to='.' /> },
			{ path: 'update-info', element: <UpdateProfile /> },
			{ path: 'change-password', element: <ChangePassword /> },
		],
	},
];
