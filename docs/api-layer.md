# API Layer

## Use a single instance of the API client

We have a single instance of the API client defined, along with any preconfiguration required which should be reused throughout the application.

Basic example of API Client using RTK Query

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: http://localhost:9000/api,
	}),
	refetchOnFocus: false,
	endpoints: () => ({}),
});
```

## Define and export request declarations

Rather than declaring API requests inside our components or other files, have them defined seperately. This makes it much easier to track which endpoints are available inside the application

Basic example of an API Request Declaration using RTK Query

```
import { baseApi } from '@/lib/rtkQuery/baseApi';

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		fetchUser: build.query({
			query: () => {
				return {
					url: '/auth/me',
					method: 'get',
				};
			},
		}),
	}),
});

export const {
	useFetchUserQuery,
} = authApi;
```
