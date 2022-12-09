import { baseApi } from '@/lib/rtkQuery/baseApi';

import { LoginRequest, RegistrationRequest, UserValues, UserResponse } from '../types';

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		fetchUser: build.query<UserValues, void>({
			query: () => {
				return {
					url: '/auth/me',
					method: 'get',
				};
			},
		}),
		loginUser: build.mutation<UserResponse, LoginRequest>({
			query: (body) => {
				return {
					url: '/auth/login',
					method: 'post',
					body,
				};
			},
		}),
		registerUser: build.mutation<UserResponse, RegistrationRequest>({
			query: (body) => {
				return {
					url: '/auth/registration',
					method: 'post',
					body,
				};
			},
		}),
	}),
});

export const { useFetchUserQuery, useLoginUserMutation, useRegisterUserMutation } = authApi;
