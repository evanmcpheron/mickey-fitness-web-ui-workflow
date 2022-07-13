import React, { useEffect, useState, useContext } from 'react';
import { Container, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AllRoutes } from './Util/AllRoutes';
import { Navbar } from 'Components/Navbar/Navbar';
import { getUser } from 'Util/getUser';
import { UNSAFE_NavigationContext } from 'react-router-dom';
import { Boolean } from 'Hooks/Boolean';
import { Main } from 'Components/Navbar/Component/DrawerFuncs';

const App = ({ ColorModeContext }) => {
	const [isAuth, setIsAuth] = useState(
		Boolean(localStorage.getItem('isAuthenticated'))
	);
	const [open, setOpen] = useState(false);

	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	const navigation = useContext(UNSAFE_NavigationContext).navigator;

	useEffect(() => {
		navigation.listen(() => {
			setIsAuth(Boolean(localStorage.getItem('isAuthenticated')));
		});
	}, [navigation, isAuth]);

	if (localStorage.isAuthenticated) {
		getUser();
	} else {
		localStorage.setItem('isAuthenticated', false);
		localStorage.setItem('user', null);
	}

	const user = JSON.parse(localStorage.getItem('user'));

	const pullData = data => {
		setOpen(data);
	};
	return (
		<Main
			open={open}
			sx={{
				paddingBottom: 0,
				minHeight: `${window.innerHeight}px`,
			}}>
			<Navbar
				isAuthenticated={isAuth}
				user={user}
				colorMode={colorMode}
				theme={theme}
				sendOpenToApp={pullData}
			/>
			<Container maxWidth={'xl'}>
				<Stack direction={'row'}>
					<AllRoutes />
				</Stack>
			</Container>
		</Main>
	);
};

export default App;
