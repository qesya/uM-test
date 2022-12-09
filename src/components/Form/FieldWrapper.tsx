import clsx from 'clsx';

const widths = {
	col1: 'sm:col-span-1',
	col2: 'sm:col-span-2',
	col3: 'sm:col-span-3',
	col4: 'sm:col-span-4',
	col5: 'sm:col-span-5',
	col6: 'sm:col-span-6',
};

type FieldWrapperProps = {
	label?: string;
	className?: string;
	width?: keyof typeof widths;
	children?: React.ReactNode;
	error?: string;
	touched?: boolean;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = (props: FieldWrapperProps) => {
	const { label, className, error, touched, children, width = 'col3' } = props;
	return (
		<div className={clsx('sm:col-span-3', widths[width], className)}>
			<label
				htmlFor='company-website'
				className={clsx('block text-sm font-medium text-gray-700 mt-4', className)}
			>
				{label}
			</label>
			<div className={clsx('mt-1 relative rounded-md shadow-sm')}>{children}</div>
			{touched && error ? (
				<p className={clsx('mt-2 text-sm text-red-600')} id='email-error'>
					{error}
				</p>
			) : null}
		</div>
	);
};
