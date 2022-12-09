import { baseApi } from '@/lib/rtkQuery/baseApi';

import {
	UserValues,
	UpdateInfoRequest,
	ChangePasswordRequest,
	ChangePasswordResponse,
	UpdateInfoResponse,
} from '../types';

export const myInfoApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getUserInfo: build.query<UserValues, void>({
			query: () => {
				return {
					url: '/auth/me',
					method: 'get',
				};
			},
		}),
		updateUserInfo: build.mutation<UpdateInfoResponse, UpdateInfoRequest>({
			query: (body) => {
				return {
					url: '/auth/update_profile',
					method: 'patch',
					body,
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
				};
			},
		}),
		changeUserPassword: build.mutation<ChangePasswordResponse, ChangePasswordRequest>({
			query: (body) => {
				return {
					url: '/auth/change_password',
					method: 'put',
					body,
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
				};
			},
		}),
	}),
});

export const { useGetUserInfoQuery, useUpdateUserInfoMutation, useChangeUserPasswordMutation } =
	myInfoApi;
