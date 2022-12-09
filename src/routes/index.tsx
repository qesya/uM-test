import { useRoutes } from 'react-router-dom';

import { Landing } from '@/features/misc';
import storage from '@/utils/storage';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
	const JWT = () => {
		let hasJWT = false;

		storage.getToken() ? (hasJWT = true) : (hasJWT = false);

		return hasJWT;
	};

	const commonRoutes = [{ path: '/', element: <Landing /> }];

	const routes = JWT() ? protectedRoutes : publicRoutes;

	const element = useRoutes([...routes, ...commonRoutes]);

	return <>{element}</>;
};
