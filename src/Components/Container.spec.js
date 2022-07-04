import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from './Container';

const setup = async (props = {}) => {
	const defaultProps = {};
	const setupProps = { ...defaultProps, ...props };

	const utils = render(<Container {...setupProps}></Container>);

	waitFor(() => screen.getByTestId('container'));
	return {
		...utils,
	};
};

describe('Components/Container', () => {
	test('Should render without error', async () => {
		await setup();
	});
});
