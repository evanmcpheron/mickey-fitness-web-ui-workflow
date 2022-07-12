import React, { useEffect, useState } from 'react';
import { Box, Toolbar, Typography, IconButton } from '@mui/material';
import { AppBar } from './Component/DrawerFuncs';
import { Menu } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Dropdown } from './Component/Dropdown';
import { NavDrawer } from './Component/NavDrawer';
import { Link } from 'Components/Link';

export const Navbar = ({
	isAuthenticated,
	colorMode,
	theme,
	sendOpenToApp,
}) => {
	const [openDrawer, setOpenDrawer] = useState(false);

	useEffect(() => {
		sendOpenToApp(openDrawer);
	}, [openDrawer]);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" open={openDrawer}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						sx={{ mr: 2 }}
						color="inherit"
						aria-label="menu"
						onClick={() => setOpenDrawer(prev => !prev)}>
						<Menu />
					</IconButton>
					<NavDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
						<Link text="Mickey Fitness" color="inherit" variant="text" to="/" />
					</Typography>
					<Box color={'inherit'}>
						{isAuthenticated ? (
							<Dropdown color={'inherit'} />
						) : (
							<Link
								text="Log In / Register"
								to="signup"
								varient="text"
								color="inherit"
							/>
						)}
					</Box>
					<IconButton onClick={colorMode.toggleColorMode} color="inherit">
						{theme.palette.mode === 'dark' ? (
							<Brightness7Icon />
						) : (
							<Brightness4Icon />
						)}
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
