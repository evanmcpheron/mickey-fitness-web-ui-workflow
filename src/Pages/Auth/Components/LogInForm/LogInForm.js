import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthForm } from '../AuthForm';
import { validateLogIn } from './LogInFormValidation';
import { initValueLogIn, fieldsLogIn } from './LogInFormFuncs';
import { Box, Typography } from '@mui/material';
import { Link } from 'Components/Link';

export const LogInForm = () => {
	const onSuccess = () => {
		localStorage.setItem('isAuthenticated', true);
		return <Navigate to="/" replace />;
	};

	return (
		<Box>
			<AuthForm
				validationSchema={validateLogIn}
				initialValues={initValueLogIn}
				fields={fieldsLogIn}
				title={'Log In'}
				includeReset={true}
				url={'/v1/user/login'}
				method={'post'}
				onSuccess={() => onSuccess()}
			/>
			<Typography textAlign={'center'} paddingBottom={2}>
				Need to sign up?{' '}
				<Link
					color={'success'}
					to={'/signup'}
					variant={'text'}
					text={'Click Here'}
				/>
			</Typography>
		</Box>
	);
};
