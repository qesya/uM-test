import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/config';
import storage from '@/utils/storage';

export const baseApi = createApi({
	reducerPath: 'baseApi',
	tagTypes: ['auth'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const token = storage.getToken();
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: () => ({}),
});
