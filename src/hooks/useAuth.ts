import { useMemo } from 'react';

import { useFetchUserQuery } from '@/features/auth';

export const useAuth = () => {
	console.log('** FETCH_USER');
	const { data: user, isLoading } = useFetchUserQuery();

	return useMemo(() => ({ user, isLoading }), [user, isLoading]);
};
