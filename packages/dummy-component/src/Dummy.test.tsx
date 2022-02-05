import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Dummy } from './Dummy';

describe('Dummy', () => {
	test('dummy test', () => {
		const { getByText } = render(<Dummy>Dummy text</Dummy>);
		const element = getByText('Dummy text');

		expect(element).toBeInTheDocument();
	});
});
