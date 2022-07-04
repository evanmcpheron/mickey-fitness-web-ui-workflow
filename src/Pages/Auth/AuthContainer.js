import React from 'react';
import LogInForm from './Components/LogInForm';
import SignUpForm from './Components/SignUpForm';
import { Grid, Paper } from '@mui/material';

export const AuthContainer = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<Paper elevation={3}>
					<LogInForm />
				</Paper>
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper elevation={3}>
					<SignUpForm />
				</Paper>
			</Grid>
		</Grid>
	);
};
