import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const Link = ({ text, color, variant, to }) => {
	return (
		<Button
			variant={variant}
			sx={
				variant === 'text'
					? { padding: 0, '&:hover': { backgroundColor: 'transparent' } }
					: null
			}
			color={color}
			component={RouterLink}
			to={to}>
			{text}
		</Button>
	);
};
