import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Dropdown } from './Component/Dropdown';
import { NavDrawer } from './Component/NavDrawer';
import { Link } from 'Components/Link';

export const Navbar = ({ isAuthenticated, colorMode, theme }) => {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={() => setOpenDrawer(prev => !prev)}
						sx={{ mr: 2 }}>
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
								to="auth"
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
