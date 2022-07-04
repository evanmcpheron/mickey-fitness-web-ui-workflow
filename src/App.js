import { Container } from '@mui/material';
import React from 'react';
import { AllRoutes } from './Util/AllRoutes';

const App = () => {
	return (
		<Container sx={{ backgroundColor: 'red' }}>
			<AllRoutes />
		</Container>
	);
};

export default App;
