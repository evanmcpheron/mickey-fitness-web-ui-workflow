import axios from 'axios';

export const fieldsSignUp = [
	{ name: 'email', label: 'Email', type: 'text' },
	{ name: 'password', label: 'Password', type: 'password' },
	{ name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
];

export const initValueSignUp = {
	email: '',
	password: '',
	confirmPassword: '',
};

export const submitSignUp = async value => {
	const body = JSON.stringify(value);
	const header = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const res = await axios.post(
		'http://localhost:8080/v1/user/signup',
		body,
		header
	);

	console.log(res.data);
};
