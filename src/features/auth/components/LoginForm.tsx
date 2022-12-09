import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import signInImg from '@/assets/signin.png';
import { Button } from '@/components/Elements';
import { FormContainer as Form, InputField } from '@/components/Form';
import { addNotification } from '@/components/Notifications/notificationsSlice';
import { useLoginUserMutation } from '@/features/auth';
import { useAuth } from '@/hooks/useAuth';
import storage from '@/utils/storage';

import { LoginRequest, UserResponse } from '../../auth/types';

export const LoginForm = () => {
	const { user } = useAuth();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loginUser, { data, isSuccess, isError, error }] = useLoginUserMutation();

	useEffect(() => {
		if (isSuccess) {
			const { jwt } = data as UserResponse;
			dispatch(
				addNotification({
					type: 'success',
					title: 'Success',
					message: 'You have successfully logged in',
				})
			);
			storage.setToken(jwt);
			navigate('/home');
		}
	}, [data, dispatch, isSuccess, navigate]);

	useEffect(() => {
		if (isError) {
			dispatch(
				addNotification({
					type: 'error',
					title: 'Error',
					message: (error as any).data.message,
				})
			);
		}
	}, [isError, error, dispatch]);

	const initialValues = {
		email: '',
		password: '',
	};

	const schema = Yup.object().shape({
		email: Yup.string().label('Email').email().required(),
		password: Yup.string().label('Password').required(),
	});

	const handleRegisterStart = () => {
		if (user) {
			navigate('/home');
		} else {
			navigate('/auth/register');
		}
	};

	return (
		<div className='flex flex-col md:flex-row px-16'>
			<div className='flex w-full md:w-6/12 mb-8 md:mb-0'>
				<img className='object-contain rounded' alt='hero' src={signInImg} />
			</div>
			<div className='flex flex-col w-full md:w-6/12 justify-center'>
				<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
					Welcome back!
					<br />
					Please enter your details.
				</h1>
				<Form
					initialValues={initialValues}
					onSubmit={async (values: LoginRequest, actions: any) => {
						await loginUser(values);
						actions.setSubmitting(false);
					}}
					schema={schema}
				>
					{(formikProps: any) => {
						const { isSubmitting, isValid, dirty } = formikProps;
						return (
							<>
								<InputField
									type='email'
									label='Email'
									name='email'
									className='mb-4'
								/>
								<InputField type='password' label='Password' name='password' />
								<div className='pt-8'>
									<div className='flex justify-start'>
										<Button
											type='submit'
											isLoading={isSubmitting}
											disabled={!isValid || !dirty}
										>
											Sign In
										</Button>
									</div>
								</div>
							</>
						);
					}}
				</Form>
				<div className='flex flex-row items-center mt-6 pb-8 md:pb-0'>
					<p>Don&apos;t have an account? </p>
					<a
						href=''
						className='ml-1 mb:mt-4 underline font-medium text-near-black-600'
						onClick={handleRegisterStart}
					>
						Sign up
					</a>
				</div>
			</div>
		</div>
	);
};
