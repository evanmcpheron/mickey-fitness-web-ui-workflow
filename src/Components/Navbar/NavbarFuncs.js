import axios from 'axios';

export const logout = async () => {
	localStorage.setItem('user', null);
	localStorage.setItem('isAuthenticated', false);
	const header = { 'Content-Type': 'application/json' };
	await axios.post('/v1/user/signout', header);
};
