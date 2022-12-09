import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './Button';

const meta: Meta = {
	title: 'Components/Elements/Button',
	component: Button,
	parameters: {
		control: {
			expanded: true,
		},
	},
};

export default meta;

const startIcon = <ArrowCircleLeftIcon className='h-6 w-6 mr-2' />;
const endIcon = <ArrowCircleRightIcon className='h-6 w-6 ml-2' />;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary Button',
	variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Secondary Button',
	variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	children: 'Tertiary Button',
	variant: 'tertiary',
};

export const PrimaryStartIcon = Template.bind({});
PrimaryStartIcon.args = {
	children: 'Primary Button',
	variant: 'primary',
	startIcon: startIcon,
};

export const PrimaryEndIcon = Template.bind({});
PrimaryEndIcon.args = {
	children: 'Primary Button',
	variant: 'primary',
	endIcon: endIcon,
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Primary Button',
	variant: 'primary',
	disabled: true,
};
