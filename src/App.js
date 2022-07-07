import React, { useEffect } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { AllRoutes } from './Util/AllRoutes';
import { Navbar } from 'Components/Navbar/Navbar';
import { get } from 'lodash';
import axios from 'axios';

const App = () => {
	if (localStorage.authenticated) {
		const getUser = async () => {
			const response = await axios.get('/v1/user/me', {
				withCredentials: true,
			});
			localStorage.setItem(
				'user',
				JSON.stringify(get(response, 'data.results', null))
			);
		};
		getUser();
	}
	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<Box>
			<Navbar />
			<Container maxWidth={'xl'}>
				<Stack direction={'row'}>
					<AllRoutes />
				</Stack>
			</Container>
		</Box>
	);
};

export default App;
