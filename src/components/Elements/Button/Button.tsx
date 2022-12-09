import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Spinner } from '@/components/Elements/Spinner';

const variants = {
	primary:
		'bg-near-black text-near-white hover:bg-near-black-300 hover:text-near-white active:bg-blue-700 hover:text-near-white focus:outline-none focus:ring focus:ring-blue-200',
	secondary:
		'bg-orange-500 text-near-black hover:bg-orange-300 hover:text-near-black active:bg-orange-700 active:text-near-black focus:outline-none focus:ring focus:ring-orange-200',
	tertiary:
		'bg-near-black-100 text-near-black shadow-[inset_0px_0px_0px_2px] shadow-near-black-500',
	disabled: 'bg-grey-100 text-grey-300',
	textOnly: 'border-0 font-normal',
};

const sizes = {
	xs: 'px-2.5 py-1.5 text-xs rounded',
	sm: 'px-3 py-2 text-sm rounded-md',
	md: 'px-8 py-2 text-sm rounded-md',
	lg: 'px-8 py-2 text-base rounded-md',
	xlg: 'px-6 py-3 text-base rounded-md',
};

type IconProps =
	| { startIcon: React.ReactElement; endIcon?: never }
	| { endIcon: React.ReactElement; startIcon?: never }
	| { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
	isLoading?: boolean;
} & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			type = 'button',
			className = '',
			variant = 'primary',
			size = 'md',
			name = '',
			isLoading = false,
			disabled = false,
			startIcon,
			endIcon,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				data-testid='btn-test'
				type={type}
				className={clsx(
					'inline-flex items-center font-bold uppercase',
					disabled ? variants['disabled'] : variants[variant],
					sizes[size],
					className
				)}
				name={name}
				disabled={disabled}
				{...props}
			>
				{isLoading && <Spinner size='sm' className='text-current' />}
				{!isLoading && startIcon}
				<span className={clsx('mt-[1px]', isLoading ? 'ml-2' : '')}>{props.children}</span>
				{!isLoading && endIcon}
			</button>
		);
	}
);

Button.displayName = 'Button';
