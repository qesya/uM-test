import clsx from 'clsx';
import { FieldHookConfig, useField } from 'formik';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type Option = {
	label: React.ReactNode;
	value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
	options: Option[];
	className?: string;
	defaultValue?: string;
	placeholder?: string;
};

export const SelectField = (props: SelectFieldProps & FieldHookConfig<string>) => {
	const { label, options, className, defaultValue, placeholder, width } = props;
	const [field, meta] = useField(props);
	const { error, touched } = meta;
	return (
		<FieldWrapper label={label} error={error} touched={touched} width={width}>
			<select
				placeholder={placeholder}
				className={clsx(
					'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md',
					className
				)}
				defaultValue={defaultValue}
				{...field}
			>
				<option value='' selected disabled hidden>
					Please select...
				</option>
				{options.map(({ label, value }) => (
					<option key={label?.toString()} value={value}>
						{label}
					</option>
				))}
			</select>
		</FieldWrapper>
	);
};
