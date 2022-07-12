import React from 'react';
import LogInForm from './Components/LogInForm';
import SignUpForm from './Components/SignUpForm';
import { Grid, Paper } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

export const SignupContainer = () => {
	if (localStorage.authenticated) {
		return (
			<Routes>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		);
	}

	return (
		<Grid
			container
			sx={{
				minHeight: 'calc(100vh - 64px)',
				padding: 'none',
				alignItems: 'center',
			}}>
			<Grid item xs={12} md={6}>
				<Paper elevation={3}>
					<SignUpForm />
				</Paper>
			</Grid>
		</Grid>
	);
};
