import React, { Fragment } from 'react';
import {
	Box,
	Drawer,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { fields } from './DrawerFuncs';
import { Home } from '@mui/icons-material';

export const NavDrawer = ({ openDrawer, setOpenDrawer }) => {
	const toggleDrawer = event => {
		console.log(
			'🚀 ~ file: NavDrawer.js ~ line 17 ~ NavDrawer ~ event',
			event.type
		);

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
				<List>
					{fields.map((text, index) => (
						<ListItem key={index} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Home />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
		</Box>
	);
};
