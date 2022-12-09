import { ExclamationCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { FieldHookConfig, useField } from 'formik';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
	type?: 'text' | 'email' | 'password';
	className?: string;
	placeholder?: string;
};

export const InputField = (props: InputFieldProps & FieldHookConfig<string>) => {
	const { type, label, placeholder, width, className } = props;
	const [field, meta] = useField(props);
	const { error, touched } = meta;
	return (
		<FieldWrapper error={error} touched={touched} label={label} width={width}>
			<input
				type={type}
				placeholder={placeholder}
				{...field}
				className={clsx(
					'flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-1 border-near-black-100',
					error && touched
						? 'text-red-800 placeholder:text-red-200 border-red-500 focus:ring-red-500 focus:border-red-500'
						: '',
					className
				)}
				aria-invalid='true'
				aria-describedby='email-error'
			/>

			{touched && error ? (
				<div
					className={clsx(
						'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'
					)}
				>
					<ExclamationCircleIcon
						className={clsx('h-5 w-5 text-red-500')}
						aria-hidden='true'
					/>
				</div>
			) : null}
		</FieldWrapper>
	);
};
