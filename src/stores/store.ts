import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { NotificationSlice } from '@/components/Notifications/notificationsSlice';
import { baseApi } from '@/lib/rtkQuery/baseApi';

export const store = configureStore({
	reducer: {
		notifications: NotificationSlice.reducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
	devTools: import.meta.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
