# State Management

## Component State

This is state that only a component needs, at is not meant to be shared elsewhere, however you can pass it as props to child components if required. When dealing with state inside of an application this is the best place to start and only lift state up if it is required across multiple components. Component state usually requires the follwing:

-   useState - used for simple states that are independent
-   useReducer - used for more complex states where a single action updates several pieces of state

Example of simple Component State

```
import React, {useState} from 'react';

import MainNavbar from "../MainNavbar";
import SideNavMenu from '../SideNavMenu';

export const MainLayout = () => {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <MainNavBar open={isOpen} handleOpen={handleOpen}>
        <SideNavMenu open={isOpen} handleClose={handleClose}>
    )
}
```

## Application State

This is the state the controls interactive parts of the application, modals, notifications, complicated dropdowns etc. This state should be kept as close to the components that are using it for performance and maintainability reasons. Its a bad practice to make everything global out of the box.

react-code-test uses `Redux Toolkit` and `Redux Saga` to manage state and side effects. `Redux Toolkit` provides excellent dev tools that let you observe actions as they are being dispatched enabling you to see exactly where state is being called from and what that state looks like at any point in time.

With `Redux Saga` you can manage side effects of disatched actions very easily, for example nesting actions so if a data fetch failed `Redux Saga` would dispatch a further action to display an error alert.

[More information on Redux Toolkit](https://redux-toolkit.js.org/)\
[More information on Redux Saga](https://redux-saga.js.org/)

## Server Cache State

This is state that comes from the server which is being cached on the client for further usage. react-code-test uses `RTK Query` (which is part of Redux Toolkit) to manage it's server state.

[More information on RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

## Form State

This is state the tracks the information users input in forms

React forms come in two different flavours, [controlled](https://reactjs.org/docs/forms.html#controlled-components) and [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html), the difference is controlled components use State in order to get the data where as uncontrolled use Ref's to get the data directly from the DOM. The general advice is to use `controlled components` when building forms.

It is possible to build forms using just React, it can be quite time consuming when factoring all the different field types which require different sorts of validations so instead react-code-test uses [`Formik`](https://formik.org/) along side [`yup`](https://github.com/jquense/yup) to create and validate any forms within the application.

We should also create an abstracted Form component for use throughout the application as well as wrap our form inputs in a custom wrapper.

Basic abstracted Form example

```
export const Form = (props) => {
    const {initialValues, onSubmit, schema, children, } = props;

    return (
        <Form
			initialValues={initialValues}
			onSubmit={onSubmit}
			schema={schema}
			buttonText="Submit"
		>
            {children}
        </form>
    )
}
```

Basic field wrapper example

```
export const FieldWrapper = (props) => {
	const { label, className, error, touched, children, width = 'col3' } = props;

	return (
		<div>
			<label
				htmlFor={name}
			>
				{label}
			</label>
			<div>{children}</div>
			{touched && error ? (
				<p>
					{error}
				</p>
			) : null}
		</div>
	);
};

```

Basic input field example using field wrapper

```
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { FieldHookConfig, useField } from 'formik';

export const InputField = (props) => {
	const { type, placeholder, width } = props;
	const [field, meta] = useField(props);
	const { error, touched } = meta;

	return (
		<FieldWrapper error={error} touched={touched}>
			<input
				type={type}
				placeholder={placeholder}
				{...field}
			/>

			{touched && error ? (
				<div
				>
					<ExclamationCircleIcon />
				</div>
			) : null}
		</FieldWrapper>
	);
};
```

## URL State

State that is being kept in the broswers address bar can usually be tracked with url params or query params. We have already implemented `react-router-dom` in order to access this.
