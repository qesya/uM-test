import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Elements';
import storage from '@/utils/storage';

export interface INavbar {
	hideMenu?: boolean;
}

export const Navbar = ({ hideMenu }: INavbar) => {
	const navigate = useNavigate();
	const { notifications } = useSelector((state) => (state as any).notifications);

	const updateProfile = () => {
		navigate('update-info');
	};

	const changePassword = () => {
		navigate('change-password');
	};

	const logout = () => {
		storage.clearToken();
		navigate('/');
	};

	const backToHome = () => {
		navigate('/home');
	};

	return (
		<header
			className={clsx(
				'text-gray-600 body-font sticky -mb-10',
				notifications.length > 0 ? '-z-50' : 'z-50'
			)}
		>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					<a href='' onClick={() => backToHome()} className='ml-3 text-xl'>
						React Code Test
					</a>
				</a>
				{!hideMenu ? (
					<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
						<a
							href=''
							className='mr-8 hover:text-bold'
							data-cy='update-profile-cy'
							onClick={() => updateProfile()}
						>
							Update Profile
						</a>
						<a
							href=''
							data-cy='change-password-cy'
							className='mr-0 md:mr-8 hover:text-bold'
							onClick={() => changePassword()}
						>
							Change Password
						</a>
					</nav>
				) : (
					<div className='md:ml-auto flex' />
				)}
				<Button
					variant='tertiary'
					className='mt-8 md:mt-0'
					data-cy='logout-cy'
					onClick={() => logout()}
					endIcon={
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-4 h-4 ml-1'
							viewBox='0 0 24 24'
						>
							<path d='M5 12h14M12 5l7 7-7 7'></path>
						</svg>
					}
				>
					Log Out
				</Button>
			</div>
		</header>
	);
};
