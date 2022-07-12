import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthForm } from '../AuthForm';
import { validateSignUp } from './SignUpFormValidation';
import { initValueSignUp, fieldsSignUp } from './SignUpFormFuncs';
import { Box, Typography } from '@mui/material';
import { Link } from 'Components/Link';

export const SignUpForm = () => {
	const onSuccess = () => {
		return <Navigate to="/" replace />;
	};

	return (
		<Box>
			<AuthForm
				validationSchema={validateSignUp}
				initialValues={initValueSignUp}
				fields={fieldsSignUp}
				title={'Sign Up'}
				includeReset={true}
				url={'/v1/user/signup'}
				method={'post'}
				onSuccess={() => onSuccess()}
			/>
			<Typography textAlign={'center'} paddingBottom={2}>
				Already a member?{' '}
				<Link
					color={'success'}
					to={'/login'}
					variant={'text'}
					text={'Click Here'}
				/>
			</Typography>
		</Box>
	);
};
