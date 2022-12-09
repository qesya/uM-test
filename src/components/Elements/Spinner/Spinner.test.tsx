/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { render } from '@testing-library/react';

import { Spinner } from './Spinner';

describe('Spinner', () => {
	it('should render the Spinner', async () => {
		const result = render(<Spinner size='xl' />);
		expect(result).toMatchSnapshot();
	});
});
