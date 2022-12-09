/* eslint-disable import/export */
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach } from 'vitest';

import { AppProvider } from '@/providers/app';

afterEach(() => {
	cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) => {
	render(ui, {
		wrapper: AppProvider,
		...options,
	});
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// Override render export from @testing-library/react
export { customRender as render };
