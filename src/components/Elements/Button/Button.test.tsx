/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
	it('should render the Button', async () => {
		const mockFn = vi.fn(() => {});
		const testBtn = 'test';

		const result = render(<Button onClick={mockFn}>{testBtn}</Button>);
		expect(result).toMatchSnapshot();
	});

	it('should press the onClick', async () => {
		const mockFn = vi.fn(() => {});
		const testBtn = 'test';
		const { getByTestId } = render(<Button onClick={mockFn}>{testBtn}</Button>);
		fireEvent.click(getByTestId('btn-test'));
		expect(mockFn).toHaveBeenCalled();
	});
});
