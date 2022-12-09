import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from '../../../stores/store';

import { Navbar, INavbar } from './Navbar';

const meta: Meta = {
	title: 'Components/Elements/Navbar',
	component: Navbar,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

const Template: Story<INavbar> = (props) => (
	<Provider store={store}>
		<Router>
			<Navbar {...props} />
		</Router>
	</Provider>
);

export const Default = Template.bind({});
Default.args = {};
