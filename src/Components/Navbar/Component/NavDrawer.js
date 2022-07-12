import React from 'react';
import {
	Box,
	Drawer,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	IconButton,
} from '@mui/material';
import { Main, DrawerHeader } from './DrawerFuncs';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { fields } from './DrawerFuncs';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export const NavDrawer = ({ openDrawer, setOpenDrawer }) => {
	const theme = useTheme();

	const toggleDrawer = event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setOpenDrawer(false);
	};

	return (
		<Box
			role="presentation"
			color="inherit"
			onClick={event => toggleDrawer(event)}
			onKeyDown={event => toggleDrawer(event)}>
			<Drawer
				PaperProps={{
					sx: {
						width: 300,
					},
				}}
				anchor={'left'}
				open={openDrawer}
				onClose={event => toggleDrawer(event)}>
				{' '}
				<DrawerHeader>
					<IconButton onClick={toggleDrawer}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<List>
					{fields.map((link, index) => (
						<ListItem component={Link} to={link.to} key={index} disablePadding>
							<ListItemButton>
								<ListItemIcon sx={{ color: 'text.primary' }}>
									{link.icon}
								</ListItemIcon>
								<ListItemText
									disableTypography
									primary={link.text}
									sx={{ color: 'text.primary' }}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
		</Box>
	);
};
