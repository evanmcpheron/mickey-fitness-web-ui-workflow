import React from 'react';
import LogInForm from './Components/LogInForm';
import { Grid, Paper } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

export const LoginContainer = () => {
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
			<Grid item xs={12} sm={6}>
				<Paper elevation={3}>
					<LogInForm />
				</Paper>
			</Grid>
		</Grid>
	);
};
