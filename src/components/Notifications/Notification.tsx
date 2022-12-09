import { Transition } from '@headlessui/react';
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	InformationCircleIcon,
	XCircleIcon,
} from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { Fragment } from 'react';

export type NotificationProps = {
	notification: {
		id: string;
		type: keyof typeof icons;
		title: string;
		message?: string;
	};
	onDismiss: (id: string) => void;
};

const icons = {
	info: <InformationCircleIcon className='h-6 w-6 text-blue-500' aria-hidden='true' />,
	success: <CheckCircleIcon className='h-6 w-6 text-green-500' aria-hidden='true' />,
	warning: <ExclamationCircleIcon className='h-6 w-6 text-yellow-500' aria-hidden='true' />,
	error: <XCircleIcon className='h-6 w-6 text-red-500' aria-hidden='true' />,
};

const borders = {
	info: 'ring-1 ring-blue-500 ring-opacity-5',
	success: 'ring-1 ring-green-500 ring-opacity-5',
	warning: 'ring-1 ring-yellow-500 ring-opacity-5',
	error: 'ring-1 ring-red-500 ring-opacity-5',
};

export const Notification = ({
	notification: { id, type, title, message },
	onDismiss,
}: NotificationProps) => {
	return (
		<Transition
			show={true}
			as={Fragment}
			enter='transform ease-out duration-300 transition'
			enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
			enterTo='translate-y-0 opacity-100 sm:translate-x-0'
			leave='transition ease-in duration-100'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div
				className={clsx(
					'relative max-w-sm w-full bg-near-white shadow-lg rounded-lg pointer-events-auto overflow-hidden',
					borders[type]
				)}
			>
				<div className='p-4'>
					<div className='flex items-start'>
						<div className='flex-shrink-0'>{icons[type]}</div>
						<div className='ml-3 w-0 flex-1 pt-0.5'>
							<p className='text-sm font-medium text-gray-900'>{title}</p>
							<p className='mt-1 text-sm text-gray-500'>{message}</p>
						</div>
						<div className='ml-4 flex-shrink-0 flex'>
							<button
								type='button'
								className='bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								data-cy='notif-cy'
								onClick={() => {
									onDismiss(id);
								}}
							>
								<span className='sr-only'>Close</span>
								<XIcon className='h-5 w-5' aria-hidden='true' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	);
};
