import { get } from 'lodash';
import axios from 'axios';

export const getUser = async () => {
	const response = await axios.get('/v1/user/me', {
		withCredentials: true,
	});
	localStorage.setItem(
		'user',
		JSON.stringify(get(response, 'data.results', null))
	);
};
