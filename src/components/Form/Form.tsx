import { Form, Formik } from 'formik';

export const FormContainer = (props: any) => {
	const { children, initialValues, onSubmit, schema, formStyles } = props;
	const handleSubmit = (values: any, actions: any) => {
		onSubmit(values, actions);
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
			{(formikProps: any) => {
				const { handleSubmit } = formikProps;
				return (
					<Form className={formStyles} onSubmit={handleSubmit}>
						{children(formikProps)}
					</Form>
				);
			}}
		</Formik>
	);
};
