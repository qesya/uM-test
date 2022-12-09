import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Button, Navbar } from '@/components/Elements';
import { FormContainer as Form, InputField } from '@/components/Form';
import { addNotification } from '@/components/Notifications/notificationsSlice';
import { useChangeUserPasswordMutation } from '@/features/auth';

import { ChangePasswordRequest } from '../../auth/types';

const initialValues = {
	old_password: '',
	new_password: '',
};

const schema = Yup.object().shape({
	old_password: Yup.string().label('Password').required(),
	new_password: Yup.string().label('Password').required(),
});

export const ChangePassword = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [changePassword, { data, isSuccess, isError, error }] = useChangeUserPasswordMutation();

	useEffect(() => {
		if (isSuccess) {
			dispatch(
				addNotification({
					type: 'success',
					title: 'Success',
					message: 'You have successfully change your password',
				})
			);
			console.log('user update', data?.detail);
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
		<>
			<Navbar hideMenu />
			<div className='flex flex-row px-16 py-16 w-full'>
				<div className='flex flex-col w-6/12 justify-center mx-auto'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Change password
					</h1>
					<p className='-mt-4 mb-3 text-near-black-100 font-normal'>
						Please fill the form below
					</p>
					<Form
						initialValues={initialValues}
						onSubmit={async (values: ChangePasswordRequest, actions: any) => {
							await changePassword(values);
							actions.setSubmitting(false);
						}}
						schema={schema}
					>
						{(formikProps: any) => {
							const { isSubmitting, isValid, dirty } = formikProps;
							return (
								<>
									<InputField
										type='password'
										label='Old Name'
										name='old_password'
									/>
									<InputField
										type='password'
										label='New Name'
										name='new_password'
									/>
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
