import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link as MuiLink } from '@mui/material';

export const Link = ({ text, color, variant, to, ...props }) => {
	console.log('🚀 ~ file: Link.js ~ line 6 ~ Link ~ props', props);
	return (
		<Button variant={variant} color={color} component={RouterLink} to={to}>
			{text}
		</Button>
	);
};
