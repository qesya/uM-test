import { useMemo } from 'react';

import { useGetUserInfoQuery } from '@/features/auth';

export const useMyInfo = () => {
	const { data: user, isLoading } = useGetUserInfoQuery();

	return useMemo(() => ({ user, isLoading }), [user, isLoading]);
};
