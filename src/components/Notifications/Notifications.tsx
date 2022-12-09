import { useSelector, useDispatch } from 'react-redux';

import { Notification } from './Notification';
import { dismissNotification, NotificationProps } from './notificationsSlice';

export const Notifications = () => {
	const dispatch = useDispatch();
	const onDismiss = (id: string) => {
		dispatch(dismissNotification(id));
	};
	const { notifications } = useSelector((state) => (state as any).notifications);
	return (
		<>
			<div
				aria-live='assertive'
				className='fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-10'
			>
				<div className='flex flex-col items-center space-y-4 w-full  sm:items-end'>
					{notifications.map((notification: NotificationProps) => {
						return (
							<Notification
								key={notification.id}
								notification={notification}
								onDismiss={onDismiss}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
