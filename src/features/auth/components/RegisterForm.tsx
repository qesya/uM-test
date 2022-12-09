import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import registerImg from '@/assets/register.png';
import { Button } from '@/components/Elements';
import { FormContainer as Form, InputField } from '@/components/Form';
import { addNotification } from '@/components/Notifications/notificationsSlice';
import storage from '@/utils/storage';

import { useRegisterUserMutation } from '../api/authApi';
import { RegistrationRequest, UserResponse } from '../types';

const initialValues = {
	email: '',
	firstName: '',
	lastName: '',
	password: '',
	confirmPassword: '',
};

const schema = Yup.object().shape({
	email: Yup.string().label('Email').email().required(),
	firstName: Yup.string().label('First Name').required().min(3).max(20),
	lastName: Yup.string().label('Last Name').required().min(3).max(30),
	password: Yup.string().label('Password').required(),
	confirmPassword: Yup.string()
		.label('Password')
		.required('Please confirm your password')
		.when('password', {
			is: (password: string) => (password && password.length > 0 ? true : false),
			then: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match"),
		}),
});

export const RegisterForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [registerUser, { data, isSuccess, isError, error }] = useRegisterUserMutation();

	useEffect(() => {
		if (isSuccess) {
			const { jwt } = data as UserResponse;
			dispatch(
				addNotification({
					type: 'success',
					title: 'Success',
					message: 'You have successfully registered an account',
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
	}, [dispatch, error, isError]);

	return (
		<div className='flex flex-col md:flex-row px-16 pb-8 md:pb-0'>
			<div className='flex w-full md:w-6/12 mb-4 md:mb-0'>
				<img className='object-contain rounded' alt='hero' src={registerImg} />
			</div>
			<div className='flex flex-col w-full md:w-6/12 justify-center'>
				<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
					Let&apos;s Get Started
				</h1>
				<p className='-mt-4 mb-3 text-near-black-50 font-normal'>
					Please register down below
				</p>
				<Form
					initialValues={initialValues}
					onSubmit={async (values: RegistrationRequest, actions: any) => {
						await registerUser(values);
						actions.setSubmitting(false);
					}}
					schema={schema}
				>
					{(formikProps: any) => {
						const { isSubmitting, isValid, dirty } = formikProps;
						return (
							<>
								<InputField type='text' label='First Name' name='firstName' />
								<InputField type='text' label='Last Name' name='lastName' />
								<InputField type='email' label='Email' name='email' />
								<InputField type='password' label='Password' name='password' />
								<InputField
									type='password'
									label='Confirm Password'
									name='confirmPassword'
								/>
								<div className='pt-5 mt-4'>
									<div className='flex justify-start'>
										<Button
											type='submit'
											isLoading={isSubmitting}
											disabled={!isValid || !dirty}
										>
											Submit
										</Button>
									</div>
								</div>
							</>
						);
					}}
				</Form>
			</div>
		</div>
	);
};
