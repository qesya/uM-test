import { useNavigate } from 'react-router-dom';

import Img from '@/assets/landing.png';
import { Button } from '@/components/Elements';
import { useAuth } from '@/hooks/useAuth';

export const Landing = () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	const handleLoginStart = () => {
		if (user) {
			navigate('/home');
		} else {
			navigate('/auth/login');
		}
	};

	const handleRegisterStart = () => {
		if (user) {
			navigate('/home');
		} else {
			navigate('/auth/register');
		}
	};

	return (
		<section className='text-gray-600 body-font h-screen justify-center items-center'>
			<div className='flex px-5 items-center justify-center flex-col h-full'>
				<img
					className='lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center rounded'
					alt='hero'
					src={Img}
				/>
				<div className='text-center lg:w-2/3 w-full'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Hey 👋, Welcome to my project
					</h1>
					<p className='mb-8 leading-relaxed px-16'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui possimus
						commodi adipisci et fuga recusandae culpa. Commodi corrupti fugit expedita
						nostrum aut.
					</p>
					<div className='flex justify-center'>
						<Button
							className='py-3 justify-between'
							variant='primary'
							data-cy='signin-cy'
							onClick={handleLoginStart}
						>
							Sign In
						</Button>
						<Button
							className='py-3 ml-3'
							variant='tertiary'
							data-cy='signup-cy'
							onClick={handleRegisterStart}
						>
							Sign Up
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
