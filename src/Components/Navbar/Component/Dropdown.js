import React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { logout } from '../NavbarFuncs';
import { useNavigate } from 'react-router-dom';

export const Dropdown = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		logout();
		handleClose();
	};

	return (
		<Box>
			<IconButton color={'inherit'} onClick={handleClick}>
				<AccountCircle
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					color={'inherit'}
				/>
			</IconButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem
					to="/login"
					color="inherit"
					onClick={() => {
						handleLogout();
						navigate('/login');
					}}>
					Logout
				</MenuItem>
			</Menu>
		</Box>
	);
};
