import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Button, Navbar } from '@/components/Elements';
import { FormContainer as Form, InputField } from '@/components/Form';
import { addNotification } from '@/components/Notifications/notificationsSlice';
import { useUpdateUserInfoMutation } from '@/features/auth';
import { useAuth } from '@/hooks/useAuth';

import { UpdateInfoRequest } from '../../auth/types';

const initialValues = {
	id: '',
	firstName: '',
	lastName: '',
	email: '',
	address_line_1: '',
	address_line_2: '',
	city: '',
	postcode: '',
};

const schema = Yup.object().shape({
	email: Yup.string().label('Email').email().required(),
	firstName: Yup.string().label('First Name').required().min(3).max(20),
	lastName: Yup.string().label('Last Name').required().min(3).max(30),
	address_line_1: Yup.string().label('Address Line 1').required(),
	address_line_2: Yup.string().label('Address Line 2').optional(),
	city: Yup.string().label('City').required(),
	postcode: Yup.string().label('Postcode').required(),
});

export const UpdateProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useAuth();
	const [updateUser, { data, isSuccess, isError, error }] = useUpdateUserInfoMutation();

	useEffect(() => {
		if (isSuccess) {
			dispatch(
				addNotification({
					type: 'success',
					title: 'Success',
					message: 'You have successfully updated your account',
				})
			);
			console.log('user update', data);
			navigate('/home');
		}
	}, [data, dispatch, isSuccess, navigate]);

	useEffect(() => {
		if (isError) {
			dispatch(
				addNotification({
					type: 'error',
					title: 'Error',
					message: (error as any).detail,
				})
			);
		}
	}, [dispatch, error, isError]);

	return (
		<>
			<Navbar hideMenu />
			<div className='flex flex-row px-16 py-16 w-full'>
				<div className='flex flex-col w-6/12 justify-center mx-auto'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Update Profile
					</h1>
					<p className='-mt-4 mb-3 text-near-black-100 font-normal'>
						Please fill the form below
					</p>
					<Form
						initialValues={initialValues}
						onSubmit={async (values: UpdateInfoRequest, actions: any) => {
							const data = { ...values, id: user?.id as string };
							console.log('value', data);
							await updateUser(data);
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
									<InputField
										type='text'
										label='Address Line 1'
										name='address_line_1'
									/>
									<InputField
										type='text'
										label='Address Line 2'
										name='address_line_2'
									/>
									<InputField type='text' label='City' name='city' />
									<InputField type='text' label='Postcode' name='postcode' />
									<div className='pt-5 mt-8'>
										<div className='flex justify-start'>
											<Button
												type='submit'
												isLoading={isSubmitting}
												disabled={!isValid || !dirty}
											>
												Submit
											</Button>
											<Button
												className='ml-3'
												type='button'
												variant='textOnly'
												onClick={() => navigate('/home')}
											>
												back
											</Button>
										</div>
									</div>
								</>
							);
						}}
					</Form>
				</div>
			</div>
		</>
	);
};
