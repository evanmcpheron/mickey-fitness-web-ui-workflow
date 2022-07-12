import axios from 'axios';
import { proxy } from 'Util/proxy';

export const logout = async () => {
	localStorage.setItem('user', null);
	localStorage.setItem('isAuthenticated', false);
	const header = { 'Content-Type': 'application/json' };
	await axios.post(`${proxy()}/v1/user/signout`, header);
};
