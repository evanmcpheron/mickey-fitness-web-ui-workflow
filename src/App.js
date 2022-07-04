import { Container, Stack } from '@mui/material';
import React from 'react';
import { AllRoutes } from './Util/AllRoutes';

const App = () => {
	return (
		<Container maxWidth={'xl'}>
			{/* navbar */}
			<Stack direction={'row'}>
				<AllRoutes />
			</Stack>
		</Container>
	);
};

export default App;
