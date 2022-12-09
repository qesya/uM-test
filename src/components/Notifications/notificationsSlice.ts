import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export type NotificationProps = {
	id: string;
	type: 'info' | 'success' | 'warning' | 'error';
	title: string;
	message?: string;
};

export interface NotificationState {
	notifications: NotificationProps[];
}

const initialState: NotificationState = {
	notifications: [],
};

export const NotificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		addNotification: (state, action) => {
			const { type, title, message } = action.payload;
			state.notifications.push({
				id: nanoid(),
				type,
				title,
				message,
			});
		},
		dismissNotification: (state, action) => {
			const id = action.payload;
			state.notifications = state.notifications.filter(
				(notification: NotificationProps) => notification.id !== id
			);
		},
	},
});

export const { addNotification, dismissNotification } = NotificationSlice.actions;
