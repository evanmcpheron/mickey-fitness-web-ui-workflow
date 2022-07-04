import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

const fieldsLogIn = [
	{ name: 'email', label: 'Email', type: 'text' },
	{ name: 'password', label: 'Password', type: 'password' },
	{ name: 'rememberMe', label: 'Remember Me', fieldType: 'checkbox' },
];

const initValueLogIn = {
	email: '',
	password: '',
	rememberMe: false,
};

const setup = async (props = {}, throwError) => {
	const defaultProps = {
		fields: fieldsLogIn,
		initialValues: initValueLogIn,
	};
	const setupProps = { ...defaultProps, ...props };

	const handleSubmit = jest.fn();
	const utils = render(<Form onSubmit={handleSubmit} {...setupProps} />);
	const user = userEvent.setup();

	return {
		handleSubmit,
		user,
		...utils,
	};
};

describe('Components/Form', () => {
	test('rendering and submitting a basic Formik form', async () => {
		const { handleSubmit, user } = await setup();

		await user.type(
			screen.getByLabelText('Email'),
			'john.doe@mickeyfitness.com'
		);
		await user.type(screen.getByLabelText('Password'), 'password');
		await user.click(screen.getByLabelText('Remember Me'));

		await user.click(screen.getByRole('button', { name: 'Submit' }));

		await waitFor(() =>
			expect(handleSubmit).toHaveBeenCalledWith({
				email: 'john.doe@mickeyfitness.com',
				password: 'password',
				rememberMe: true,
			})
		);
	});

	test('Should render title with prop', async () => {
		await setup({ title: 'Title Prop' });

		waitFor(() => screen.getByTestId('form-title'));
		expect(screen.getByTestId('form-title')).toHaveTextContent('Title Prop');
	});

	test('Should render reset button with prop', async () => {
		await setup({ includeReset: true });

		waitFor(() => screen.getByTestId('reset-button'));
	});

	test('Should render reset button with prop', async () => {
		await setup({ submitButtonValue: 'Send' });

		waitFor(() => screen.getByTestId('submit-button'));
		screen.getByRole('button', {
			name: 'Send',
		});
	});
});
