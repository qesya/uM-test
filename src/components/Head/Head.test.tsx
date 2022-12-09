import { render, waitFor } from '@/lib/vitest/testUtils';

import { Head } from './Head';

describe('Head', () => {
	it('should add proper page title and meta description', async () => {
		const title = 'Title Test';
		const titleSuffix = ' | RAB';
		const description = 'This is a test description';

		render(<Head title={title} description={description} />);
		await waitFor(() => expect(document.title).toEqual(title + titleSuffix));

		const metaDescription = document.querySelector("meta[name='description']");
		expect(metaDescription?.getAttribute('content')).toEqual(description);
	});
});
