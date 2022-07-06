import React, { useEffect } from 'react';
import { Container, Stack } from '@mui/material';
import { AllRoutes } from './Util/AllRoutes';
import { Navbar } from 'Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

const App = () => {
	const getUser = async () => {
		const response = await axios.get('/v1/user/me', {
			withCredentials: true,
		});
		console.log('🚀 ~ file: App.js ~ line 11 ~ getUser ~ response', response);
	};
	useEffect(() => {
		getUser();
	}, []);
	return (
		<Router>
			<Navbar />
			<Container maxWidth={'xl'}>
				<Stack direction={'row'}>
					<AllRoutes />
				</Stack>
			</Container>
		</Router>
	);
};

export default App;
